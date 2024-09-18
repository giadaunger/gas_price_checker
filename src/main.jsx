import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="relative flex flex-col mx-auto justify-center items-center min-h-screen bg-blue-50">
      <img
        src="/Sun.gif"
        alt="sun banner"
        className="hidden md:block absolute md:top-10 md:left-10 w-52 h-52 z-10"
      />
      <div className="text-center pb-4">
        <h2 className="text-4xl pb-2">Save More, Drive Smarter!</h2>
        <p className="text-xl">
          Join our SMS list and get instant alerts when gas prices drop.
        </p>
        <button className="p-4 bg-blue-500 text-white rounded mt-8 text-xl">
          Join SMS list!
        </button>
      </div>
      <div className="mt-12 p-2 sm:p-0 sm:w-full">
        <h2 className="text-center text-2xl pb-4">Current gas prices</h2>
        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-8 justify-center">
          {/* St1 */}
          <div className="relative">
            <div className="p-4 bg-[#6b7280] sm:rounded text-center sm:shadow-2xl">
              <img
                src="/St1_logo.png"
                alt="logo"
                className="w-40 h-40 rounded shadow-2xl border-2 border-white mx-auto"
              />
              <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Bensin
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Disel
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Biogas
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
            </div>
            <div className="bg-[#6b7280] w-1/6 mx-auto h-48 mt-[-10px] z-10"></div>
          </div>

          {/* Preem */}
          <div className="relative">
            <div className="p-4 bg-[#6b7280] sm:rounded text-center sm:shadow-2xl">
              <img
                src="/Preem_logo.png"
                alt="logo"
                className="w-40 h-40 rounded shadow-2xl border-2 border-white mx-auto"
              />
              <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Bensin
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Disel
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Biogas
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
            </div>
            <div className="bg-[#6b7280] w-1/6 mx-auto h-48 mt-[-10px] z-10"></div>
          </div>

          {/* Circle K */}
          <div className="col-span-2 sm:col-auto relative">
            <div className="p-4 bg-[#6b7280] sm:rounded text-center sm:shadow-2xl">
              <img
                src="/Circle_k_logo.png"
                alt="logo"
                className="w-40 h-40 rounded shadow-2xl border-2 border-white mx-auto"
              />
              <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Bensin
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Disel
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
              <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                <p className="flex justify-center items-center text-white font-semibold">
                  Biogas
                </p>
                <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">
                  12.26
                </p>
              </div>
            </div>
            <div className="bg-[#6b7280] w-1/6 mx-auto h-48 mt-[-10px] z-10"></div>
          </div>
        </div>
      </div>
      <img
        src="/Grass_banner.webp"
        alt="grass"
        className="absolute bottom-0 w-full h-32 md:h-40"
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
