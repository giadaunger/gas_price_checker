import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center min-h-screen w-2/3">
      <div className="text-center pb-4">
        <h2 className="text-4xl pb-2">Save More, Drive Smarter!</h2>
        <p className="text-xl">Join our SMS list and get instant alerts when gas prices drop.</p>
        <button className="p-4 bg-blue-500 text-white rounded mt-8 text-xl">Join SMS list!</button>
      </div>
      <div className="mt-12">
        <h2 className="text-center text-2xl pb-4">Current gas prices</h2>
        <div className="flex flex-row gap-8">
            <div className="p-4 bg-[#6b7280] rounded text-center shadow-2xl">
                <img src="/St1_logo.png" alt="logo" className="w-40 h-40 rounded shadow-2xl border-2 border-white" />
                <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Bensin</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Disel</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Biogas</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
            </div>
            <div className="p-4 bg-[#6b7280] rounded text-center shadow-2xl">
                <img src="/Circle_k_logo.png" alt="logo" className="w-40 h-40 rounded shadow-2xl" />
                <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Bensin</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Disel</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Biogas</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
            </div>
            <div className="p-4 bg-[#6b7280] rounded text-center shadow-2xl">
                <img src="/Preem_logo.png" alt="logo" className="w-40 h-40 rounded shadow-2xl border-2 border-white" />
                <div className="flex flex-row p-2 mt-4 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Bensin</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Disel</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
                <div className="flex flex-row p-2 mt-2 shadow-xl bg-[#7b8392] rounded">
                    <p className="flex justify-center items-center">Biogas</p>
                    <p className="bg-yellow-500 p-2 rounded ml-auto font-orbitron font-semibold">12.26</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);