


export const User= ()=> {
    return (
        <div className="flex w-full min-h-screen bg-[#7A1D1D] text-white">
            <aside className="w-1/4 bg-[#6f1a1a] p-6 min-h-screen">
                <ul className="flex flex-col gap-4">
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </aside>


            <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-[#8a2a2a] rounded-xl p-6 shadow-lg min-h-[200px]"></section>
                <section className="bg-[#8a2a2a] rounded-xl p-6 shadow-lg min-h-[200px]"></section>
                <section className="bg-[#8a2a2a] rounded-xl p-6 shadow-lg min-h-[200px]"></section>
            </main>
        </div>
    );
}