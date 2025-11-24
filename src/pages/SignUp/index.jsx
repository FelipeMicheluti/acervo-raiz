import { User } from "lucide-react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";

export const SingUp = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            <div className="flex justify-center items-center w-full mt-20">
                <div className="bg-[#D9D9D9] w-[450px] h-[500px] rounded-md flex flex-col items-center p-6">
                    
                    <div className="text-black flex flex-col items-center mt-4">
                        <div className="text-6xl"> 
                            <User size={60}/>
                        </div>
                        <span className="mt-2 text-sm tracking-widest">CRIE SUA CONTA</span>
                    </div>

                    <form className="mt-6 w-full flex flex-col text-black">
                        <label className="text-sm">Nome</label>
                        <input className="border p-2 mb-3 rounded" type="text" />

                        <label className="text-sm">Email</label>
                        <input className="border p-2 mb-3 rounded" type="email" />

                        <label className="text-sm">Senha</label>
                        <input className="border p-2 mb-4 rounded" type="password" />

                        <label className="text-sm">Confirmar Senha</label>
                        <input className="border p-2 mb-4 rounded" type="password" />

                        <button className="bg-black text-white p-2 rounded">
                            Criar Conta
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};
