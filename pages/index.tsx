import Image from 'next/image';

import axios from 'axios';

import Map from '../components/Map/Map';
import Budget from '../components/Budget/Budget';
import {Stars} from '../components/Svg';
import {DonutLabels} from '../components/Donut';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';

import {MdAccountBalance} from 'react-icons/md';
export default function Home({map, data}) {
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
            Bugetul Uniunii Europene este construcţia mai multor decenii de
            integrarea economică europeană. Acesta asigură finanţarea
            programelor si politicilor la nivelul UE, de la agricultură si
            politică regională până la cercetare, antreprenoriat şi spaţiu.
          </p>

          <Introduction />
        </div>
        <Layout title="Venituri">
          <p className="leading-7">
            Sursele de venit ale UE sunt în principal: contribuțiile din partea
            țărilor membre; taxele la import pentru produsele din afara UE; o
            nouă contribuție bazată pe deșeurile de ambalaje din plastic
            nereciclate; amenzile impuse întreprinderilor care nu respectă
            normele UE. Țările UE convin asupra mărimii bugetului UE și a
            modului în care va fi finanțat acesta în următorii ani.{' '}
          </p>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col gap-2 mt-4 w-full md:w-1/2">
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 min-w-[32px] bg-yellow-500 w-8 "></div>{' '}
                <p className="text-sm">
                  Contribuția bazată pe venitul național brut
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 min-w-[32px] bg-yellow-400 w-8"></div>{' '}
                <p className="text-sm ">
                  Taxe vamale la importurile din afara UE
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 min-w-[32px] bg-yellow-300 w-8 "></div>{' '}
                <p className="text-sm ">
                  O mică parte din TVA colectat de fiecare țară din UE
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 min-w-[32px] bg-yellow-200 w-8"></div>{' '}
                <p className="text-sm">
                  Contribuție bazată pe cantitatea de deșeuri de ambalaje din
                  plastic nereciclate din fiecare țară
                </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="h-8 min-w-[32px] bg-yellow-100 w-8"></div>
                <p className="text-sm">
                  Alte venituri – contribuții ale țărilor din afara UE la
                  anumite programe, penalități de întârziere și amenzi, orice
                  excedent din anul precedent etc.
                </p>
              </div>
            </div>
            <MdAccountBalance className="w-1/2 hidden text-yellow-500 md:block h-full" />
          </div>
        </Layout>
        <Layout title="Cadrul fiananciar multianual">
          <p className="leading-7 ">
            Bugetul UE este dedicat în principal investițiilor. Din acest motiv,
            UE adoptă planuri de cheltuieli pe termen lung, cunoscute sub numele
            de cadre financiare multianuale (CFM), care se desfășoară pe o
            perioadă de 5-7 ani. Bugetul pe termen lung stabilește prioritățile
            și limitele de cheltuieli ale UE. CFM-ul actual acoperă perioada
            2021-2027.
          </p>
          <Budget />
        </Layout>

        <Layout title="Next Generation EU">
          <p className="leading-7 ">
            Next Generation EU este un pachet de redresare economică adoptat în
            condiţii excepţionale de către statele membre ca urmare a pandemiei
            de Covid-19. Acesta va acţiona ca un instrument suplimentar
            bugetului UE in perioada 2021-2023.
          </p>
          <DonutLabels />
          <p className="mt-6 leading-7">
            Componenta de granturi din Planul de Rezilienţă si Redresare este
            împărţit între ţările membre UE, bazat pe anumite criterii. Acestea
            includ Produsul Intern Brut(PIB) pe cap de locuitor, rata de şomaj,
            populaţia si impactul pandemiei de COVID-19.
          </p>
          <p className="mt-4 leading-7">
            Pentru a obţine suport din PNRR, tările UE trebuie sa trimită
            planuri detaliate a cheltuielilor către Comisia Europeană. Din
            aceste planuri trebuie sa existe proiecte referitoare la tranziţiile
            verzi si digitale.
          </p>
        </Layout>
        <Layout title="Harta Europei">
          <div className="-mx-8 md:mx-0">
            <Map map={map} csv={data} />
          </div>
          <p className="mt-6 leading-7">
            Bugetul UE combină resurse la nivel european. Pe lângă finanțarea
            priorităților UE, finanțează și proiecte mari de infrastructură și
            cercetare. De asemenea, ajută la finanțarea răspunsurilor la
            provocările care depășesc granițele sale, cum ar fi pandemia de
            coronavirus, schimbările climatice și amenințarea terorismului.
          </p>
        </Layout>
        <div className="mt-8 flex flex-col h-32 items-center justify-center border-t-2 border-gray-300">
          <p className="text-sm opacity-25">Made by Andrei-Ovidiu Dorobantu</p>
          <p className="text-sm text-center">
            Informaţii preluate de pe website-urile instituţiilor europene
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
      props: {map, data},
    };
  } catch (error) {
    return error;
  }
}
