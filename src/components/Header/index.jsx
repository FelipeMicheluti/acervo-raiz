import { Menu } from 'lucide-react'
import { Search } from 'lucide-react';
import { Bookmark } from 'lucide-react'
import { React } from 'react'


export const Header = () => {
    return (


           
        <header className="bg-gray-400 p-4 flex items-center w-full justify-end h-9">

            <div className="flex items-center w-1/3 bg-white rounded-full h-8 px-3 ">

                <input
                    type="text"
                    className="w-full bg-transparent outline-none text-black"
                />


            </div>

            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    <Search />
                </button>
            </div>

            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    <Bookmark />
                </button>
            </div>

            <div className="flex ">

                <button className="text-black hover:text-gray-600 mr-4">
                    <Menu /> 
                </button>
            </div>


            <div className="flex items-center gap-4 text-black" >


                <div className="w-6 h-6 bg-black rounded-full" />{/* Imagem do usuário aqui */}
            </div>


        </header>
    )
}

