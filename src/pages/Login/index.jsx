<div className="flex flex-col w-full min-h-screen bg-[#7A1D1D] text-white">
    <Header />
    <h1 className="text-2xl font-bold mt-6 ml-4">perfil</h1>

    <div className="flex justify-center mt-10">
        <div className="
                    bg-white
                    w-[350px]
                    min-h-[380px]
                    rounded-md
                    shadow-lg
                    p-6
                    flex
                    flex-col
                    gap-4
                    text-black
                ">

            
            <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-sm p-2"
            />
            <input
                type="text"
                placeholder="Surname"
                className="w-full border border-gray-300 rounded-sm p-2"
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-sm p-2"
            />
            <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-sm p-2 h-24 resize-none"
            />

            <button className="w-full bg-black text-white p-2 rounded-sm mt-2">
                Submit
            </button>

        </div>
    </div>