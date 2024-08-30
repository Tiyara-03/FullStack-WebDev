import React, { useState } from 'react';

const EducationalForm = () => {
  const [degree, setDegree] = useState('');
  const [customDegree, setCustomDegree] = useState('');

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Educational Details</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Degree Currently Pursuing</label>
        <div className="flex mt-1">
          <select
            className="block w-1/2 border-gray-300 rounded-l-md shadow-sm"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          >
            <option value="">Select Degree</option>
            <option value="Graduation/Diploma">Graduation/Diploma</option>
            <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
            <option value="Doctorate/PhD">Doctorate/PhD</option>
          </select>
          <input
            type="text"
            placeholder="Enter custom degree"
            className="block w-1/2 border-gray-300 rounded-r-md shadow-sm"
            value={customDegree}
            onChange={(e) => setCustomDegree(e.target.value)}
          />
        </div>
      </div>

      {/* The rest of your form fields remain unchanged */}

    </div>
  );
};

export default EducationalForm;
