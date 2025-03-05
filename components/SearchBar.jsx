'use client';

import { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  const searchTerms = ['chocolates', 'fresh juice', 'snacks', 'cookies'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full ">
      <div className="relative">
      <input
          type="text"
          className="w-full p-3 pr-10 border border-[#FFFFFF38] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm backdrop-blur-[2.4px] bg-white/10"
          placeholder={`Search like ${searchTerms[currentIndex]}...`}
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <IoIosSearch className="text-gray-400" size={18} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
