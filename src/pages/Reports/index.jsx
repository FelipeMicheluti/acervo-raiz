import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Upload } from "lucide-react"; 

export const Reports = () => {
    return (
       
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-black italic">
            <Header />

            <div className="flex justify-center items-center w-full mt-12 px-4 mb-20"> {/* Aumentei a margem inferior (mb-20) */}
                <div className="bg-white w-[850px] min-h-[520px] rounded-xl shadow-xl p-10 border border-[#dcdcdc]">

               
                    <div className="flex flex-col gap-2 mb-8 items-center text-center">
                        <Upload size={50} className="text-[#7A1D1D] opacity-80" />
                        <h1 className="text-3xl font-light tracking-wide text-gray-800">Enviar Nova História</h1>
                        <p className="text-sm text-gray-600">
                            Compartilhe suas memórias, lendas e contos com a comunidade
                        </p>
                    </div>

                    <hr className="border-gray-300 mb-8" />

          
                    <form className="flex flex-col gap-6 text-black mb-10">

                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-bold text-gray-700">Detalhes da História</h2>
                            <p className="text-sm text-gray-500 italic">
                                Preencha todos os campos para compartilhar sua narrativa
                            </p>
                        </div>

                     
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Título da História <span className="text-red-500">*</span></label>
                            <p className="text-xs text-gray-500 mb-2">Ex.: A Lenda da Cuca no Interior</p>
                            <input type="text" className="border p-3 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1D1D]" placeholder="Digite o título aqui" />
                        </div>

                  
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Resumo <span className="text-red-500">*</span></label>
                            <p className="text-xs text-gray-500 mb-2">Um breve resumo da história (máx. 200 caracteres)</p>
                            <textarea className="border p-3 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1D1D] resize-none" rows="3" maxLength="200" placeholder="0/200 caracteres"></textarea>
                        </div>

                
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">História Completa <span className="text-red-500">*</span></label>
                            <p className="text-xs text-gray-500 mb-2">Conte sua história com todos os detalhes...</p>
                            <textarea className="border p-3 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1D1D] resize-y" rows="8" placeholder="Digite a história completa aqui"></textarea>
                        </div>

              
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-1">Local de Origem <span className="text-red-500">*</span></label>
                                <p className="text-xs text-gray-500 mb-2">Ex.: São Paulo - Centro</p>
                                <input type="text" className="border p-3 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#7A1D1D]" placeholder="Digite o local" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm font-semibold mb-1">Região <span className="text-red-500">*</span></label>
                                <p className="text-xs text-gray-500 mb-2">Selecione a região</p>
                                <select className="border p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7A1D1D]">
                                    <option value="">Selecione a região</option>
                                    <option>Capital</option>
                                    <option>Litoral</option>
                                    <option>Interior</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-1">Categoria <span className="text-red-500">*</span></label>
                            <p className="text-xs text-gray-500 mb-2">Selecione a categoria</p>
                            <select className="border p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7A1D1D]">
                                <option value="">Selecione a categoria</option>
                                <option>Lenda Urbana</option>
                                <option>Memória Pessoal</option>
                                <option>Conto Popular</option>
                                <option>História de Família</option>
                            </select>
                        </div>

                        <hr className="border-gray-300 mt-4" />

              
                        <div className="flex justify-between items-center pt-2">
                            <button
                                type="button"
                                className="text-gray-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition"
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="bg-[#7A1D1D] flex items-center gap-2 py-3 px-8 text-white font-semibold rounded-md hover:bg-[#5e1414] transition shadow-lg"
                            >
                                <Upload size={20} /> Enviar História
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            <Footer />
        </div>
    );
};