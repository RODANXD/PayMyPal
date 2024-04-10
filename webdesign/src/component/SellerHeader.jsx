import React, {useState} from "react";
import { CiMenuKebab } from "react-icons/ci";

const SellerHeader = () => {
  const [SellerMenu, setSllerMenu] = useState(false);

  const handleSellerClick = () => {
    setSllerMenu(!SellerMenu);
  };

  return (
    <>
    <div className=' bg-white drop-shadow-lg flex items-center justify-center p-3 xs:flex-col-reverse xs:items-end'>
      <div className=" flex flex-col items-center w-full">
    <ul className={`flex items-center gap-12 text-base vsm:flex-col vsm:gap-6 ${SellerMenu?'flex-col' : 'hidden'} 
      md:flex md:flex-row md:gap-3 
      lg:gap-6 xl:gap-12 
      xs:flex-col xs:gap-3 xs:p-1 xs:items-center`}>

          
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Account</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Security</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base md:text-center">Data and Privacy</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Payments</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Notifications</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Seller Tools</li></a>
          <a href="#"><li className="hover:text-cyan-500 text-black font-roboto font-semibold p-4 xs:p-2 xs:text-sm cursor-pointer text-base md:text-sm lg:text-base">Statements and taxes</li></a>
        </ul>
        </div>
          <CiMenuKebab className=' hidden cursor-pointer xs:block xs:size-5 md:hidden text-red-600' onClick={handleSellerClick}/>
    </div>
    </>
  )
}

export default SellerHeader