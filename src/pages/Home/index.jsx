import { React } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Search, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


export const HomePage = () => {
    const [search, setSearch] = useState(' ')
    const [reports, setReports] = useState([])

    useEffect(() => {
        axios.get("/reports", {
            baseURL: import.meta.env.VITE_API_URL, params: {
                q: search
            }
        })
            .then(response => setReports(response.data.items))
            .catch(error => console.error({ getReportsError: error }))
    }, [search])

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            <article class="text-center mt-26 text-8xl  text-balance">
                <h4>Acervo Reaiz: História e lendas de São Paulo</h4>
                <p className="text-center my-20  text-3xl">Explore as narraivas que moldam a identidade cultural do nosso estado.
                    Cada historia é um pedaço vivo da nosssa tradição oral</p>
            </article>


            <div className="flex self-center w-1/2  bg-gray-400 rounded-full h-9 px-3 mt-10 border-0 text-black">
                <button className=" hover:text-gray-800 mr-4">
                    <Search />
                </button>
                <input
                    placeholder="Buscar histórias..."
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    type="text"
                    className="w-full  rounded-full outline-none  text-black"
                />
            </div>


            <div className="flex justify-center w-full text-black text-center mt-20 py-20">
                <div className="grid w-3/4 gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {reports?.slice(0, 3).map(item => (
                        <div className="bg-white text-black rounded-2xl p-8 shadow-lg min-h-[450px]" key={item.id}>
                            <p className="text-sm font-semibold text-green-700 mb-2">{item.category.name}</p>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p className="text-sm mt-3 opacity-80">
                                {item.content.substring(0, 500) + '...'}
                            </p>

                            <Link to={`/relatos/${item.id}`}>
                                <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                                    Ler História
                                </button>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>





            <div className="flex justify-center my-20 mb-7 text-center ">
                <div className="bg-gray-400 w-2/4 h-45 text-black rounded-2xl ">
                    <BookOpen />
                    <h3 className="font-bold ">Preservando Nossa Ment Cultural</h3>

                    <p className="mt-3 font-light text-balance"> O Acervo raiz é dedicado a preservar e compatilhar as historias orias,lendas e contos que formam
                        o rico mosaico cultural de São Paulo. Cada narrativa registrada aqui é um testemunho vivo d nossa tradição e identidade coletiva.
                    </p>
                    <Link to={"/sobre"}>
                        <button className="hover:text-gray-800 w-55 rounded-full mt-2 bg-[#7A1D1D]">Saiba Mais Sobre o Projeto</button>
                    </Link>
                </div>
            </div>



            <Footer />
        </div>
    );
};