import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full bg-[#6a1818] text-white p-4 flex items-center justify-between shadow-md">
      <h1 className="font-bold text-xl">Logo</h1>

      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/Setting" className="hover:underline">Config</Link>
      </div>
    </nav>
  );
};