import { React } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const StoryPage = () => {
  const { id: reportId } = useParams()

  const [report, setReport] = useState(null)

  useEffect(() => {
    axios.get(`/reports/${reportId}`, { baseURL: import.meta.env.VITE_API_URL })
      .then(response => setReport(response.data))
      .catch(error => console.error({ getReport: error }))
  }, [])

  if (!report) return

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white italic">
      <Header />

      <article className="text-center mt-20">
        <h1 className="text-4xl font-bold">{report.title}</h1>
      </article>

      <div className="flex justify-center mt-10">
        <div className="w-3/4 bg-gray-400 p-4 rounded-2xl text-black">
          <div className="mb-4">
            <p className="font-bold">Local de Origem:</p>
            <p>{report.originLocation}</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Categoria:</p>
            <p>{report.category.name}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 px-4">
        <div className="w-3/4 bg-gray-400 p-6 rounded-2xl text-black">
          <p className="font-light">{report.content}</p>
        </div>
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
