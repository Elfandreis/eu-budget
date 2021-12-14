import {motion} from 'framer-motion';

const CardObjective = ({objective, setSelected}) => {
  return (
    <div className="md:w-1/4 w-1/2 p-1 h-36 md:h-56">
      <motion.div
        layoutId={objective.title + 'id'}
        onClick={() => setSelected(objective)}
        className="relative flex flex-col justify-end h-full w-full p-3 rounded-lg cursor-pointer"
        style={{backgroundColor: objective.color}}
      >
        <motion.div
          layoutId={objective.title + 'expand'}
          className="absolute top-0 right-0 w-6 h-6 m-2 bg-gray-100 rounded-full bg-opacity-40"
        />
        <h2 className="bottom-0 left-0 font-semibold text-white uppercase opacity-70">
          {objective.title}
        </h2>
        <h2 className="font-bold text-white ">{objective.value}</h2>
      </motion.div>
    </div>
  );
};

export default CardObjective;
