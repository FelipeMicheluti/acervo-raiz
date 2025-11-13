


export const Form = () => {
    return (
        <form className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-700 text-center">Cadastrar Usuário</h2>

            <div className="flex flex-col">
                <label htmlFor="nome" className="text-gray-600 mb-1">Nome</label>
                <input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 mb-1">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="senha" className="text-gray-600 mb-1">Senha</label>
                <input
                    id="senha"
                    type="password"
                    placeholder="Digite sua senha"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Cadastrar
            </button>
        </form>
    );
};
