import { BookOpen } from "lucide-react";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Users } from "lucide-react";
import { GraduationCap } from "lucide-react";


export const About = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#7A1D1D] text-white italic">
            <Header />

            {/* Seção Sobre */}
            <section className="flex flex-col items-center w-full px-6 py-20 text-center">
                <BookOpen size={50} className="mb-6" />
                <h1 className="text-4xl font-bold mb-4">Sobre o Acervo Raiz</h1>
                <p className="max-w-3xl text-lg opacity-90">
                    Uma iniciativa dedicada à preservação e compartilhamento das histórias orais que formam a rica identidade cultural de São Paulo.
                </p>
            </section>

            {/* Seção Missão */}
            <section className="w-full px-6 py-10 flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>

                <p className="max-w-4xl text-lg text-center opacity-90">
                    O Acervo Raiz nasceu do desejo de preservar as narrativas orais que formam o mosaico cultural do estado de São Paulo. Cada lenda, cada conto popular,
                    cada história de família carrega em si pedaços vivos de nossa tradição e identidade coletiva.
                    <br /><br />
                    Através da tecnologia moderna, buscamos dar voz às histórias que por gerações foram passadas de boca em boca,
                    garantindo que as futuras gerações também possam conhecer e se conectar com suas raízes culturais.
                </p>

                {/* Ícones da missão */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-center max-w-5xl">
                    <div className="flex flex-col items-center">
                        <BookOpen size={35} />
                        <h3 className="font-semibold mt-3">Preservação Cultural</h3>
                        <p className="opacity-80 mt-2 text-sm max-w-xs">Mantemos vivas as tradições orais que definem nossa identidade.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Users size={35} />
                        <h3 className="font-semibold mt-3">Comunidade</h3>
                        <p className="opacity-80 mt-2 text-sm max-w-xs">Conectamos pessoas através de histórias compartilhadas.</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <GraduationCap size={35} />
                        <h3 className="font-semibold mt-3">Educação</h3>
                        <p className="opacity-80 mt-2 text-sm max-w-xs">Promovemos conhecimento sobre nossa herança cultural.</p>
                    </div>
                </div>
            </section>

            {/* Como Funciona */}
            <section className="w-full px-6 py-16 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
                <p className="max-w-4xl text-lg opacity-90 mb-8">
                    Coletamos, organizamos e compartilhamos histórias orais de diferentes regiões de São Paulo.  
                    Cada narrativa é registrada com informações sobre sua origem e contexto cultural.
                </p>

                <button className="bg-white text-[#7A1D1D] font-semibold px-8 py-3 rounded-full hover:opacity-80 transition">
                    Explore as Histórias
                </button>
            </section>

            <Footer />
        </div>
    );
};