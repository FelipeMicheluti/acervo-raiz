import { React } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { BookOpen } from "lucide-react";



export const CreatedReport = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
      <Header/>

      {/* Top Box */}
      <article className="text-center mt-26 text-8xl text-balance">
        <h3>Relatório Criado: História e Lendas de São Paulo</h3>
        <p className="text-center mt-26 text-3xl">
          Descubra o impacto cultural e a importância das narrativas que moldam
          nossa identidade.
        </p>
      </article>

      {/* Content Section */}
      <div className="flex justify-center w-full text-black text-center mt-50">
        <div className="w-3/4">
          <div className="bg-gray-400 p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-xl mb-4">Resumo do Relatório</h3>
            <p className="font-light">
              Este relatório explora as narrativas orais que fazem parte do
              patrimônio cultural de São Paulo. Ele examina as histórias, as
              lendas e a maneira como essas tradições continuam a influenciar
              a cultura local até os dias de hoje.
            </p>
          </div>

          <div className="bg-gray-400 p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-xl mb-4">Capítulos do Relatório</h3>
            <ul className="list-disc pl-5">
              <li className="font-light mb-2">
                <strong>Capítulo 1:</strong> A Origem das Lendas Paulistas
              </li>
              <li className="font-light mb-2">
                <strong>Capítulo 2:</strong> A Tradição Oral em São Paulo
              </li>
              <li className="font-light mb-2">
                <strong>Capítulo 3:</strong> Como as Histórias Moldam a Cultura
              </li>
            </ul>
          </div>

          <div className="bg-gray-400 p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-xl mb-4">Conclusão</h3>
            <p className="font-light">
              O estudo das narrativas orais e lendas é vital para entender as
              raízes culturais de São Paulo. Este relatório oferece uma
              perspectiva sobre a importância dessas histórias na formação da
              identidade do estado e sua preservação para as futuras gerações.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Box */}
      <div className="flex justify-center mt-20 mb-5 text-center">
        <div className="bg-gray-400 w-2/4 h-45 text-black rounded-2xl">
          <BookOpen />
          <h3 className="font-bold">Preservando Nossa Memória Cultural</h3>
          <p className="mt-3 font-light text-balance">
            O Acervo Raiz é dedicado a preservar e compartilhar as histórias
            orais, lendas e contos que formam o rico mosaico cultural de São
            Paulo. Cada narrativa registrada aqui é um testemunho vivo da nossa
            tradição e identidade coletiva.
          </p>
          <button className="hover:text-gray-800 w-55 rounded-full mt-2 bg-[#7A1D1D]">
            Saiba Mais Sobre o Projeto
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
