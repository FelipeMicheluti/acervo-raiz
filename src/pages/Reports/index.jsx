import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { BarChart3, PieChart, FileBarChart, LineChart, TrendingUp, Download, ListTree } from "lucide-react";

export const Reports = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-black">
            <Header />

            <div className="flex justify-center items-center w-full mt-12 px-4">
                <div className="bg-white w-[850px] min-h-[520px] rounded-xl shadow-xl p-10 border border-[#dcdcdc]">

                    {/* Topo estilo Power BI */}
                    <div className="flex items-center gap-4 mb-8">
                        <FileBarChart size={50} className="text-[#7A1D1D]" />
                        <div>
                            <h1 className="text-2xl font-bold tracking-wide">Dashboard de Relatórios</h1>
                            <p className="text-sm text-gray-600">
                                Visualização e análise consolidada de indicadores estratégicos
                            </p>
                        </div>
                    </div>

                    <hr className="border-gray-300 mb-8" />

                    {/* Formulário */}
                    <form className="grid grid-cols-3 gap-6 text-black mb-10">

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Tipo de Relatório</label>
                            <select className="border p-2 rounded-md bg-white shadow-sm focus:outline-[#7A1D1D]">
                                <option>Vendas</option>
                                <option>Estoque</option>
                                <option>Clientes</option>
                                <option>Financeiro</option>
                                <option>Operacional</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Data Inicial</label>
                            <input type="date" className="border p-2 rounded-md shadow-sm bg-white focus:outline-[#7A1D1D]" />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold">Data Final</label>
                            <input type="date" className="border p-2 rounded-md shadow-sm bg-white focus:outline-[#7A1D1D]" />
                        </div>

                        {/* Botão */}
                        <div className="col-span-3">
                            <button className="bg-[#7A1D1D] w-full py-3 text-white font-semibold rounded-md hover:bg-[#5e1414] transition">
                                Gerar Relatório
                            </button>
                        </div>
                    </form>

                    {/* Filtros adicionais */}
                    <div className="mb-10">
                        <h2 className="text-lg font-semibold mb-3">Filtros Avançados</h2>

                        <div className="grid grid-cols-3 gap-6">

                            <select className="border p-2 rounded-md bg-white shadow-sm focus:outline-[#7A1D1D]">
                                <option>Categoria</option>
                                <option>Região</option>
                                <option>Responsável</option>
                                <option>Unidade</option>
                            </select>

                            <select className="border p-2 rounded-md bg-white shadow-sm focus:outline-[#7A1D1D]">
                                <option>Ano Fiscal</option>
                                <option>2025</option>
                                <option>2024</option>
                                <option>2023</option>
                            </select>

                            <select className="border p-2 rounded-md bg-white shadow-sm focus:outline-[#7A1D1D]">
                                <option>Status</option>
                                <option>Ativo</option>
                                <option>Inativo</option>
                                <option>Pendente</option>
                            </select>

                        </div>
                    </div>

                    <hr className="border-gray-300 mb-8" />

                    {/* Cards estilo Power BI */}
                    <div className="grid grid-cols-3 gap-6 mb-10">

                        <div className="bg-[#7A1D1D] text-white p-5 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">Total de Vendas</h3>
                            <p className="text-3xl font-bold mt-2">R$ 128.450</p>
                            <span className="text-sm opacity-80">+12% este mês</span>
                        </div>

                        <div className="bg-[#F2F2F2] p-5 rounded-lg shadow-md border">
                            <h3 className="font-semibold text-lg text-[#333]">Clientes Ativos</h3>
                            <p className="text-3xl font-bold text-[#7A1D1D] mt-2">320</p>
                            <span className="text-sm text-gray-600">+8 novos esta semana</span>
                        </div>

                        <div className="bg-[#F2F2F2] p-5 rounded-lg shadow-md border">
                            <h3 className="font-semibold text-lg text-[#333]">Produtos em Estoque</h3>
                            <p className="text-3xl font-bold text-[#7A1D1D] mt-2">1.540</p>
                            <span className="text-sm text-gray-600">Estabilidade no período</span>
                        </div>

                    </div>

                    {/* Indicadores extra */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <div className="bg-white border p-5 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="text-[#7A1D1D]" />
                                <h3 className="font-semibold">Ticket Médio</h3>
                            </div>
                            <p className="text-2xl font-bold mt-2">R$ 402</p>
                            <span className="text-xs text-gray-500">+3% vs. mês anterior</span>
                        </div>

                        <div className="bg-white border p-5 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2">
                                <LineChart className="text-[#7A1D1D]" />
                                <h3 className="font-semibold">Crescimento</h3>
                            </div>
                            <p className="text-2xl font-bold mt-2">7,8%</p>
                            <span className="text-xs text-gray-500">Últimos 90 dias</span>
                        </div>

                        <div className="bg-white border p-5 rounded-lg shadow-sm">
                            <div className="flex items-center gap-2">
                                <ListTree className="text-[#7A1D1D]" />
                                <h3 className="font-semibold">Categorias</h3>
                            </div>
                            <p className="text-2xl font-bold mt-2">12</p>
                            <span className="text-xs text-gray-500">Categorias monitoradas</span>
                        </div>
                    </div>

                    {/* Gráficos principais */}
                    <div className="grid grid-cols-2 gap-6 mb-10">

                        <div className="bg-white border shadow-md rounded-lg p-5 flex flex-col items-center">
                            <BarChart3 size={35} className="text-[#7A1D1D]" />
                            <p className="mt-3 font-semibold">Gráfico de Vendas</p>
                            <div className="mt-4 w-full h-[160px] bg-gradient-to-b from-[#7A1D1D]/30 to-[#d3d3d3] rounded-md"></div>
                        </div>

                        <div className="bg-white border shadow-md rounded-lg p-5 flex flex-col items-center">
                            <PieChart size={35} className="text-[#7A1D1D]" />
                            <p className="mt-3 font-semibold">Distribuição por Categoria</p>
                            <div className="mt-4 w-full h-[160px] bg-gradient-to-b from-[#7A1D1D]/30 to-[#d3d3d3] rounded-md"></div>
                        </div>

                    </div>

                    {/* Tabela de resumo */}
                    <div className="mb-10">
                        <h2 className="font-semibold text-lg mb-3">Resumo por Categoria</h2>

                        <table className="w-full text-sm border rounded-lg overflow-hidden">
                            <thead className="bg-[#7A1D1D] text-white">
                                <tr>
                                    <th className="p-2 text-left">Categoria</th>
                                    <th className="p-2 text-left">Vendas</th>
                                    <th className="p-2 text-left">Crescimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border">
                                    <td className="p-2">Eletrônicos</td>
                                    <td className="p-2">R$ 47.000</td>
                                    <td className="p-2 text-green-600">+15%</td>
                                </tr>
                                <tr className="border">
                                    <td className="p-2">Moda</td>
                                    <td className="p-2">R$ 22.800</td>
                                    <td className="p-2 text-red-600">-3%</td>
                                </tr>
                                <tr className="border">
                                    <td className="p-2">Casa & Jardim</td>
                                    <td className="p-2">R$ 18.500</td>
                                    <td className="p-2 text-green-600">+8%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Atividades Recentes */}
                    <div className="mb-10">
                        <h2 className="font-semibold text-lg mb-3">Atividades Recentes</h2>

                        <ul className="space-y-2 text-sm">
                            <li className="p-2 bg-gray-100 rounded-md border">Relatório Financeiro exportado às 09:12</li>
                            <li className="p-2 bg-gray-100 rounded-md border">Dashboard de Clientes atualizado</li>
                            <li className="p-2 bg-gray-100 rounded-md border">Modelo de Vendas recalculado</li>
                        </ul>
                    </div>

                    {/* Insights */}
                    <div className="mb-10">
                        <h2 className="font-semibold text-lg mb-2">Insights Automáticos</h2>

                        <div className="bg-[#F9F1F1] border-l-4 border-[#7A1D1D] p-4 rounded-md text-sm">
                            As vendas do último trimestre apresentaram crescimento consistente,
                            porém algumas categorias mostram tendência de desaceleração. Considere
                            revisar campanhas de marketing para segmentos com queda.
                        </div>
                    </div>

                    {/* Exportação */}
                    <div className="mb-4 text-center">
                        <button className="flex items-center gap-2 mx-auto bg-[#7A1D1D] text-white px-4 py-2 rounded-md hover:bg-[#5e1414] transition shadow-md">
                            <Download size={18} /> Exportar Relatório
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};
