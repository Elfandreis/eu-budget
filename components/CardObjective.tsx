const CardObjective = ({title, value}) => {
  return (
    <div className="relative flex flex-col justify-end w-full h-56 p-3 bg-blue-200">
      <h2 className="bottom-0 left-0 font-semibold text-white uppercase opacity-70">
        {title}
      </h2>
      <h1 className="font-bold text-white ">{value}</h1>
    </div>
  );
};

export default CardObjective;
