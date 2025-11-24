import { React } from "react";
import { Header } from "../../components/Header";
import { Search, Filter } from "lucide-react";
import Footer from "../../components/Footer";

export const Stories = () => {
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
                        />
                    </div>
                </div>
            </section>

            {/* Conteúdo principal */}
            <div className="flex w-full px-20 mt-20 gap-16">

                {/* Filtros (coluna esquerda) */}
                <aside className="w-1/4 bg-white/10 backdrop-blur-md text-white rounded-2xl p-8 h-fit shadow-xl space-y-10">
                    <div>
                        <h3 className="font-bold flex items-center gap-2 mb-3 text-lg">
                            <Filter size={18} /> Filtros
                        </h3>

                        <p className="font-semibold opacity-80 mb-2">Categoria</p>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Lendas Urbanas</li>
                            <li>Contos Populares</li>
                            <li>Histórias de Família</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-semibold opacity-80 mb-2">Região</p>
                        <ul className="space-y-2 text-sm opacity-90">
                            <li>Capital</li>
                            <li>Interior</li>
                            <li>Litoral</li>
                        </ul>
                    </div>
                </aside>

                {/* Grid de Histórias */}
                <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Exemplo de Card */}
                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Lendas Urbanas</p>
                        <h3 className="text-2xl font-bold">A Lenda da Cuca no Interior</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Uma criatura folclórica que assusta crianças desobedientes nas noites frias...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Lendas Urbanas</p>
                        <h3 className="text-2xl font-bold">O Fantasma do Viaduto do Chá</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Relatos de aparições noturnas no famoso ponto turístico paulistano...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Contos Populares</p>
                        <h3 className="text-2xl font-bold">A Sereia de Ubatuba</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Pescadores do litoral contam sobre uma criatura encantadora...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                    {/* Linha 2 */}
                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Contos Populares</p>
                        <h3 className="text-2xl font-bold">O Tesouro do Bandeirante</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Uma história que atravessa gerações sobre tesouros escondidos pelos bandeirantes...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Histórias de Família</p>
                        <h3 className="text-2xl font-bold">A Benzedeira de Piracicaba</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Memórias de uma benzedeira que curava com ervas e fé...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                    <div className="bg-white text-black rounded-2xl p-8 shadow-lg">
                        <p className="text-sm font-semibold text-green-700 mb-2">Histórias de Família</p>
                        <h3 className="text-2xl font-bold">Os Tropeiros da Mantiqueira</h3>
                        <p className="text-sm mt-3 opacity-80">
                            Histórias dos antigos tropeiros que cruzavam a serra...
                        </p>
                        <button className="mt-6 text-[#7A1D1D] font-semibold hover:underline">
                            Ler História
                        </button>
                    </div>

                </main>
            </div>

            <Footer />
        </div>
    );
};
