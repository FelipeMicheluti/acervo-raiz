
import { User } from "lucide-react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const SignIn = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()


        try {
            const payload = { email, password }

            const repsonse = await axios.post("/auth/login", payload, { baseURL: import.meta.env.VITE_API_URL  })

            localStorage.setItem("token", repsonse.data.accessToken)

            alert("Login realizado com sucesso")

            navigate("/")
        } catch (error) {
            console.error({ handleSubmitError: error })

            alert("Erro ao realizar login. Verifique suas credenciais")
        }
    }
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            <div className="flex justify-center items-center w-full my-20">
                <div className="bg-[#D9D9D9] w-[450px] h-[450px] rounded-md flex flex-col items-center p-6">


                    <div className="text-black flex flex-col items-center mt-4">
                        <div className="text-6xl">
                            <User size={60} />
                        </div>
                        <span className="mt-2 text-sm tracking-widest">Entre no Acervo Raiz</span>
                    </div>


                    <form onSubmit={handleSubmit} className="mt-6 w-full flex flex-col text-black">
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name="email" id="email" type="email"
                        value={email} onChange={event => setEmail(event.target.value)} className="border p-2 mb-3 rounded" />

                        <label htmlFor="password" className="text-sm">Senha</label>
                        <input name="password" id="password" type="password" 
                       value={password} onChange={event => setPassword(event.target.value)} className="border p-2 mb-4 rounded" />
                        <button className="bg-black text-white p-2 rounded">
                            Submit
                        </button>
                    </form> 
                </div>
            </div>

            <Footer />
        </div>
    );
};