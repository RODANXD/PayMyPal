import React from "react";
import Lottie from "lottie-react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import tickicon from "../assets/tickicon.json";

export const Home = () => {
  return (
    <>
      <div className=" flex items-center justify-center flex-col xl:h-screen xs:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <div className="flex items-center justify-center flex-col font-roboto w-96 gap-6 bg-gray-100 p-6 vsm:w-64
        sm:w-96 sm:p-10
        xs:w-52 xs:gap-4 xs:p-4
        lg:w-2/4
        xl:w-1/3
        2xl:w-96">
          <div>
            <Lottie animationData={tickicon} className=" size-32 vsm:size-20 sm:size-
             lg:size-32 xs:size-16" />
          </div>
          <div className="flex items-center justify-center flex-col text-center gap-7 text-black vsm:gap-3">
            <h2 className=" text-2xl vsm:text-base lg:text-lg xs:text-base">Your Product link is ready</h2>
            <span className=" text-lg vsm:text-sm lg:text-base xs:text-sm">
              you can spread the word by sharing this link on - email, social
              media, chat, whatsapp and more
            </span>
          </div>
          <div className=" flex items-center justify-center gap-8">
            <FaFacebook className=" size-10 vsm:size-6 lg:size-8 xs:size-4   text-blue-800"/>
            <FaTwitter className=" size-10 vsm:size-6 lg:size-8 xs:size-4 text-sky-800"/>
            <BsQrCode className=" size-10 vsm:size-6 lg:size-8 xs:size-4 text-sky-800"/>
          </div>
          <div className=" flex items-center justify-center flex-col gap-5 w-full">
            <button className=" w-full rounded-3xl border-2 border-sky-800 bg-blue-800 hover:bg-white hover:text-blue-800  
            vsm:text-xs lg:text-base xs:p-1 xs:text-xs">Get link</button>
            <button className="w-full rounded-3xl border-2 border-sky-800  text-blue-800 outline-sky-800 bg-white hover:bg-blue-800 hover:text-white 
            vsm:text-xs lg:text-base xs:p-1 xs:text-xs">Return to Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};
