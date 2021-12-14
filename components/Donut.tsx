import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import {PieArcDatum} from 'd3-shape';

const Donut = () => {
  const svgRef = useRef();
  useEffect(() => {
    const width = 500;
    const height = 500;
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      .select('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    svg.selectAll('*').remove();
    // Create dummy data
    interface Datum {
      label: string;
      value: number;
    }
    const data = [
      {label: 'Contributions', value: 83},
      {label: 'Grants', value: 338},
      {label: 'Loans', value: 385},
    ];
    // set the color scale
    const color = d3
      .scaleOrdinal<{}, string>()
      .domain(data)
      .range(['#A3C2FF', '#0049DB', '#001847']);

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
      .style('stroke-width', '15px');
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <svg ref={svgRef}>
        <g></g>
      </svg>
    </div>
  );
};

export default Donut;
