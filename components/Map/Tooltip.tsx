import Image from 'next/image';
import {useEffect, useState} from 'react';
import {MdPeople} from 'react-icons/md';
import {RiMoneyEuroCircleLine} from 'react-icons/ri';
import {RiFundsFill} from 'react-icons/ri';
interface Country {
  id: string;
  population: number;
  name: string;
  gdp: number;
  cohesion: number;
}
import {AnimatePresence, motion} from 'framer-motion';

const Tooltip = ({country, setCountry, data}) => {
  const [selected, setSelected] = useState<Country>();
  useEffect(() => {
    const find = data.find((c) => c.id === country.toUpperCase());
    setSelected(find);
  }, [country, data]);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {selected && (
          <motion.div
            className="relative mx-8 mt-4 md:mx-0"
            onClick={() => setCountry('EU')}
            transition={{ease: 'easeInOut'}}
            key={selected.id}
          >
            <motion.div
              key={selected.id}
              initial={{
                scaleX: 1,
                transformOrigin: 'right',
                backgroundColor: '#FFD429',
              }}
              animate={{scaleX: 0, backgroundColor: '#FFEDA3'}}
              exit={{
                scaleX: 1,
                transformOrigin: 'left',
                backgroundColor: '#FFD429',
              }}
              transition={{ease: 'easeInOut', duration: 0.3}}
              className="absolute top-0 left-0 z-20 w-full h-full "
            ></motion.div>

            <div className="flex flex-row items-center w-full h-32 sm:h-48">
              <div className="flex flex-col w-2/5 h-full sm:w-1/2">
                <figure className="relative w-full h-full ">
                  <Image
                    src={`https://flagcdn.com/${selected.id.toLowerCase()}.svg`}
                    layout="fill"
                    objectFit="cover"
                    alt="flag"
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
                </figure>
                <h2 className="absolute bottom-0 text-2xl font-bold text-white uppercase md:ml-0 md:text-5xl opacity-90">
                  {selected.name}
                </h2>
              </div>
              <div className="flex flex-col mx-auto sm:gap-2">
                <div className="flex flex-row items-center gap-3">
                  <MdPeople className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">Populatie </p>
                    <p className="text-sm">
                      {selected.population + ' milioane'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <RiMoneyEuroCircleLine className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">PIB </p>
                    <p className="text-sm">{selected.gdp + ' miliarde €'}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <RiFundsFill className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">Cohesion Funds </p>
                    <p className="text-sm">
                      {selected.cohesion + ' miliarde €'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tooltip;
