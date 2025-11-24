import { React } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Reports } from "./pages/Reports";
import { SingUp } from "./pages/SignUp";
import { Sing } from "./pages/Sing";
import { About } from "./pages/About";
import { Stories } from "./pages/Stories";
import { HomePage } from "./pages/Home/indx";
import { CreatedReport } from "./pages/CreateReport";
import { StoryPage } from "./pages/StoryPage";



export default function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<CreatedReport />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/SingUp" element={<SingUp />} />
      <Route path="/Sing" element={<Sing />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Stories" element={<Stories/>} />
      <Route path="/Story" element={<StoryPage/>} />
    </Routes>

  );
}

