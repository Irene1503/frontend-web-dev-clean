import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './portfolio.css';

function App() {
return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</>
);
}

export default App;
