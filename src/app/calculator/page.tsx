import React, { useState } from 'react';

const CalculatorPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    dieselLitres: '',
    petrolLitres: '',
    electricityKwh: '',
    cityGrid: 'Northern',
    commutingKm: '',
    commutingMode: 'car',
  });

  const [result, setResult] = useState<number | null>(null);

  const emissionFactors = {
    diesel: 2.63,
    petrol: 2.31,
    grid: {
      Northern: 0.928,
      Western: 0.870,
      Southern: 0.775,
      Eastern: 0.950,
      'North-Eastern': 0.825,
    },
    commuting: {
      bike: 0.035,
      bus: 0.022,
      car: 0.12,
    },
  };

  const calculateEmissions = () => {
    const diesel = parseFloat(inputs.dieselLitres || '0') * emissionFactors.diesel;
    const petrol = parseFloat(inputs.petrolLitres || '0') * emissionFactors.petrol;
    const electricity = parseFloat(inputs.electricityKwh || '0') * emissionFactors.grid[inputs.cityGrid];
    const commute = parseFloat(inputs.commutingKm || '0') * emissionFactors.commuting[inputs.commutingMode];

    const total = diesel + petrol + electricity + commute;
    setResult(total);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Carbon Emission Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 font-semibold">Diesel Used (Litres)</label>
          <input name="dieselLitres" value={inputs.dieselLitres} onChange={handleChange} className="input" type="number" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Petrol Used (Litres)</label>
          <input name="petrolLitres" value={inputs.petrolLitres} onChange={handleChange} className="input" type="number" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Electricity Consumption (kWh)</label>
          <input name="electricityKwh" value={inputs.electricityKwh} onChange={handleChange} className="input" type="number" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Regional Grid</label>
          <select name="cityGrid" value={inputs.cityGrid} onChange={handleChange} className="input">
            {Object.keys(emissionFactors.grid).map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Employee Commuting Distance (km)</label>
          <input name="commutingKm" value={inputs.commutingKm} onChange={handleChange} className="input" type="number" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Mode of Commuting</label>
          <select name="commutingMode" value={inputs.commutingMode} onChange={handleChange} className="input">
            <option value="bike">Two-Wheeler</option>
            <option value="bus">Bus</option>
            <option value="car">Car</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateEmissions}
        className="mt-6 px-6 py-2 bg-primary text-black font-semibold rounded-xl shadow hover:bg-yellow-400"
      >
        Calculate Emissions
      </button>

      {result !== null && (
        <div className="mt-6 text-xl font-bold">
          Total Emissions: {result.toFixed(2)} kg CO₂e
        </div>
      )}
    </div>
  );
};

export default CalculatorPage;
