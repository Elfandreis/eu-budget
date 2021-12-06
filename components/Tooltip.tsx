import Image from 'next/image';
import {useEffect, useState} from 'react';

interface Country {
  population: string;
  name: string;
  gdp: string;
  cohesion: string;
}
const Tooltip = ({country, data}) => {
  const [selected, setSelected] = useState<Country>();

  useEffect(() => {
    const find = data.find((c) => c.id === country.toUpperCase());
    setSelected(find);
  }, [country]);
  return (
    <div className="flex flex-col items-start p-4 bg-gray-100 md:w-96">
      {selected && (
        <>
          <Image
            src={`https://flagcdn.com/w160/${country}.webp`}
            width="160"
            height="120"
            objectFit="contain"
            alt="flag"
          />

          <div className="flex flex-col">
            <h2 className="mt-2 mb-4 text-xl font-semibold">{selected.name}</h2>
            <p className="mb-1 ">Populatie: {selected.population}</p>
            <p className="mb-1">GDP: {selected.gdp} €</p>
            <p className="mb-1">Cohesion Funds: {selected.cohesion} €</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;
