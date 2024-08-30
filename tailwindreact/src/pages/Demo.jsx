import React, { useState } from 'react';

function LanguageForm() {
  const [languages, setLanguages] = useState([{ language: '', level: '' }]);

  const addLanguageRow = () => {
    setLanguages([...languages, { language: '', level: '' }]);
  };

  const handleInputChange = (index, event) => {
    const values = [...languages];
    if (event.target.name === 'language') {
      values[index].language = event.target.value;
    } else {
      values[index].level = event.target.value;
    }
    setLanguages(values);
  };

  return (
    <div className="p-4">
      {languages.map((lang, index) => (
        <div key={index} className="flex space-x-4 mb-4">
          <input
            type="text"
            name="language"
            value={lang.language}
            onChange={(e) => handleInputChange(index, e)}
            placeholder="Enter Language"
            className="border border-gray-300 p-2 w-1/2"
          />
          <select
            name="level"
            value={lang.level}
            onChange={(e) => handleInputChange(index, e)}
            className="border border-gray-300 p-2 w-1/2"
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      ))}
      <button
        type="button"
        onClick={addLanguageRow}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Another Language
      </button>
    </div>
  );
}

export default LanguageForm;
