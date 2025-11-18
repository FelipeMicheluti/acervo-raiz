import { React } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home/indx";
import { CreateReport } from "./pages/CreateReport";
import { Reports } from "./pages/Reports";
import { SingUp } from "./pages/SignUp";
import { Sing } from "./pages/Sing";


export default function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<CreateReport />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/SingUp" element={<SingUp />} />
      <Route path="/Sing" element={<Sing />} />
    </Routes>

  );
}

