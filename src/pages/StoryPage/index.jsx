import { React } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";


export const StoryPage = ({ story }) => {
  
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
      <Header />

    
      <article className="text-center mt-20">
        <h1 className="text-4xl font-bold">{story.title}</h1>
        <p className="mt-4 text-xl font-light">{story.subtitle}</p>
      </article>

      <div className="flex justify-center mt-10">
        <div className="w-3/4 bg-gray-400 p-4 rounded-2xl text-black">
          <div className="mb-4">
            <p className="font-bold">Local de Origem:</p>
            <p>{story.origin}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Categoria:</p>
            <p>{story.category}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Registrado em:</p>
            <p>{story.date}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 px-4">
        <div className="w-3/4 bg-gray-400 p-6 rounded-2xl text-black">
          <p className="font-light">{story.content}</p>
        </div>
      </div>


      <div className="flex justify-between mt-10 mb-5">
        <button className="text-white hover:text-gray-800" onClick={() => window.history.back()}>
          Voltar para Histórias
        </button>
        <button className="bg-[#7A1D1D] text-white py-2 px-4 rounded-full">
          Ver Mais Histórias
        </button>
      </div>

      <div className="flex justify-center mt-10 mb-5 text-center">
        <div className="bg-gray-400 w-2/4 h-45 text-black rounded-2xl p-4">
          <h3 className="font-bold">Acervo Raiz</h3>
          <p className="mt-3 font-light text-balance">
            O Acervo Raiz é dedicado a preservar e compartilhar as histórias orais,
            lendas e contos que formam o rico mosaico cultural de São Paulo.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};
