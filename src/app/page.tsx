
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      {/* Header Section */}
      <h1 className="bg-slate-400 font-Poppins text-xl md:text-2xl lg:text-3xl text-center py-4">
        Bismillah hi rahman nir raheem
      </h1>
      <h2 className="font-Poppins text-lg md:text-xl lg:text-2xl text-center py-2">
        Allah u Akbar
      </h2>

      {/* Image Section */}
      <div className="flex justify-center my-4">
        <Image
          src="/abcd.png" // Path to your image
          alt="Example image"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* First Grid Section */}
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 bg-red-200 border-[4px] text-center m-2">
          <li className="bg-red-200 border-[4px] text-center m-2">dsa</li>
          <li className="bg-red-200 border-[4px] text-center m-2 transition-transform hover:scale-105">
            asf
          </li>
          <li className="bg-red-200 border-[4px] text-center m-2">dff</li>
          <li className="bg-red-200 border-[4px] text-center m-2">dsa</li>
          <li className="bg-red-200 border-[4px] text-center m-2">asf</li>
          <li className="bg-red-200 border-[4px] text-center m-2">dff</li>
          <li className="bg-red-200 border-[4px] text-center m-2">dsa</li>
          <li className="bg-red-200 border-[4px] text-center m-2">asf</li>
          <li className="bg-red-200 border-[4px] text-center m-2">dff</li>
        </ul>
      </div>

      {/* Second Grid Section */}
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 border border-gray-300 mt-4">
          <li className="border-b border-gray-200 p-2 text-center">dsa</li>
          <li className="border-b border-gray-200 p-2 text-center">asf</li>
          <li className="border-b border-gray-200 p-2 text-center">dff</li>
          <li className="border-b border-gray-200 p-2 text-center">dsa</li>
          <li className="border-b border-gray-200 p-2 text-center">asf</li>
          <li className="border-b border-gray-200 p-2 text-center">dff</li>
          <li className="border-b border-gray-200 p-2 text-center">dsa</li>
          <li className="border-b border-gray-200 p-2 text-center">asf</li>
          <li className="border-b border-gray-200 p-2 text-center">dff</li>
        </ul>
      </div>
    </div>
  );
}
