import React, { useState } from 'react'





export default function Education() {
  const [gradingSystem, setGradingSystem] = useState('');
  const [marksObtained, setMarksObtained] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [finalGrade, setFinalGrade] = useState('');
    const [courseType, setCourseType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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
        <div className='max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-medium'>Education <p className='text-base text-green-400'>Add 10%</p></h2>
            <p className='text-gray-500 text-base mb-8'>Details like course, university, amd more, help recuiters identify your educational background</p>
            <div className='mb-8 flex flex-col'>
                <label className='mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Education</label>
                <select className='mt-1 block w-full border-2 border-gray-300 rounded-2xl py-2 text-gray-600'>
                    <option value="">Select Education</option>
                    <option value="Doctorate/PhD">Doctorate/PhD</option>
                    <option value="Masters/Post-Graduation">Masters/Post-Graduation</option>
                    <option value="Graduation/Diploma">Graduation/Diploma</option>
                    {/* <option value="Graduation/Diploma">12th</option>
                    <option value="Graduation/Diploma">10th</option> */}
                </select>
            </div>
            <div className='mb-8 flex flex-col '>
                <label className='mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>University/Institute</label>
                <input type="text" name='text' placeholder='Select University/Institute ' className='mt-1 block w-full border-2 border-gray-300 rounded-2xl py-2 text-gray-600' />
            </div>

            <div className='mb-8 flex flex-col'>
                <label className='mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Course</label>
                <select className='mt-1 block w-full border-2 border-gray-300 rounded-2xl py-2 text-gray-600'>
                    <option value="Btech" className='border-0 rounded-lg shadow-md'>Course</option>
                    <option value="Btech">Btech</option>
                    <option value="Btech">B.Com</option>
                    <option value="Btech">B.sc</option>
                    <option value="Btech">B.Arch</option>
                    <option value="Btech">B.Pharma</option>
                    <option value="Btech">B.Des.</option>
                    <option value="Btech">BCA</option>
                    <option value="Btech">LLB</option>
                    <option value="Btech">ITI Certification</option>
                    <option value="Btech">Other Graduation</option>
                </select>
            </div>

            <div className='mb-8 flex flex-col'>
                <label className='mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Specialization</label>
                <input type="text" name='text' placeholder='Specialization' className='mt-1 block w-full border-2 border-gray-300 rounded-2xl py-2 text-gray-600' />
            </div>

            <div className='mb-8'>
                <label className='mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Course Type</label>
                <div className='mt-1 text-gray-700'>
                    <label className='inline-flex items-center'>
                        <input type="radio" className='form-radio' value="Full-Time" checked={courseType === "Full-Time"} onChange={() => setCourseType('Full-Time')} />
                        <span className='ml-2'>Full-Time</span>
                    </label>
                    <label className='inline-flex items-center ml-24'>
                        <input type="radio" className='form-radio' value="Part-Time" checked={courseType === "Part-Time"} onChange={() => setCourseType('Part-Time')} />
                        <span className='ml-2'>Part-Time</span>
                    </label>

                    <label className='inline-flex items-center ml-24'>
                        <input type="radio" className='form-radio' value="Distance-Learning" checked={courseType === "Distance-Learning"} onChange={() => setCourseType('Distance-Learning')} />
                        <span className='ml-2'>Distance-Learning</span>
                    </label>
                </div>
            </div>


            <div className='mb-8'>
                <label className='block mb-2 text-sm font-medium text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Course Duration</label>
                <div className='flex flex-row text-gray-600'>
                    <label>Starting</label>
                    <input type="month" placeholder='Starting Month and Year' className='' value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    <p className='mx-12'>To</p>

                    <label>Ending</label>
                    <input type="month" placeholder='Ending Month and Year' className='' value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
            </div>

           <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500">Grading System</label>
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
        <label className="block text-sm font-medium text-gray-700 after:content-['*] after:ml-0.5 after:text-red-500">Marks Obtained</label>
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

    )
}
