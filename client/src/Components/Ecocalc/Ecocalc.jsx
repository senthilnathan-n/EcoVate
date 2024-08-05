import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from '../Footer';
import Nav from '../Nav';


// EnergyForm Component
const EnergyForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Energy Consumption</h2>
    <div>
      <label className="block text-gray-600">Monthly Electricity Consumption (kWh)</label>
      <input
        type="number"
        name="electricityConsumption"
        value={formData.electricityConsumption || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Source of Electricity</label>
      <select
        name="electricitySource"
        value={formData.electricitySource || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      >
        <option value="Coal">Coal</option>
        <option value="Natural Gas">Natural Gas</option>
        <option value="Renewable">Renewable</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-600">Type of Heating System</label>
      <input
        type="text"
        name="heatingSystem"
        value={formData.heatingSystem || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Monthly Heating Fuel Consumption</label>
      <input
        type="number"
        name="heatingFuelConsumption"
        value={formData.heatingFuelConsumption || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Cooling System Type</label>
      <input
        type="text"
        name="coolingSystem"
        value={formData.coolingSystem || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// TransportationForm Component
const TransportationForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Transportation</h2>
    <div>
      <label className="block text-gray-600">Vehicle Type and Model</label>
      <input
        type="text"
        name="vehicleType"
        value={formData.vehicleType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Fuel Type</label>
      <select
        name="fuelType"
        value={formData.fuelType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      >
        <option value="Gasoline">Gasoline</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-600">Annual Mileage</label>
      <input
        type="number"
        name="annualMileage"
        value={formData.annualMileage || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Public Transport Usage (Monthly)</label>
      <input
        type="text"
        name="publicTransport"
        value={formData.publicTransport || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Air Travel Details</label>
      <input
        type="text"
        name="airTravel"
        value={formData.airTravel || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// HousingForm Component
const HousingForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Housing</h2>
    <div>
      <label className="block text-gray-600">Size of Residence (Square Feet)</label>
      <input
        type="number"
        name="residenceSize"
        value={formData.residenceSize || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Housing</label>
      <input
        type="text"
        name="housingType"
        value={formData.housingType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Insulation and Energy Efficiency</label>
      <input
        type="text"
        name="insulation"
        value={formData.insulation || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// DietForm Component
const DietForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Diet and Food Consumption</h2>
    <div>
      <label className="block text-gray-600">Dietary Preferences</label>
      <input
        type="text"
        name="dietaryPreferences"
        value={formData.dietaryPreferences || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Frequency of Meat and Dairy Consumption</label>
      <input
        type="text"
        name="meatDairyConsumption"
        value={formData.meatDairyConsumption || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Food Waste per Week/Month</label>
      <input
        type="number"
        name="foodWaste"
        value={formData.foodWaste || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// WasteForm Component
const WasteForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Waste Production</h2>
    <div>
      <label className="block text-gray-600">Amount of Household Waste Generated</label>
      <input
        type="number"
        name="householdWaste"
        value={formData.householdWaste || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Recycling and Composting Practices</label>
      <input
        type="text"
        name="recyclingPractices"
        value={formData.recyclingPractices || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Waste</label>
      <input
        type="text"
        name="wasteType"
        value={formData.wasteType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// WaterForm Component
const WaterForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Water Usage</h2>
    <div>
      <label className="block text-gray-600">Monthly Water Usage (Gallons/Liters)</label>
      <input
        type="number"
        name="waterUsage"
        value={formData.waterUsage || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Water Conservation Practices</label>
      <input
        type="text"
        name="waterConservation"
        value={formData.waterConservation || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// GoodsForm Component
const GoodsForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Goods and Services</h2>
    <div>
      <label className="block text-gray-600">Annual Spending on Goods</label>
      <input
        type="number"
        name="goodsSpending"
        value={formData.goodsSpending || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Goods Purchased</label>
      <input
        type="text"
        name="goodsType"
        value={formData.goodsType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Frequency of Purchasing New Goods</label>
      <input
        type="text"
        name="goodsFrequency"
        value={formData.goodsFrequency || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// LifestyleForm Component
const LifestyleForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Lifestyle Choices</h2>
    <div>
      <label className="block text-gray-600">Frequency of Travel</label>
      <input
        type="text"
        name="travelFrequency"
        value={formData.travelFrequency || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Lifestyle Habits</label>
      <input
        type="text"
        name="lifestyleHabits"
        value={formData.lifestyleHabits || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// OffsetsForm Component
const OffsetsForm = ({ formData, handleChange }) => (
  <form className="space-y-4">
    <h2 className="text-xl text-gray-800">Carbon Offsets</h2>
    <div>
      <label className="block text-gray-600">Amount Spent on Offsets</label>
      <input
        type="number"
        name="offsetsSpent"
        value={formData.offsetsSpent || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Types of Offsets Purchased</label>
      <input
        type="text"
        name="offsetsType"
        value={formData.offsetsType || ''}
        onChange={handleChange}
        className="w-full mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);

// Main Ecocalc Component
const Ecocalc = () => {
  const [activeTab, setActiveTab] = useState('energy');
  const [formData, setFormData] = useState({
    electricityConsumption: '',
    electricitySource: '',
    heatingSystem: '',
    heatingFuelConsumption: '',
    coolingSystem: '',
    vehicleType: '',
    fuelType: '',
    annualMileage: '',
    publicTransport: '',
    airTravel: '',
    residenceSize: '',
    housingType: '',
    insulation: '',
    dietaryPreferences: '',
    meatDairyConsumption: '',
    foodWaste: '',
    householdWaste: '',
    recyclingPractices: '',
    wasteType: '',
    waterUsage: '',
    waterConservation: '',
    goodsSpending: '',
    goodsType: '',
    goodsFrequency: '',
    travelFrequency: '',
    lifestyleHabits: '',
    offsetsSpent: '',
    offsetsType: ''
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateCarbonFootprint = () => {
    // Sample calculation: This should be replaced with actual formulas based on input
    // Calculation logic...
    return 0; // Replace with actual calculation
  };

  const handleSubmit = () => {
    // Set calculated scores
    const scores = {
      energy: calculateCarbonFootprint(),
      transportation: calculateCarbonFootprint(), // This should be updated based on actual calculations
      housing: calculateCarbonFootprint(), // This should be updated based on actual calculations
      diet: calculateCarbonFootprint(), // This should be updated based on actual calculations
      waste: calculateCarbonFootprint(), // This should be updated based on actual calculations
      water: calculateCarbonFootprint(), // This should be updated based on actual calculations
      goods: calculateCarbonFootprint(), // This should be updated based on actual calculations
      lifestyle: calculateCarbonFootprint(), // This should be updated based on actual calculations
      offsets: calculateCarbonFootprint() // This should be updated based on actual calculations
    };

    // Navigate to results page and pass scores via state
    navigate('/result', { state: { scores, user: { name: "John Doe", email: "john.doe@example.com" } } });
  };

  return (
    <div>
    <Nav/>
    <div className="bg-green-50 min-h-screen p-6">
    <div className=" pt-[50px]  items-center">
    
    <h1 className='lg:text-5xl font-bold text-center items-center text-neutral-700'><span className='lg:text-5xl text-green-700 font-bold'>Eco</span>Calc</h1>
 
    <h2 className='lg:text-3xl lg:mt-[20px] mb-[20px] font-bold text-center items-center text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300  mb-9'>Greening Corporate Practices</h2>
    </div>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('energy')}
          className={`py-2 px-4 rounded ${activeTab === 'energy' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Energy
        </button>
        <button
          onClick={() => setActiveTab('transportation')}
          className={`py-2 px-4 rounded ${activeTab === 'transportation' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Transportation
        </button>
        <button
          onClick={() => setActiveTab('housing')}
          className={`py-2 px-4 rounded ${activeTab === 'housing' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Housing
        </button>
        <button
          onClick={() => setActiveTab('diet')}
          className={`py-2 px-4 rounded ${activeTab === 'diet' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Diet
        </button>
        <button
          onClick={() => setActiveTab('waste')}
          className={`py-2 px-4 rounded ${activeTab === 'waste' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Waste
        </button>
        <button
          onClick={() => setActiveTab('water')}
          className={`py-2 px-4 rounded ${activeTab === 'water' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Water
        </button>
        <button
          onClick={() => setActiveTab('goods')}
          className={`py-2 px-4 rounded ${activeTab === 'goods' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Goods
        </button>
        <button
          onClick={() => setActiveTab('lifestyle')}
          className={`py-2 px-4 rounded ${activeTab === 'lifestyle' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Lifestyle
        </button>
        <button
          onClick={() => setActiveTab('offsets')}
          className={`py-2 px-4 rounded ${activeTab === 'offsets' ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
        >
          Offsets
        </button>
      </div>

      <div className="mb-6">
        {activeTab === 'energy' && <EnergyForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'transportation' && <TransportationForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'housing' && <HousingForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'diet' && <DietForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'waste' && <WasteForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'water' && <WaterForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'goods' && <GoodsForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'lifestyle' && <LifestyleForm formData={formData} handleChange={handleChange} />}
        {activeTab === 'offsets' && <OffsetsForm formData={formData} handleChange={handleChange} />}
      </div>

      <button
        onClick={handleSubmit}
        className="py-2 px-4 bg-green-600 text-white rounded"
      >
        Submit
      </button>
      </div>
      <Footer/>
      </div>
  );
};

export default Ecocalc;