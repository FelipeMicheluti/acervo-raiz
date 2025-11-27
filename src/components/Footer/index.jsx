import { BookOpen } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-400 text-white py-8 mt-auto italic">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        
                <p className="text-sm">
                    © {new Date().getFullYear()} Todos os direitos reservados.
                </p>

            
                <BookOpen size={40} className="text-white" />

               
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-xl">Acervo Raiz</h1>
                    <p className="text-sm text-balance">Preservando e compartilhando as historias e lendas que formam a identidade cultural de São Paulo</p>
                </div>

                
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="/sobre" target="_blank" className="hover:text-gray-400 transition">Sobre</a>
                    <a href="mailto:michelutifelipe@gmail.com" target="_blank" className="hover:text-gray-400 transition">Contato</a>
                    <a href="#" className="hover:text-gray-400 transition">Pr</a>
                </div>

            </div>
        </footer>
    );
}
