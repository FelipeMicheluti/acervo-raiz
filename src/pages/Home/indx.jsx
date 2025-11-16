
import React from "react";


export const HomePage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white">
            {/*  Search  */}
            <div className="w-full bg-[#D9D9D9] h-14 flex items-center justify-between px-6 shadow-md">
                <div className="flex items-center w-1/3 bg-white rounded-full h-8 px-4">
                    <input
                        type="text"
                        className="w-full bg-transparent outline-none text-black"
                    />
                    <span className="text-black">➤</span>
                </div>


                <div className="flex items-center gap-4 text-black">
                    <div className="w-6 h-1 bg-black" />
                    <div className="w-6 h-6 bg-black rounded-full" />
                </div>
            </div>


            {/*  Top Box */}
            <div className="flex justify-center mt-10">
                <div className="bg-[#D9D9D9] w-3/4 h-48 rounded-sm" />
            </div>


            {/* Middle Content */}
            <div className="flex justify-center w-full mt-20">
                <div className="flex w-3/4 gap-10">
                    {/* Square Image */}
                    <div className="bg-[#D9D9D9] w-28 h-28" />


                    {/* Lines */}
                    <div className="flex flex-col justify-center gap-4 w-full">
                        <div className="w-1/2 h-[2px] bg-white" />
                        <div className="w-3/4 h-[2px] bg-white" />
                        <div className="w-full h-[2px] bg-white" />
                    </div>
                </div>
            </div>


            {/* Bottom Box */}
            <div className="flex justify-center mt-20 mb-10">
                <div className="bg-[#D9D9D9] w-3/4 h-40" />
            </div>


            {/* Bottom Divider */}
            <div className="w-full h-6 bg-[#D9D9D9]" />
        </div>
    );
};