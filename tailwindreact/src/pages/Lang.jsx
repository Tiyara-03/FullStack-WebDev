import React, { useState } from 'react'



export default function Lang() {
    const [languages, setLanguages] = useState([{ language: " ", level: " " }])

    const addlanguagerow = () => {
        setLanguages([...languages, { language: " ", level: " " }]);
    };

    const handleInputChange = (index, event) => {
        const values = [...languages];
        if (event.target.name === 'language') {
            values[index].language = event.target.value;
        }
        else {
            values[index].level = event.target.values;
        }

        setLanguages(values);
    }




    return (
        <>
            <div className='max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6'>
                <h1 className='text-2xl font-bold mb-1'>Language Profeciency</h1>
                <p className='text-gray-500 text-base mb-4'>Strengthen your resume by letting recruiters know you can communicate in multiple languages</p>
                <div className='grid grid-cols-2 mb-4'>
                    {languages.map((lang, index) => (
                        <>
                            <div className='mr-4 mb-8'key={index}>
                                <label className='block mb-2 text-sm font-bold text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Languages</label>
                                <input type="text" name='language' value={lang.language} onChange={(e) => handleInputChange(index, e)} placeholder='Language' className='border-2 border-gray-300 rounded-3xl p-3 block w-full' />
                            </div>
                            <div>
                                <label className='block mb-2 text-sm font-bold text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500'>Profeciency</label>
                                <select name="level" value={lang.level} onChange={(e) => handleInputChange(index, e)} className='border-2 border-gray-300 rounded-3xl p-3 block w-full'>
                                    <option value="levels">Select Profeciency</option>
                                    <option value="levels">Begineer</option>
                                    <option value="levels">Profecient</option>
                                    <option value="levels">Expert</option>
                                </select>
                            </div>
                        </>
                    ))}
                </div>

                <div>

                </div>
                <button type='button' onClick={addlanguagerow} className='text-blue-700 font-bold text-sm' >Add Another Language</button>
            </div>
        </>
    )
}
