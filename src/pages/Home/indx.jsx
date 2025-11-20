
import { React } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Search } from "lucide-react";
import { BookOpen } from "lucide-react";


export const HomePage = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            {/*  Top Box */}

            <article class="text-center mt-26 text-8xl  text-balance">
                <h3>Acervo Reaiz: História e lendas de São Paulo</h3>
                <p className="text-center mt-26  text-3xl">Explore as narraivas que moldam a identidade cultural do nosso estado. Cada historia é um pedaço vivo da nosssa tradição oral</p>
            </article>


            <div className="flex self-center w-1/2  bg-gray-400 rounded-full h-9 px-3 mt-20 border-0 text-black">
                <button className=" hover:text-gray-800 mr-4">
                    <Search />
                </button>
                <input

                    type="text"
                    className="w-full  rounded-full outline-none  text-black"
                />
            </div>

            {/* Middle Content */}
            <div className="flex justify-center w-full text-black  text-center mt-50 ">
                <div className="font-bold  text-left content-start "><h3>Narrativa em Destaque</h3></div>
                
                <div className="flex w-3/4  gap-10 ">

                    <div className="bg-gray-400  w-full h-100 rounded-2xl" >
                        <h2 className="font-bold ">  titulo de texto longoo  </h2>
                        <p className="mt-3 font-light"> descrisão:lllalalalalalalalaalalalalalala</p>

                        <button className=" houver:text-gray-800">ler historia</button>
                    </div>
                    <div className="bg-gray-400 w-full h-100 rounded-2xl" >
                        <h2 className="font-bold ">  titulo de texto longoo  </h2>
                        <p className="mt-3 font-light"> descrisão:lllalalalalalalalaalalalalalala</p>
                    </div>
                    <div className="bg-gray-400 w-full h-100 rounded-2xl" >
                        <h2 className="font-bold ">  titulo de texto longoo  </h2>
                        <p className="mt-3 font-light"> descrisão:lllalalalalalalalaalalalalalala</p>
                    </div>

                </div>
            </div>


            {/* Bottom Box */}
            <div className="flex justify-center mt-20 mb-5 text-center ">
                <div className="bg-gray-400 w-2/4 h-45 text-black rounded-2xl ">
                <BookOpen />
                    <h3 className="font-bold ">Preservando Nossa Ment Cultural</h3>

                    <p className="mt-3 font-light text-balance"> O Acervo raiz é dedicado a preservar e compatilhar as historias orias,lendas e contos que formam
                        o rico mosaico cultural de São Paulo. Cada narrativa registrada aqui é um testemunho vivo d nossa tradição e identidade coletiva.
                    </p>

                    <button className="hover:text-gray-800 w-55 rounded-full mt-2 bg-[#7A1D1D]">Saiba Mais Sobre o Projeto</button>
                </div>
            </div>



            <Footer />
        </div>
    );
};