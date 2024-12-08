import React from "react";
import Image from "next/image";

import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-black text-white">
      {/* Section 1: Support and Subscription */}
      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8 py-8">
        <div className="text-white text-center md:text-left md:w-1/2 w-full">
          <h2 className="text-lg md:text-2xl font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-sm md:text-base mt-4">
            Don&#39;t wait; make a smart & logical quote here. It's pretty easy.
          </p>
        </div>

        {/* Input and Button */}
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-2 px-3 md:py-2 md:px-5 mr-0 md:mr-2 mb-2 md:mb-0 w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-2 md:px-5">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4 border-[#FF9F0D]" />

      {/* Section 2: Footer Details */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">About Us</h2>
            <p className="text-sm text-gray-400">
              Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="bg-[#FF9F0D] w-16 h-16 flex items-center justify-center">
                <PiClockClockwiseBold className="text-white text-3xl" />
              </div>
              <div>
                <h3 className="text-white text-base">Opening Hours</h3>
                <p className="text-sm text-gray-400">Mon - Sat (8:00 - 18:00)</p>
                <p className="text-sm text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">Useful Links</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">Help?</h2>
            <ul className="text-sm text-gray-400 space-y-4">
              {["FAQ", "Terms & Conditions", "Reporting", "Documentation", "Support Policy", "Privacy"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="mb-6 text-xl font-semibold uppercase">Recent Posts</h2>
            <ul className="space-y-4">
              {[
                { src: "/Mask group (2).png", date: "20 Feb 2022", title: "Keep Your Business" },
                { src: "/Food1.png", date: "20 Feb 2022", title: "Keep Your Business" },
                { src: "/Mask Group (1).png", date: "20 Feb 2022", title: "Keep Your Business" },
              ].map((post, index) => (
                <li key={index} className="flex gap-4">
                  <Image src={post.src} alt={post.title} width={50} height={50} />
                  <div>
                    <p className="text-xs text-gray-400">{post.date}</p>
                    <h3 className="text-sm text-white">{post.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full py-4 bg-gray-500 flex flex-col md:flex-row items-center justify-between px-4">
        <span className="text-sm text-white mb-4 md:mb-0">
          Copyright © 2022 by Ayeman. All Rights Reserved.
        </span>
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div key={index} className="bg-white w-9 h-9 flex items-center justify-center rounded text-black">
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer1;

// import React from "react";
// import Image from "next/image";


// import { PiClockClockwiseBold } from "react-icons/pi";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";

// const Footer1 = () => {
//   return (
//     <footer className="bg-black  text-white">
//       <div className="flex flex-col w-[1170px] h-[142px] md:flex-row justify-center items-center bg-red-300 px-3 md:px-[135px] py-8">
//         <div className="text-white text-center md:text-left md:w-[50%] w-full">
//           <h2 className="text-[20px] md:text-[32px] font-semibold">
//             <span className="text-[#FF9F0D]">St</span>ill Need Our Support
//           </h2>
//           <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
//             Don&#39;t wait make a smart & logical quote here. Its pretty easy.
//           </p>
//         </div>

//         <div className="flex md:mt-0 mt-4 justify-center md:justify-start w-full">
//           <input
//             type="text"
//             placeholder="Enter Your Email"
//             className="bg-[#FF9F0D] text-white py-2 px-3 md:py-[10px] md:px-[20px] mr-2 w-[80%] md:w-auto"
//           />
//           <button className="text-[#FF9F0D] bg-white py-2 px-4 md:py-[10px] md:px-[20px]">
//             Subscribe Now
//           </button>
//         </div>
//       </div>

//       <hr className="my-4 border-[#FF9F0D]" />

//       <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           <div className="text-left">
//             <h2 className="mb-6 text-[24px] font-semibold uppercase">About Us</h2>
//             <ul className="text-gray-500 font-medium">
//               <li className="mb-4">
//                 <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
//                   Corporate clients and leisure travelers rely on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
//                 </p>
//               </li>
//               <li className="flex justify-start gap-4">
//                 <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
//                   <PiClockClockwiseBold className="text-white text-[40px]" />
//                 </div>
//                 <div>
//                   <h3 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h3>
//                   <p className="text-[10px] text-[#FFFFFF]">Mon - Sat (8:00 - 18:00)</p>
//                   <p className="text-[10px] text-[#FFFFFF]">Sunday - Closed</p>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div className=" px-[20px]">
//             <h2 className="mb-6 text-[24px] font-semibold uppercase">Useful Links</h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium">
//               <li className="mb-4"><a href="#" className="hover:underline ">About</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">News</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Partner</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Team</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Menu</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Contact</a></li>
//             </ul>
//           </div>

//           <div className="text-center">
//             <h2 className="mb-6 text-[24px] font-semibold uppercase">Help?</h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium">
//               <li className="mb-4"><a href="#" className="hover:underline">FAQ</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Terms & Conditions</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Reporting</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Documentation</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Support Policy</a></li>
//               <li className="mb-4"><a href="#" className="hover:underline">Privacy</a></li>
//             </ul>
//           </div>

//           <div className="text-center">
//             <h2 className="mb-6 text-[24px] font-semibold uppercase">Recent Posts</h2>
//             <ul className="text-gray-500 dark:text-gray-400 font-medium">
//               <li className="flex justify-center gap-4">
//                 <Image src='/Mask group (2).png' alt="Food" width={50} height={16} />
//                 <div>
//                   <h2 className="text-[12px] text-[#FFFFFF] font-normal">20 Feb 2022</h2>
//                   <h3 className="text-[14px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
//                 </div>
//               </li>
//               <li className="flex justify-center gap-4 mt-4">
//                 <Image src='/Food1.png' alt="Food" width={50} height={16}  />
//                 <div>
//                   <h2 className="text-[12px] text-[#FFFFFF] font-normal">20 Feb 2022</h2>
//                   <h3 className="text-[14px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
//                 </div>
//               </li>
//               <li className="flex justify-center gap-4 mt-4">
//                 <Image src='/Mask Group (1).png' alt="Food" width={50} height={16} />
//                 <div>
//                   <h2 className="text-[12px] text-[#FFFFFF] font-normal">20 Feb 2022</h2>
//                   <h3 className="text-[14px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//       </div>
//       <div>
//       <div className="w-full py-3 bg-gray-500 flex flex-col items-center justify-evenly md:flex-row">
//           <span className="text-sm text-[#ffffff] sm:text-center mb-4 md:mb-0">
//             Copyright © 2022 by Ayeman. All Rights Reserved.
//           </span>

//           <div className="flex justify-center gap-4">
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaFacebookF />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaTwitter />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaInstagram />
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaYoutube />/
//             </div>
//             <div className="bg-white w-9 h-9 flex justify-center items-center rounded text-black">
//               <FaPinterest />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer1;