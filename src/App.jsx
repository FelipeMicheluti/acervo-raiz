import { React } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Reports } from "./pages/Reports";
import { SingUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { About } from "./pages/About";
import { Stories } from "./pages/Stories";
import { StoryPage } from "./pages/StoryPage";
import { HomePage } from "./pages/Home";



export default function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cadastro" element={<SingUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/relatos" element={<Stories/>} />
      <Route path="/relatos/novo" element={<Reports />} />
      <Route path="/relatos/:id" element={<StoryPage/>} />
      <Route path="/sobre" element={<About/>} />
      
    </Routes>

  );
}

