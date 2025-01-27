import React from 'react'
import { useState } from "react";

const Home = () => {
  const [pLocal, setPLocal] = useState("");
  const [pVapor, setPVapor] = useState("");
  const [density, setDensity] = useState("");
  const [flowRate, setFlowRate] = useState("");
  const [cavitationNumber, setCavitationNumber] = useState(null);

  const calculateCavitationNumber = () => {
    const pLocalFloat = parseFloat(pLocal);
    const pVaporFloat = parseFloat(pVapor);
    const densityFloat = parseFloat(density);
    const flowRateFloat = parseFloat(flowRate);

    if (
      isNaN(pLocalFloat) ||
      isNaN(pVaporFloat) ||
      isNaN(densityFloat) ||
      isNaN(flowRateFloat)
    ) {
      alert("Please enter valid numerical inputs.");
      return;
    }

    const result =
      (2 * (pLocalFloat - pVaporFloat)) /
      (densityFloat * flowRateFloat * flowRateFloat);
    setCavitationNumber(result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 ">
      <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Cavitation Number Calculator
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700">Local Pressure (pLocal):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={pLocal}
            onChange={(e) => setPLocal(e.target.value)}
            placeholder="Enter local pressure"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Vapor Pressure (pVapor):</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={pVapor}
            onChange={(e) => setPVapor(e.target.value)}
            placeholder="Enter vapor pressure"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Density:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            placeholder="Enter density"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Flow Velocity:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={flowRate}
            onChange={(e) => setFlowRate(e.target.value)}
            placeholder="Enter flow velocity"
          />
        </div>
        <button
          onClick={calculateCavitationNumber}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Calculate
        </button>
        {cavitationNumber !== null && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            Cavitation Number: <strong>{cavitationNumber.toFixed(3)}</strong>
          </div>
        )}
      </div>
    </div>
  )
}
export default Home;
