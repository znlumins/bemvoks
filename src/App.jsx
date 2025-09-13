import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/page";
import Struktur from "./page/Struktur/page";
import About from "./page/about/page";
import Form from "./page/form/form";
import MyNavbar from "./componens/navbar";
import Myfooter from "./componens/footer";
import ProgramDetail from "./componens/detailproker/page";
import Detailkemenkoan from "./page/Struktur/detailkemenkoan";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Struktur" element={<Struktur />} />
        <Route path="/about" element={<About />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/Struktur/:slug" element={<Detailkemenkoan />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <div className="mt-10 md:mt-50">
        <Myfooter />
      </div>
    </Router>
  );
}

export default App;
