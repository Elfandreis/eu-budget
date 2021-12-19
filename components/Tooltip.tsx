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
import {useIsSmall} from '../utils/mediaQuery';

const Tooltip = ({country, setCountry, data}) => {
  const [selected, setSelected] = useState<Country>();
  const mobileView = useIsSmall();
  useEffect(() => {
    const find = data.find((c) => c.id === country.toUpperCase());

    setSelected(find);
  }, [country, data]);
  return (
    <>
      <AnimatePresence exitBeforeEnter={!mobileView}>
        {selected && (
          <motion.div
            className="sm:absolute right-0 flex flex-col items-start p-4 m-4 bg-gray-200 border-b-2 border-l-2 border-gray-100 rounded-lg border-opacity-40 backdrop-blur-lg bg-opacity-30"
            onClick={() => setCountry('')}
            initial={{x: mobileView ? 200 : 0, opacity: mobileView ? 0 : 1}}
            animate={{x: 0, opacity: 1}}
            exit={{x: mobileView ? -200 : 0, opacity: mobileView ? 0 : 1}}
            transition={{ease: 'easeInOut'}}
            key={selected.id}
          >
            {!mobileView && (
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
                className="absolute top-0 left-0 w-full h-full z-20 "
              ></motion.div>
            )}

            <motion.div className="flex flex-row md:flex-col items-center gap-4">
              <motion.div className="flex flex-col items-center">
                <motion.figure className="relative w-32 h-32 ">
                  <Image
                    src={`https://flagcdn.com/w160/${selected.id.toLowerCase()}.webp`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    alt="flag"
                  />
                </motion.figure>
                <h2 className="mt-2 text-xl text-gradient bg-gradient-to-l from-gray-600 to-black font-bold uppercase">
                  {selected.name}
                </h2>
              </motion.div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row items-center gap-3">
                  <MdPeople className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">Populatie </p>
                    <p className="text-sm">
                      {Math.floor(selected.population / 100000) / 10 +
                        ' milioane'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <RiMoneyEuroCircleLine className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">PIB </p>
                    <p className="text-sm">
                      {Math.floor(selected.gdp / 100) / 10 + ' miliarde €'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <RiFundsFill className="w-8 h-8 " />
                  <div className="flex flex-col">
                    <p className="font-medium">Cohesion Funds </p>
                    <p className="text-sm">
                      {Math.floor(selected.cohesion / 100) / 10 + ' miliarde €'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Tooltip;
