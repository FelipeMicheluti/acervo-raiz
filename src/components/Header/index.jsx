import React from 'react';
import { Navbar } from '../Navbar';




export const Header = () => {
    return (

      
        <header className="bg-gray-400 p-7 flex items-center w-full justify-between h-16 italic">
           
            <div className="text-xl font-bold text-black">
                Acervo Raiz
            </div>

            <Navbar /> 
        </header>
    )
}