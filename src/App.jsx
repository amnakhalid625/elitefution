import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import GameDevelopment from "./pages/GameDevelopment";
import Engineering from "./pages/engineering";
import ArtProduction from "./pages/artproduction";
import OurServices from "./pages/OurServices";
import Portfolio from './pages/Portfolio';
import AboutCompany from './pages/AboutCompany';
import OurWork from './pages/OurWork';
import Careers from './components/Career';
import GameJames from './pages/GameJames';
import UploadGameForm from './components/UploadGames';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignUp';
import ContactForm from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game-development" element={<GameDevelopment />} />
      <Route path="/engineering" element={<Engineering />} />
      <Route path="/artproduction" element={<ArtProduction />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about-us" element={<AboutCompany />} />
      <Route path="/our-work" element={<OurWork/>} />
         <Route path="/careers" element={<Careers/>} />
         <Route path="/game-james" element={<GameJames/>} />
         <Route path="/upload" element={<UploadGameForm/>} />
         <Route path="/login" element={<LoginForm/>} />
         <Route path="/signup" element={<SignupForm/>} />
         <Route path="/contact-us" element={<ContactForm/>} />









      
      {/* Add more routes as needed */}
      <Route path="*" element={<Home />} /> {/* Fallback route */}
      {/* This will redirect any unknown paths back to Home */}
    </Routes>
  );
}

export default App;
