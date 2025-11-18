import Footer from "../../components/Footer";
import { Header } from "../../components/Header";


export const Reports = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white">
            <Header />

            <div className="flex justify-center items-center w-full mt-20">
                <div className="bg-[#D9D9D9] w-[450px] h-[450px] rounded-md flex flex-col items-center p-6">

                    <div className="text-black flex flex-col items-center mt-4">
                        <div className="text-6xl"> 
                            {/* Ícone removido */}
                        </div>
                        <span className="mt-2 text-sm tracking-widest">RELATÓRIOS</span>
                    </div>

                    <form className="mt-6 w-full flex flex-col text-black">
                        <label className="text-sm">Tipo de Relatório</label>
                        <select className="border p-2 mb-3 rounded">
                            <option>Vendas</option>
                            <option>Estoque</option>
                            <option>Clientes</option>
                            <option>Financeiro</option>
                        </select>

                        <label className="text-sm">Data Inicial</label>
                        <input className="border p-2 mb-3 rounded" type="date" />

                        <label className="text-sm">Data Final</label>
                        <input className="border p-2 mb-4 rounded" type="date" />

                        <button className="bg-black text-white p-2 rounded">
                            Gerar Relatório
                        </button>
                    </form>

                </div>
            </div>

            <Footer />
        </div>
    );
};
