import {useState} from 'react';
import Image from 'next/image';

import axios from 'axios';

import Map from '../components/Map';
import CardObjective from '../components/CardObjective';
import {Stars} from '../components/Svg';
import {DonutLabels} from '../components/Donut';
import SelectedCard from '../components/SeletectedCard';

import {objectives} from '../utils/data';

export default function Home({map, data}) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-gray-50">
      <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-blue-200 to-red-500" />
      <div className="flex flex-col max-w-3xl px-8 mx-auto">
        <h1 className="bottom-0 mt-8 mb-4 text-3xl font-bold tracking-tight text-center md:text-5xl">
          Bugetul Uniunii Europene şi Pachetul de Redresare
        </h1>
        <div className="flex flex-col items-center mt-2">
          <div className="flex flex-row items-center justify-center gap-2 ">
            <div className="relative w-6 h-6 ">
              <Image
                src="/avatar.webp"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <p className="text-sm font-semibold text-gray-800 ">
              Andrei-Ovidiu Dorobantu / FSEGA
            </p>
          </div>
          <p className="text-sm text-gray-600">5 decembrie 2021</p>
        </div>
        <div className="relative flex flex-col items-center justify-center mt-8 mb-4 ">
          <Stars />
          <p className="mt-6 leading-7">
            The European Union (EU) is a political and economic union of 27
            member states that are located primarily in Europe.[8] The union has
            a total area of 4,233,255.3 km2 (1,634,469.0 sq mi) and an estimated
            total population of about 447 million. An internal single market has
            been established through a standardised system of laws that apply in
            all member states in those matters, and only those matters, where
            the states have agreed to act as one.
          </p>
        </div>
        <div className="flex flex-col mt-4 mb-4">
          <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
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
          <div className="relative flex flex-wrap justify-center overflow-hidden ">
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
        <div className="flex flex-col mt-4 mb-4">
          <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
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
          <DonutLabels />
          <p className="mt-6 mb-2 leading-7">
            Componenta de granturi din Planul de Resilienta si Recuperare este
            impartit intre tarile membre UE bazat pe anumite criterii. Acestea
            include Produsul Intern Brut(PIB) pe cap de locuitor, rata de somaj,
            populatia si impactul pandemiei de COVID-19.
          </p>
          <p className="mt-2 leading-7">
            Pentru a obţine suport din PNRR, tările UE trebuie sa trimită
            planuri detaliate a cheltuielilor către Comisia Europeană. Din
            aceste planuri trebuie sa existe proiecte referitoare la tranziţiile
            verzi si digitale.
          </p>
        </div>
        <div className="flex flex-col mt-4 ">
          <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">
            Map of Europe
          </h1>
          <div className="-mx-8 md:mx-0">
            <Map map={map} csv={data} />
          </div>
          <p className="mt-6 leading-7">
            The EU budget combines resources at European level. As well as
            funding the EU’s priorities, it also finances big infrastructure and
            research projects. It also helps fund responses to challenges that
            go beyond its borders, such as the coronavirus pandemic, climate
            change and the threat of terrorism. The EU budget is complementary
            to EU countries’ national budgets: it prevents the duplication of
            efforts and comes into play when it is more effective to spend money
            at EU level than at local, regional or national level. The EU budget
            is also about solidarity – it enables the EU to support less wealthy
            Member States in their economic development. Thanks to it, the EU
            can give a helping hand to EU countries when they are hit by natural
            disasters.
          </p>
        </div>
      </div>
    </div>
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
    const data = resP.data;

    return {
      props: {map, data}, // will be passed to the page component as props
    };
  } catch (error) {
    return error;
  }
}
