import React from 'react'
import img1 from "../assets/img1.jpg"
import { IoMdSearch } from "react-icons/io";

export default function Navbar() {
  return (
      <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40' >
        <div className='bg-primary/40 py-2'>
          <div className='container flex justify-between items-center'>
            <div>
              <a href="/" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                <img src={img1} alt="img" className='w-10 uppercase' />
                Shopsy
              </a>
            </div>
            {/* Search bar and order button */}
            <div>
              <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary' />
                <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>              
              </div>
            </div>
            {/* Order button */}
            <button onClick={()=> alert("Ordering not avavilable yet")} className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
              <span className='group-hover:block'>Order</span>
            </button>
          </div>
        </div>
      </div>  

      )
}
