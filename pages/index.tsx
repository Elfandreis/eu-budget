import Link from 'next/link';
import Map from '../components/Map';
import Head from 'next/head';
import * as d3 from 'd3';

export default function Home({ map, population }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <div className="max-w-2xl mx-auto bg-red-50">
        <h1 className="mt-6 mb-4 text-3xl font-bold md:text-5xl">
          Bugetul Uniunii Europene
        </h1>
        <Map map={map} population={population}></Map>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const map = await d3.json(
    'https://github.com/Elfandreis/eu-budget/blob/main/public/countries.geojson'
  );
  const population = await d3.csv(
    'https://github.com/Elfandreis/eu-budget/blob/main/public/population.csv'
  );
  return {
    props: { map, population }, // will be passed to the page component as props
  };
}
