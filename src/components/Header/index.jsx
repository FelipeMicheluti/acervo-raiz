import { Menu } from 'lucide-react'
import { Home } from 'lucide-react';
import { Search } from 'lucide-react';
import { Bookmark } from 'lucide-react'
import { React } from 'react'


export const Header = () => {
    return (



        <header className="bg-gray-400 p-7 flex items-center w-full justify-end h-9 italic">

            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    <Home />
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

            <div className="flex ">



                <div className="flex ">

                    <button className="text-black hover:text-gray-600 mr-4">
                      entar
                    </button>
                </div>


                <button className="text-black hover:text-gray-600 mr-4">
                    Cadastrar
                </button>
            </div>


          {/*<div className="flex items-center gap-4 text-black" >
                <div className="w-6 h-6 bg-black rounded-full" />{/* Imagem do usuário aqui 
            </div>*/}


        </header>
    )
}

