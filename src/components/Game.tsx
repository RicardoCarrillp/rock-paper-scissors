import { options } from "../utils/utils";
import OptionsButtons from "./OptionsButtons";
import { useChoices } from "./useChoices";
import { Option } from "../models/options.model";
import logo from "../assets/logo.png"

export default function Game() {
  const {
    userChoice,
    computerChoice,
    userMessage,
    computerMessage,
    result,
    reset,
    handlePlay,
    disabled
  } = useChoices();

  return (
    <>
      <div className="bg-indigo-300 h-screen pt-10">
        <div className="flex justify-center items-center object-cover bg-indigo-300">
          <img src={logo} alt="" className="h-44"/>
        </div>
        {/* <img src={logo} alt="" className="w-20 h-30" /> */}

        <div className="flex justify-center items-start pt-10 bg-indigo-300">
          <div className="text-center bg-gray-100 w-90 m-2 rounded-2xl">
            <h1 className="text-3xl">Lets play!</h1>
            <div className="flex justify-center p-3 gap-4">
              {
                options.map((option: Option) => (
                  <OptionsButtons
                    key={option.id}
                    option={option}
                    handlePlay={handlePlay}
                    disabled={disabled}
                  />
                ))
              }
            </div>
            <div className="max-w-md mx-auto p-3">
              {userChoice !== -1 && <p className="text-xl mt-4">{userMessage}</p>}
              {computerChoice !== -1 && (
                <p className="text-xl mt-4">{computerMessage}</p>
              )}
              {result !== -1 && (
                <div className="mt-8">
                  {result === 0 && <p className="text-xl mt-4">🤷🏽‍♀️ Empate</p>}
                  {result === 1 && (
                    <p className="text-xl mt-4">
                      ✅ Has ganado con {options[userChoice]?.name} contra{" "}
                      {options[computerChoice]?.name}
                    </p>
                  )}
                  {result === 2 && (
                    <p className="text-xl mt-4">
                      ❌ Has perdido con {options[userChoice]?.name} contra{" "}
                      {options[computerChoice]?.name}
                    </p>
                  )}
                  <button
                    className="bg-yellow-500  rounded-2xl hover:bg-yellow-600 text-black
                  font-semibold py-2 px-4 mt-4 border-b-4 border-yellow-600
                  hover:border-yellow-400"
                    onClick={reset}
                  >
                    Jugar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
