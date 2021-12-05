import axios from 'axios';

import Link from 'next/link';
import Map from '../components/Map';
import Head from 'next/head';
import {useState} from 'react';
import Tooltip from '../components/Tooltip';

export default function Home({map, population}) {
  const [country, setCountry] = useState('');

  return (
    <>
      <div className="max-w-2xl mx-auto ">
        <h1 className="mt-6 mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Bugetul Uniunii Europene
        </h1>
        <Map
          map={map}
          population={population}
          setCountry={setCountry}
          country={country}
        />
        <Tooltip country={country} />
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
