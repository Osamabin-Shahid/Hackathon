import Image from "next/image";
import React from "react";


const Header = () => {
  return (
    <div className="w-full h-auto bg-black">
      {/* Container */}
      <div className="max-w-[1320px] mx-auto py-6 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="flex items-center gap-1">
            <p className="text-yellow-500 text-xl md:text-2xl font-bold leading-8">
              Food
            </p>
            <span className="text-white text-xl md:text-2xl font-bold leading-8">
              tuck
            </span>
          </div>
        </div>

        {/* Navigation and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          {/* Navigation */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-white text-sm md:text-base">
            <li className="hover:text-yellow-500">Home</li>
            <li className="hover:text-yellow-500">Menu</li>
            <li className="hover:text-yellow-500">Blog</li>
            <li className="hover:text-yellow-500">Pages</li>
            <li className="hover:text-yellow-500 flex items-center gap-1">
              About
              <select
                className="bg-transparent text-white text-sm"
                name="about"
                id="ab"
              >
                <option value="about">About</option>
                <option value="team">Our Team</option>
              </select>
            </li>
            <li className="hover:text-yellow-500">Shop</li>
            <li className="hover:text-yellow-500">Contact</li>
          </ul>

          {/* Search and Cart */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <input
              className="w-full md:w-[310px] h-12 px-4 border-2 border-[#FF9F0D] bg-transparent text-white rounded-full placeholder:text-white placeholder:opacity-75 focus:outline-none"
              type="search"
              name="Search box"
              id="Sb"
              placeholder="Search..."
            />
            <Image 
  src="/Handbag.png" 
  alt="Cart" 
  width={24} 
  height={24} 
  className="h-6 w-6 md:h-[24px] md:w-[24px]"
/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import React from 'react'

// const Header = () => {
//   return (
//     <div className='w-[1920px] h-[950px] bg-black' >
//         <div>

//         <div className='w-[1320px] h-[87px] pt-[45px] ml-[300px] py-[85px]  '>
            
//             <div className=' w-[109px] h-[32px]  flex border-l-indigo-300'>
//                 <p className='font-Helvetica text-[24px] ml-[605px] leading-[32px] font-bold text-yellow-500'>Food</p>
//                 <span className='font-Helvetica text-[24px] leading-[32px]  font-bold text-[#ffffff]'>tuck</span>
//             </div>
//         <div className='flex justify-between'>
           
//             <div>
//             <ul className='flex justify-start mt-[25px] w-[500px] gap-[25px]'>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Home</li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Menu</li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Blog</li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Pages</li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] flex'>About <span>
//                 <select className='bg-transparent text-white' name="about" id="ab">About</select>
//                 </span></li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Shop</li>
//                 <li className=' leading-[24px] font-normal text-base text-[#ffffff] '>Contact</li>

//             </ul>
//             </div>
//             <div className='flex items-center gap-2'>

//                 <input className='w-[310px] h-[54px] px-6 border-2 border-[#FF9f0d] bg-transparent  rounded-[27px]'
//                 type="search" name="Search box" id="Sb" placeholder='Search...' />

//                 <img src="/Handbag.png" alt="Search" className=' h-[24px] w-[24px]'/>

                
//             </div>
//             </div>

            

//             </div>
            
            

//         </div>
      
//     </div>
//   )
// }

// export default Header
