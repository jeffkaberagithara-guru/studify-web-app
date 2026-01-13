import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Library from "./pages/Library.jsx";
import Upload from "./pages/convert/Upload.jsx";
import Summarize from "./pages/convert/Summarize.jsx";
import TextToAudio from "./pages/convert/TextToAudio.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Sticky header on all pages */}
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/library" element={<Library />} />
        <Route path="/convert/upload" element={<Upload />} />
        <Route path="/convert/summarize" element={<Summarize />} />
        <Route path="/convert/text-to-audio" element={<TextToAudio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
