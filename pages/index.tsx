import {useState} from 'react';
import Image from 'next/image';

import axios from 'axios';

import Map from '../components/Map';
import Tooltip from '../components/Tooltip';
import CardObjective from '../components/CardObjective';
import {Stars} from '../components/Svg';
import Donut from '../components/Donut';
import SelectedCard from '../components/SeletectedCard';

import * as d3 from 'd3';

import {objectives} from '../utils/data';

export default function Home({map, population}) {
  const [country, setCountry] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);
  const data = d3.csvParse(population);

  return (
    <>
      <div className=" w-full">
        <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-blue-200 to-red-500" />
      </div>
      <div className="max-w-3xl flex flex-col px-8  mx-auto">
        <h1 className="bottom-0 mt-8 mb-4 text-3xl text-center font-bold tracking-tight  md:text-5xl">
          Bugetul Uniunii Europene şi Pachetul de Redresare
        </h1>
        <div className="flex flex-col items-center mt-2">
          <div className="flex flex-row items-center justify-center gap-3  ">
            <div className="relative w-6 h-6 ">
              <Image
                src="/avatar.webp"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <p className=" text-gray-800 font-semibold text-sm ">
              Andrei-Ovidiu Dorobantu / FSEGA
            </p>
          </div>
          <p className="text-sm text-gray-600">5 decembrie 2021</p>
        </div>
        <div className="relative flex flex-col bg-blue-500 rounded-xl items-center justify-center mt-8 mb-4 ">
          <Stars />
        </div>
        <div className="flex flex-col mt-4 mb-4">
          <h1 className="font-bold text-2xl md:text-4xl mb-6">
            Cadrul fiananciar multianual
          </h1>
          <p className="leading-7 ">
            Bugetul UE este dedicat în principal investițiilor. Din acest motiv,
            UE adoptă planuri de cheltuieli pe termen lung, cunoscute sub numele
            de cadre financiare multianuale (CFM), care se desfășoară pe o
            perioadă de 5-7 ani. Bugetul pe termen lung stabilește prioritățile
            și limitele de cheltuieli ale UE. CFM-ul actual acoperă perioada
            2021-2027.
          </p>
          <h1 className="mt-8 mb-8 text-3xl font-bold text-center md:text-5xl text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
            1.211 trilioane €
          </h1>
          <div className="relative flex flex-wrap justify-center  overflow-hidden ">
            {objectives.map((objective) => (
              <CardObjective
                key={objective.title}
                objective={objective}
                setSelected={setSelectedCard}
              />
            ))}
            <SelectedCard
              selected={selectedCard}
              setSelected={setSelectedCard}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="font-bold text-2xl md:text-4xl mb-6">
            Next Generation EU
          </h1>
          <p className="leading-7 ">
            Next Generation EU este un pachet de redresare economica adoptat in
            conditii exceptionale de catre statele membre ca urmare a pandemiei
            de{' '}
            <a
              href="https://en.wikipedia.org/wiki/COVID-19_pandemic"
              className="font-semibold text-blue-400"
            >
              COVID 19.
            </a>{' '}
            Acesta va actiona ca un instrument suplimentar bugetului UE in
            perioada 2021-2023.
          </p>
          <div className="relative flex h-72 md:h-96 justify-center items-center">
            <Donut />
            <h1 className="absolute text-3xl flex-wrap font-bold text-center md:text-4xl text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
              €806.9 <br />
              miliarde
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <h2 className="mt-4 text-2xl font-semibold">Interactive map of EU</h2>
          <div className="flex flex-col w-full mt-4">
            <Map
              map={map}
              population={population}
              setCountry={setCountry}
              country={country}
            />
            <Tooltip data={data} country={country} />
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  try {
    const resM = await axios.get(
      'https://raw.githubusercontent.com/Elfandreis/eu-budget/main/public/countries.geojson'
    );
    const resP = await axios.get(
      'https://raw.githubusercontent.com/Elfandreis/eu-budget/main/public/population.csv'
    );
    const map = resM.data;
    const population = resP.data;

    return {
      props: {map, population}, // will be passed to the page component as props
    };
  } catch (error) {
    return error;
  }
}
