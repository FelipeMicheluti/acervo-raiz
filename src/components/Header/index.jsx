import { React } from 'react'

export const Header = () => {
    return (
        <header className="bg-gray-400 p-4 flex items-center w-full justify-end h-9">



            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    -- pesquisa
                </button>
                </div>

            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    fav.
                </button>
                </div>
                
            <div className="flex ">
                <button className="text-black hover:text-gray-600 mr-4">
                    menu
                </button>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer flex-shrink-0">
                    {/* Imagem do usuário aqui */}
                </div>
        </header>
    )
}

