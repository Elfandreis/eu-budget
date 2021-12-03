import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Map = ({ map, population }) => {
  const svgRef = React.useRef(null);
  const euCountries = [
    'PT',
    'ES',
    'FR',
    'IE',
    'IT',
    'BE',
    'NL',
    'LU',
    'DE',
    'AT',
    'CZ',
    'PL',
    'SK',
    'HU',
    'HR',
    'RO',
    'BG',
    'EL',
    'LT',
    'LV',
    'EE',
    'FI',
    'SE',
    'DK',
    'CY',
    'SI',
  ];
  useEffect(() => {
    draw();
  }, [map, population]);

  const draw = () => {
    const w = 960;
    const h = 960;

    const colorScale = d3
      .scaleLinear()
      .domain([1, 500, 5000, 10000, 30000, 50000, 83000])
      .range([
        '#bdc3c7',
        '#6196FF',
        '#1F69FF',
        '#0049DB',
        '#003399',
        '#002570',
      ]);
    const svg = d3
      .select(svgRef.current)
      .attr('viewBox', '0 0 ' + w + ' ' + h)
      .classed('svg-content', true);
    const projection = d3
      .geoOrthographic()
      .center([13, 40]) //comment centrer la carte, longitude, latitude
      .translate([w / 2, h / 2]) // centrer l'image obtenue dans le svg
      .scale([1500])
      .rotate([0, -10, 0]);
    const graticule = d3.geoGraticule().step([10, 10]);
    const path = d3.geoPath().projection(projection);
    Promise.all([map, population]).then((values) => {
      svg
        .append('path')
        .datum(graticule)
        .attr('class', 'graticule')
        .attr('d', path)
        .style('fill', '#fff')
        .style('stroke', '#ccc');
      svg
        .selectAll('path')
        .data(values[0].features)
        .enter()
        .append('path')
        .attr(
          'class',
          'stroke-2 stroke-countries hover:fill-current hover:text-gray-200 transition-colors	'
        )
        .attr('fill', function (d) {
          return euCountries.includes(d.id)
            ? colorScale(values[1].find((c) => c.id === d.id).population)
            : colorScale(0);
        })
        .attr('d', path);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Map;
