import Image from 'next/image';
const Tooltip = ({country}) => {
  return (
    <div>
      {country && (
        <div className="relative w-32 h-32">
          <Image
            src={`https://flagcdn.com/${country}.svg`}
            layout="fill"
            alt="flag"
          />
        </div>
      )}
      <h2>Country-stat</h2>
    </div>
  );
};

export default Tooltip;
