import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';

const Map = ({map, population, country, setCountry}) => {
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
    'GR',
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
  }, []);

  const draw = () => {
    const w = 960;
    const h = 700;

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
    const g = svg.append('g');
    const projection = d3
      .geoOrthographic()
      .center([12, 40])
      .translate([w / 2, h / 2])
      .scale([1600])
      .rotate([0, -10, 0]);

    const path = d3.geoPath().projection(projection);
    const pop = d3.csvParse(population);
    const graticule = d3.geoGraticule().step([5, 5]);
    g.append('path')
      .attr('class', 'text-gray-50 fill-current	')
      .attr('d', path({type: 'Sphere'}));
    g.append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path)
      .style('fill', 'none')
      .style('stroke', '#ccc');
    Promise.all([map, pop]).then((values) => {
      g.selectAll('.country')
        .data(values[0].features)
        .enter()
        .append('path')
        .attr(
          'class',
          'stroke-2 stroke-countries hover:fill-current hover:text-gray-200 transition-colors'
        )
        .attr('fill', function (d) {
          return euCountries.includes(d.id)
            ? colorScale(values[1].find((c) => c.id === d.id).population)
            : colorScale(0);
        })
        .attr('d', path)
        .on('click', function (e, d) {
          console.log(d);
          setCountry(d.id.toLowerCase());
        });
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <svg ref={svgRef} />
    </div>
  );
};

export default Map;
