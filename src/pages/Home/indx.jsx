
import {React} from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";


export const HomePage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white">
          <Header/>
            
            {/*  Top Box */}
            <div className="flex justify-center mt-10">
                <div className="bg-[#D9D9D9] w-3/4 h-48 rounded-sm">
                
                hygjghd</div>
            </div>


            {/* Middle Content */}
            <div className="flex justify-center w-full mt-20">
                <div className="flex w-3/4 gap-10">
                    {/* Square Image */}
                    <div className="bg-[#050505] w-28 h-28" />


                    {/* Lines */}
                    <div className="flex flex-col justify-center gap-4 w-full">
                        <div className="w-1/2 h-2px  text-gray-400" > alalalal</div>
                        <div className="w-3/4 h-2px bg-white" />
                        <div className="w-full h-2px bg-white" />
                    </div>
                </div>
            </div>


            {/* Bottom Box */}
            <div className="flex justify-center mt-20 mb-10">
                <div className="bg-[#D9D9D9] w-3/4 h-40">
                ghhfg
                </div>
            </div>


        
            <Footer/>
        </div>
    );
};