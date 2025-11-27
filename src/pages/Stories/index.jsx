import { React } from "react";
import { Header } from "../../components/Header";
import { Search, Filter } from "lucide-react";
import Footer from "../../components/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Stories = () => {
    const [search, setSearch] = useState('')
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
        <div className="flex flex-col min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            {/* Título */}
            <section className="px-20 pt-24 text-center">
                <h1 className="text-5xl font-bold">Todas as Histórias</h1>
                <p className="text-xl opacity-90 mt-4">
                    Explore nossa coleção completa de narrativas.
                </p>

                {/* Campo de Busca */}
                <div className="flex items-center justify-center mt-10">
                    <div className="flex bg-gray-200 w-2/4 rounded-full px-6 py-3 text-black">
                        <Search className="mr-3" />
                        <input
                            type="text"
                            placeholder="Buscar histórias..."
                            className="bg-transparent w-full outline-none"
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Conteúdo principal */}
            <div className="flex w-full px-20 my-20 gap-16">


                {/* Grid de Histórias */}
                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {
                        reports?.map(item => (
                            <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                                <p className="text-sm font-semibold text-green-700 mb-2">{item.category.name}</p>
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <p className="text-sm mt-3 opacity-80">
                                    {item.content.substring(0, 100) + '...'}
                                </p>

                                <Link to={`/relatos/${item.id}`}>
                                    <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                                        Ler História
                                    </button>
                                </Link>
                            </div>
                        ))
                    }



                </main>
            </div>

            <Footer />
        </div>
    );
};
