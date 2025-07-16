import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
   <nav className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center h-16">
      {/* Logo Centered */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
           src="/TMlogo.png"  
           alt="logo"
           height={60} 
           width ={60} 
        />
      </Link>
    </div>
  </div>
</nav>
  );
};

export default Navbar;