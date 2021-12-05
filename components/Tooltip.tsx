import Image from 'next/image';
const Tooltip = ({country}) => {
  return (
    <div className="flex flex-col items-start w-full p-4 bg-gray-100 md:w-64">
      {country && (
        <Image
          src={`https://flagcdn.com/w160/${country}.webp`}
          width="160"
          height="120"
          objectFit="contain"
          alt="flag"
        />
      )}
      <div className="flex flex-col">
        <h2 className="mt-2 mb-4 text-xl font-semibold">Country stats</h2>
        <p className="mb-1">Population:</p>
        <p className="mb-1">Population:</p>
        <p className="mb-1">Population:</p>
      </div>
    </div>
  );
};

export default Tooltip;
