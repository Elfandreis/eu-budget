import {AnimatePresence, motion} from 'framer-motion';
import {useState} from 'react';
import {MdMediation, MdFlipToBack} from 'react-icons/md';
import cn from 'classnames';
const Introduction = () => {
  const [clicked, setClicked] = useState('so');

  return (
    <div className="flex flex-col z-10 w-full mt-8 ">
      <div className="flex flex-row justify-between w-full ">
        <h3 className="font-semibold text-yellow-500 uppercase">
          Bugetul naţional
        </h3>
        <h3 className="font-semibold text-blue-500 uppercase">Bugetul UE</h3>
      </div>
      <div className="relative flex flex-row h-8 rounded-full mt-4 mb-4  overflow-hidden ">
        <div className="w-3/5 h-full bg-yellow-500"></div>
        <div
          className="w-1/5 h-full bg-blue-300 p-1 cursor-pointer hover:bg-gray-200"
          onClick={() => setClicked('so')}
        >
          <MdFlipToBack className="w-full h-full text-blue-200" />
        </div>
        <div
          className="w-1/5 h-full bg-blue-500 p-1 cursor-pointer hover:bg-gray-200 "
          onClick={() => setClicked('du')}
        >
          <MdMediation className="w-full h-full text-blue-200" />
        </div>
      </div>
      <div
        className={cn(
          'h-64 flex items-center bottom-0 rounded-xl overflow-hidden transition-all duration-500'
        )}
        style={{
          backgroundColor: clicked === 'so' ? '#1F69FF' : '#003399',
        }}
      >
        {clicked === 'so' ? (
          <>
            <div className="hidden sm:block h-48 top-0 p-4">
              <MdFlipToBack className="w-full h-full text-blue-200" />
            </div>
            <div className="p-4 flex justify-center w-full h-full flex-col ">
              <h2 className="text-xl md:text-2xl font-bold uppercase text-white">
                Solidaritate
              </h2>
              <p className="text-white text-opacity-90 text-sm md:text-base">
                O trăsatură importantă a bugetului UE este solidaritatea.
                Aceasta permite UE sa susţină ţările membre mai sărace să se
                dezvolte economic mult mai uşor şi mai rapid, având ca efect
                benefic creşterea comerţului intra-comunitar.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="hidden sm:block h-48 top-0 p-4">
              <MdMediation className="w-full h-full text-blue-200" />
            </div>
            <div className="p-4 flex flex-col justify-center w-full h-full ">
              <h2 className="text-xl md:text-2xl font-bold uppercase text-white">
                Complementar
              </h2>
              <p className="text-white text-opacity-90  text-sm md:text-base">
                Bugetul UE este complementar bugetelor naţionale ale statelor
                membre, prevenind duplicarea eforturilor la nivelul
                competenţelor şi facilitând o invesţitie mult mai eficientă a
                fondurilor la nivel local, regional sau naţional.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Introduction;
