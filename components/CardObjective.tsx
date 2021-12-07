import {motion} from 'framer-motion';

const CardObjective = ({objective, setSelected}) => {
  return (
    <motion.div
      layoutId={objective.title + 'id'}
      onClick={() => setSelected(objective)}
      className="relative flex flex-col justify-end w-full h-56 p-3 rounded-lg"
      style={{backgroundColor: objective.color}}
    >
      <h2 className="bottom-0 left-0 font-semibold text-white uppercase opacity-70">
        {objective.title}
      </h2>
      <h2 className="font-bold text-white ">{objective.value}</h2>
    </motion.div>
  );
};

export default CardObjective;
