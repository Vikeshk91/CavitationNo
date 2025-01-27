import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";


const Home2 = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
    <motion.div
      className="w-[400px] p-8 bg-white rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
        🌊 Cavitation Calculator
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Calculate the Cavitation Number for given fluid parameters.
      </p>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Local Pressure (pLocal):
        </label>
        <input
          type="number"
          className="w-full text-black p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={pLocal}
          onChange={(e) => setPLocal(e.target.value)}
          placeholder="Enter local pressure"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vapor Pressure (pVapor):
        </label>
        <input
          type="number"
          className="w-full text-black p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={pVapor}
          onChange={(e) => setPVapor(e.target.value)}
          placeholder="Enter vapor pressure"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Density (ρ):
        </label>
        <input
          type="number"
          className="w-full text-black p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={density}
          onChange={(e) => setDensity(e.target.value)}
          placeholder="Enter density of the liquid"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Flow Velocity (v):
        </label>
        <input
          type="number"
          className="w-full text-black p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
          placeholder="Enter flow velocity"
        />
      </div>
      <motion.button
        onClick={calculateCavitationNumber}
        className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-lg font-medium hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Calculate
      </motion.button>
      {cavitationNumber !== null && (
        <motion.div
          className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold text-center">
            Cavitation Number:{" "}
            <span className="text-purple-600">
              {cavitationNumber.toFixed(3)}
            </span>
          </p>
        </motion.div>
      )}
    </motion.div>
  </div>
  )
}

export default Home2