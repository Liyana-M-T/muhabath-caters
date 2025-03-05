'use client';

import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF1F] border border-[#FFFFFF1A] backdrop-blur-[4.2px] shadow-md ">
      <div className="pl-5 ">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/Logo.jpg" alt="Logo" width={50} height={50} className="bg-[#FFFFFF1F] border-[#FFFFFF1A] backdrop-blur-[4.2px] shadow-md"/>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Image src="/images/icon.png" alt="Logo" width={40} height={40} />
                <FiAlignJustify className="text-black h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
