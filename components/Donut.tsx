import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import {PieArcDatum} from 'd3-shape';
import cn from 'classnames';

const Donut = ({children}) => {
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
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <svg ref={svgRef}>
        <g></g>
      </svg>
      {children}
    </div>
  );
};

export const DonutLabels = () => {
  const LegendLabel = ({name, full, bg}) => (
    <div
      className={
        !full
          ? cn('flex items-center justify-center w-1/2 h-8', bg)
          : cn('flex items-center justify-center w-full h-8', bg)
      }
    >
      <p className="text-sm font-semibold uppercase opacity-80">{name}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-6 md:flex-row">
      <div className="relative flex flex-col items-center justify-center w-full mb-4 sm:w-2/3 md:w-1/2">
        <Donut>
          <h1 className="absolute flex-wrap text-2xl font-bold text-center md:text-3xl text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
            €806.9 <br />
            miliarde
          </h1>
        </Donut>
        <h3 className="text-xl font-semibold">NextGenerationEU</h3>
        <p className="text-gray-600">(current prices)</p>
      </div>

      <div className="flex flex-col w-full gap-3 md:w-1/2">
        <div className="flex flex-col w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 ">
          <div className="p-3 m-1 rounded-xl bg-gray-50">
            <h3 className="font-bold">Recovery and Resilience Facility</h3>
            <p className="mb-2">€723.8 miliarde</p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row items-center w-full gap-2">
                <div className="w-5 h-5 bg-blue-500 rounded-full" />
                <p className="text-sm">€338 miliarde grants</p>
              </div>
              <div className="flex flex-row items-center w-full gap-2">
                <div className="w-5 h-5 bg-blue-700 rounded-full" />
                <p className="text-sm">€385 miliarde loans</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap mt-4 overflow-hidden text-white rounded-lg">
              <LegendLabel name="Renewable" full={false} bg="bg-blue-100" />
              <LegendLabel
                name="Energy efficiency"
                full={false}
                bg="bg-blue-200"
              />
              <LegendLabel
                name="Sustainable infrastructure"
                full={true}
                bg="bg-blue-300"
              />
              <LegendLabel
                name="Fast internet services"
                full={true}
                bg="bg-blue-400"
              />
              <LegendLabel
                name="Digitalization of administration"
                full={true}
                bg="bg-blue-300"
              />
              <LegendLabel name="Data cloud" full={false} bg="bg-blue-200" />
              <LegendLabel
                name="Digital Education"
                full={false}
                bg="bg-blue-100"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-gradient-to-r from-blue-100 to-blue-500">
          <div className="p-3 m-1 rounded-xl bg-gray-50">
            <h3 className="font-bold">
              NextGenerationEU contribution to other programmes
            </h3>
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-blue-100 rounded-full" />
              <p>€83.1 miliarde </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-2 mt-4 text-sm ">
              <div className="flex flex-col">
                <p className="font-semibold ">React-EU</p>
                <p>€50.6 miliarde</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-semibold">Just Transition Fund</p>
                <p>€10.9 miliarde</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-semibold">Rural Development</p>
                <p>€8.1 miliarde</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-semibold">InvestEU</p>
                <p>€6.1 miliarde</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-semibold">Horizon Europe</p>
                <p>€5.4 miliarde</p>
              </div>
              <div className="flex flex-col ">
                <p className="font-semibold">RescEU</p>
                <p>€2.0 miliarde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donut;
