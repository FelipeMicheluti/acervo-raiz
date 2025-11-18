
export default function Footer() {
    return (
        <footer className="bg-gray-400 text-black py-2 mt-11">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <p className="text-sm">
                    © {new Date().getFullYear()}  Todos os direitos reservados.
                </p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition">Sobre</a>
                    <a href="#" className="hover:text-white transition">Contato</a>
                    <a href="#" className="hover:text-white transition">Privacidade</a>
                </div>

            </div>
        </footer>
    );
}