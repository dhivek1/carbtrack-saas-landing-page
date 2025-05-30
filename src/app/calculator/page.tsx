"use client";

import React, { useState } from "react";

const CalculatorPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    diesel: '',
    petrol: '',
    electricity: '',
    commuting: '',
    region: 'Northern',
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const calculateEmissions = () => {
    const diesel = parseFloat(inputs.diesel) || 0;
    const petrol = parseFloat(inputs.petrol) || 0;
    const electricity = parseFloat(inputs.electricity) || 0;
    const commuting = parseFloat(inputs.commuting) || 0;

    const dieselEmissions = diesel * 2.68;
    const petrolEmissions = petrol * 2.31;
    const electricityEmissions = electricity * 0.82;
    const commutingEmissions = commuting * 30 * 0.21; // daily km * 30 days/month

    return dieselEmissions + petrolEmissions + electricityEmissions + commutingEmissions;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const totalEmissions = calculateEmissions();
    setResult(totalEmissions);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Carbon Emission Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Diesel usage (litres/month):</label>
          <input
            type="number"
            name="diesel"
            value={inputs.diesel}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block mb-1">Petrol usage (litres/month):</label>
          <input
            type="number"
            name="petrol"
            value={inputs.petrol}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="e.g. 40"
          />
        </div>

        <div>
          <label className="block mb-1">Electricity usage (kWh/month):</label>
          <input
            type="number"
            name="electricity"
            value={inputs.electricity}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="e.g. 100"
          />
        </div>

        <div>
          <label className="block mb-1">Commuting distance (km/day):</label>
          <input
            type="number"
            name="commuting"
            value={inputs.commuting}
            onChange={handleChange}
            className="w-full border rounded p-2"
            placeholder="e.g. 15"
          />
        </div>

        <div>
          <label className="block mb-1">Region:</label>
          <select
            name="region"
            value={inputs.region}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="Northern">Northern</option>
            <option value="Southern">Southern</option>
            <option value="Eastern">Eastern</option>
            <option value="Western">Western</option>
            <option value="Central">Central</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Calculate Emissions
        </button>
      </form>

      {result !== null && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold">Monthly Carbon Emissions:</h2>
          <p className="text-lg mt-2 text-green-800 font-bold">
            {result.toFixed(2)} kg CO₂
          </p>
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
