// components/Header.tsx
'use client'
import React, { useState } from 'react';
import SidebarMenu from "./Menu"



function Search() {
  return (
      <img
        src="/icons/search.png"
        alt="TikTok"
        className="w-8 h-8 "
      />
    
  );
}
function Menu() {
  return (
      <img
        src="../menu.png"
        alt="TikTok"
        className="w-12 h-12 "
      />
   
  );
}

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" w-full ">
      <div className="border-xl w-full mx-auto px-2 pt-0 py-8 flex justify-between items-center border-b-3 border-gray-100 bg-white  hover:bg-gray-50 hover:shadow-md transition-shadow">
        <div className="flex items-center space-x-1">
          <img src="../rf-logo.png" alt="Logo RF" className="h-20" />
         
        </div>
         <div className="flex items-center space-x-2 text-sm ">
          <button className=" px-2     cursor-pointer">
                      <Search />
          </button>

          <button onClick={() => setIsMenuOpen(true)}
                   className="  cursor-pointer">
         <Menu />
            
          </button>
            {/* Mobile Menu Button */}
                  <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

                
              
          </div>
          
       
         
        
      </div>
    </header>
  );
}
