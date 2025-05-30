// src/app/calculator/page.tsx

import React from 'react';

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Carbon Emission Calculator</h1>
        <p className="text-lg text-gray-600 mb-8">
          Use this tool to estimate your carbon emissions and understand how your lifestyle or business activities contribute to your carbon footprint.
        </p>

        <div className="border rounded-xl shadow-lg p-8 bg-gray-50">
          <p className="text-lg font-medium mb-4">
            🚧 Calculator UI is under development.
          </p>
          <p className="text-gray-500">
            This page will soon include an interactive calculator where users can input values like energy usage, transport data, and waste generation to estimate emissions.
          </p>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          <p>Need this faster? Contact us for a demo or early access.</p>
        </div>
      </div>
    </main>
  );
}
