import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center pb-4">
        <h2 className="text-4xl pb-2">Save More, Drive Smarter!</h2>
        <p className="text-xl">Join our SMS list and get instant alerts when gas prices drop.</p>
      </div>
      <div className="mt-4">
        <form action="" className="flex flex-row items-center space-x-2">
          <input
            type="number"
            name="phoneNbr"
            id="phoneNbr"
            placeholder="Enter your phone number"
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Join SMS list!
          </button>
        </form>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
