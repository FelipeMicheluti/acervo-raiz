import { User } from "lucide-react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export const SingUp = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const payload = { name, email, password }

            await axios.post("/auth/register", payload, { baseURL: import.meta.env.VITE_API_URL })

            alert("Cadastro finalizado com sucesso")

            navigate("/")
        } catch (error) {
            console.error({ handleSubmitError: error })
        }
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            <div className="flex justify-center items-center w-full my-20">

                <div className="bg-[#D9D9D9] w-[450px] h-[530px] rounded-md flex flex-col items-center p-6">

                    <div className="text-black flex flex-col items-center mt-4">
                        <div className="text-6xl">
                            <User size={60} />
                        </div>
                        <span className="mt-2 text-sm tracking-widest">CRIE SUA CONTA</span>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 w-full flex flex-col text-black">
                        <label htmlFor="name" className="text-sm">Nome</label>
                        <input name="name" id="name" type="text" value={name} onChange={event => setName(event.target.value)} className="border p-2 mb-3 rounded" />

                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name="email" id="email" type="email" value={email} onChange={event => setEmail(event.target.value)} className="border p-2 mb-3 rounded" />

                        <label htmlFor="password" className="text-sm">Senha</label>
                        <input name="password" id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} className="border p-2 mb-4 rounded" />


                        <button className="bg-black text-white p-2 rounded">
                            Criar Conta
                        </button>
                    </form>


                    <div className="mt-4 text-sm text-black">
                        Já tem uma conta?
                        <Link
                            to="/login"
                            className="font-bold ml-1 text-[#7A1D1D] hover:text-red-900 transition-colors"
                        >
                            Faça login aqui
                        </Link>
                    </div>


                </div>
            </div>

            <Footer />
        </div>
    );
};