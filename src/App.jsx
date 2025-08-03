import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      
      {/* Button to show popup */}
      <button
        onClick={() => setShowPopup(true)}
        className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-md hover:bg-purple-700 transition duration-300 mb-8"
      >
        Show Welcome
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Welcome g</h2>
          <p className="text-lg text-gray-700">lahore is the city </p>
          <h1>try this one </h1>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
