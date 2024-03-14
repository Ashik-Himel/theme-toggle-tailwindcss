import { useContext } from "react";
import { AllContext } from "./context/ContextProvider";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  const { darkEnabled } = useContext(AllContext);

  return (
    <div className={`${darkEnabled ? "dark" : "light"} w-full h-screen flex justify-center items-center dark:bg-black dark:text-white`}>
      <ThemeToggler />
    </div>
  );
}