import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className="py-16 bg-muted-background">
      <div className="max-w-3xl mx-auto px-4 text-center bg-white rounded-xl shadow-md p-10">
        <h2 className="text-4xl font-bold mb-4">
          AI-Powered Carbon Footprint Reports
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Our platform provides intelligent carbon footprint reporting tailored
          to your company’s size, industry type, and compliance requirements.
          Eliminate guesswork with automated, actionable insights.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full mb-8 transition-colors">
          Request Demo
        </button>
        <div className="text-left max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-4">
            {[
              "Seamless cloud-based data integration",
              "Customizable report formats (GHG, ESG, etc.)",
              "Industry-specific recommendations",
              "Real-time emissions tracking",
              "Collaborative team access",
            ].map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <BsFillCheckCircleFill className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
