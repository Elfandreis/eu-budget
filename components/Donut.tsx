import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import {PieArcDatum} from 'd3-shape';

const Donut = () => {
  const svgRef = useRef();
  useEffect(() => {
    const width = 450;
    const height = 450;
    const margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .select('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);
    svg.selectAll('*').remove();
    // Create dummy data
    interface Datum {
      label: string;
      value: number;
    }
    const data = [
      {label: 'a', value: 83},
      {label: 'b', value: 338},
      {label: 'b', value: 385},
    ];
    // set the color scale
    const color = d3
      .scaleLinear<string, number>()
      .domain([1, 806])
      .range(['white', 'blue']);

    // Compute the position of each group on the pie:
    const pie = d3
      .pie<Datum>()
      .sort(null) // Do not sort group by size
      .value((d) => d.value);
    const data_ready = pie(data);

    // The arc generator
    const arc = d3
      .arc<PieArcDatum<Datum>>()
      .innerRadius(radius * 0.5) // This is the size of the donut hole
      .outerRadius(radius * 0.8);

    // Another arc that won't be drawn. Just for labels positioning
    const outerArc = d3
      .arc<PieArcDatum<Datum>>()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .join('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data.value))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);

    // Add the polylines between chart and labels:
    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .join('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr('points', function (d) {
        const posA = arc.centroid(d); // line insertion in the slice
        const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        const posC = outerArc.centroid(d); // Label position = almost the same as posB
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [...posA, ...posB, ...posC];
      });
    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .join('text')
      .text((d) => d.data.label)
      .attr('transform', function (d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        pos[1] = -Math.abs(pos[1]);
        return `translate(${pos})`;
      })
      .style('text-anchor', function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? 'start' : 'end';
      });
  }, []);
  return (
    <div className="flex flex-col overflow-hidden items-center justify-center w-full h-full ">
      <svg ref={svgRef}>
        <g></g>
      </svg>
    </div>
  );
};

export default Donut;
