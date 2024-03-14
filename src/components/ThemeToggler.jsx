import { useContext } from 'react';
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { AllContext } from '../context/ContextProvider';

export default function ThemeToggler() {
  const { darkEnabled, setDarkEnabled } = useContext(AllContext);

  return (
    <div className='flex justify-center items-center gap-6 p-4'>
      <div className='flex justify-center items-center gap-4 cursor-pointer select-none' onClick={() => setDarkEnabled(false)}>
        <span>Light</span>
        <div className={`p-1 rounded-full text-xl ${!darkEnabled && "bg-black text-white"}`}>
          <MdLightMode />
        </div>
      </div>

      <div className='flex justify-center items-center gap-4 cursor-pointer select-none' onClick={() => setDarkEnabled(true)}>
        <div className={`p-1 rounded-full text-xl ${darkEnabled && "bg-white text-black"}`}>
          <MdOutlineDarkMode />
        </div>
        <span>Dark</span>
      </div>
    </div>
  );
}