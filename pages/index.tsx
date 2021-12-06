import axios from 'axios';

import Map from '../components/Map';
import {useState} from 'react';
import Tooltip from '../components/Tooltip';

import Image from 'next/image';
import CardObjective from '../components/CardObjective';

import * as d3 from 'd3';

export default function Home({map, population}) {
  const [country, setCountry] = useState('');
  const data = d3.csvParse(population);
  return (
    <>
      <div className="mx-auto ">
        <div className="relative w-full h-64 mb-8">
          <Image
            src="/images/eu.jpg"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="max-w-3xl px-8 mx-auto">
          <h1 className="bottom-0 mt-4 mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Bugetul Uniunii Europene şi Pachetul de Redresare
          </h1>
          <div className="flex flex-row items-center gap-3 mt-4 mb-12">
            <div className="relative w-8 h-8 ">
              <Image
                src="/avatar.webp"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <p className="text-sm text-gray-800">Andrei-Ovidiu Dorobantu</p>
            <p className="ml-auto text-sm text-gray-600">5 Decembrie 2021</p>
          </div>
          <div className="flex flex-col mt-4">
            <p className="mb-4">
              <span className="font-bold ">Cadrul financiar multianual:</span>{' '}
              Bugetul UE este dedicat în principal investițiilor. Din acest
              motiv, UE adoptă planuri de cheltuieli pe termen lung, cunoscute
              sub numele de cadre financiare multianuale (CFM), care se
              desfășoară pe o perioadă de 5-7 ani. Bugetul pe termen lung
              stabilește prioritățile și limitele de cheltuieli ale UE. CFM-ul
              actual acoperă perioada 2021-2027.
            </p>
            <div className="flex flex-col items-center mb-4 ">
              <h1 className="text-5xl font-semibold text-center text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
                1 074,3 miliarde €
              </h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 mt-4 b-4">
              <CardObjective
                title="piața unică, inovare și sectorul digital"
                value="132,8 mld €"
              />
              <CardObjective
                title="coeziune, reziliență și valori"
                value="377,8  mld €"
              />
              <CardObjective
                title="resurse naturale și mediu"
                value="356,4 mld €"
              />
              <CardObjective
                title="vecinătate și întreaga lume"
                value="98,4 mld €"
              />
              <CardObjective
                title="migrație și gestionarea frontierelor"
                value="22,7 mld €"
              />
              <CardObjective
                title="administrația publică europeană"
                value="73,1 mld €"
              />
              <CardObjective
                title="securitate și apărare"
                value="13,2  mld €"
              />
            </div>
            <p className="mt-4 mb-4">
              <span className="font-bold ">Next Generation EU: </span>este un
              pachet de redresare economica adoptat in conditii exceptionale de
              catre statele membre ca urmare a pandemiei de{' '}
              <a
                href="https://en.wikipedia.org/wiki/COVID-19_pandemic"
                className="font-semibold text-blue-400"
              >
                COVID 19.
              </a>{' '}
              Acesta va actiona ca un instrument suplimentar bugetului UE in
              perioada 2021-2023.
            </p>
            <div className="flex flex-col items-center">
              <h1 className="mb-4 text-5xl font-semibold text-center text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
                750 miliarde €
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <h2 className="mt-4 text-2xl font-semibold">
              Interactive map of EU
            </h2>
            <div className="flex flex-col w-full mt-4 md:flex-row">
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
