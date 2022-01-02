import {useState} from 'react';
import {objectives} from '../../utils/data';
import CardObjective from './CardObjective';
import SelectedCard from './SeletectedCard';

const Budget = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="mt-8">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl text-gradient bg-gradient-to-r from-blue-300 to-blue-600">
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
        <SelectedCard selected={selectedCard} setSelected={setSelectedCard} />
      </div>
    </div>
  );
};
export default Budget;
