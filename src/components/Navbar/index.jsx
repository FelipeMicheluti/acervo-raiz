import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, LogIn, UserPlus, Send } from 'lucide-react';


export const Navbar = () => {
  const navigate = useNavigate()

  const token = !!localStorage.getItem("token")

  const handleSignOut = () => {
    localStorage.clear()

    navigate("/")
  }

  return (

    <nav className="flex items-center gap-6 text-black">


      <Link
        to="/"
        className="flex items-center hover:text-[#7A1D1D] transition-colors" >
        <Home className="w-5 h-5" />
      </Link>

      {token && (<Link
          to="/relatos/novo"
          className="flex items-center hover:text-[#7A1D1D] transition-colors" >
          <Send className="w-5 h-5 mr-1" />
        </Link>)}


      {!token ? <><Link
        to="/login"
        className="flex items-center hover:text-[#7A1D1D] transition-colors font-medium"
      >
        <LogIn className="w-5 h-5 mr-1" />
        Entrar
      </Link>

        <Link
          to="/cadastro"
          className="flex items-center px-4 py-2 rounded-full bg-[#7A1D1D] text-white hover:bg-red-900 transition-colors font-medium"
        >
          <UserPlus className="w-5 h-5 mr-1" />
          Cadastrar
        </Link></> : <button className="flex items-center hover:text-[#7A1D1D] transition-colors font-medium" onClick={handleSignOut}>Sair  </button>}
    </nav>
  );
};