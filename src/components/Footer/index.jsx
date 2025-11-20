import { BookOpen } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-400 text-black py-15 mt-auto ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <p className="text-sm">
                    © {new Date().getFullYear()}  Todos os direitos reservados.
                </p>
                <BookOpen />
                <div>
                    <h1 className="font-bold ">
                        Acervo Raiz
                    </h1>
                    <p className="text-balance">Preservando e compartilhando as historias e lendas que forman a identidade cultural de São Paulo</p>
                </div>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="sobre" target="_blank" className="hover:text-white transition">Sobre</a>
                    <a href="mailto:michelutifelipe@gmail.com" target="_blank" className="hover:text-white transition">Contato</a>
                    <a href="#" className="hover:text-white transition">Pr</a>
                </div>




            </div>
        </footer>
    );
}