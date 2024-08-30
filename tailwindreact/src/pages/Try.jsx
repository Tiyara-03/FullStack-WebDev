import React, { useState } from 'react';

const EducationalForm = () => {
  const [degree, setDegree] = useState('');
  const [course, setCourse] = useState('');
  const [courseType, setCourseType] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [university, setUniversity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [gradingSystem, setGradingSystem] = useState('');
  const [marksObtained, setMarksObtained] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [finalGrade, setFinalGrade] = useState('');

  const calculateGrade = () => {
    if (gradingSystem === 'Scale 10') {
      setFinalGrade((marksObtained / totalMarks) * 10);
    } else if (gradingSystem === 'Scale 4') {
      setFinalGrade((marksObtained / totalMarks) * 4);
    } else if (gradingSystem === '% Marks of 100') {
      setFinalGrade((marksObtained / totalMarks) * 100);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Educational Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Degree Currently Pursuing</label>
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="">Select Degree</option>
          <option value="Graduation/Diploma">Graduation/Diploma</option>
          <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
          <option value="Doctorate/PhD">Doctorate/PhD</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Course</label>
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="Technical">Technical</option>
          <option value="LLB">LLB</option>
          <option value="BTech">BTech</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Course Type</label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              value="Full-Time"
              checked={courseType === 'Full-Time'}
              onChange={() => setCourseType('Full-Time')}
            />
            <span className="ml-2">Full-Time</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              value="Part-Time"
              checked={courseType === 'Part-Time'}
              onChange={() => setCourseType('Part-Time')}
            />
            <span className="ml-2">Part-Time</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              value="Distance Learning"
              checked={courseType === 'Distance Learning'}
              onChange={() => setCourseType('Distance Learning')}
            />
            <span className="ml-2">Distance Learning</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Specialization</label>
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          {/* Add options for specializations */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">University/Institute</label>
        <input
          type="text"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Starting Month and Year</label>
        <input
          type="month"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Ending Month and Year</label>
        <input
          type="month"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Grading System</label>
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={gradingSystem}
          onChange={(e) => setGradingSystem(e.target.value)}
        >
          <option value="">Select Grading System</option>
          <option value="Scale 10">Scale 10</option>
          <option value="Scale 4">Scale 4</option>
          <option value="% Marks of 100">% Marks of 100</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Marks Obtained</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={marksObtained}
          onChange={(e) => setMarksObtained(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Total Marks</label>
        <input
          type="number"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          value={totalMarks}
          onChange={(e) => setTotalMarks(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md"
          onClick={calculateGrade}
        >
          Calculate Grade
        </button>
      </div>

      {finalGrade && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Final Grade</label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            value={finalGrade}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default EducationalForm;
