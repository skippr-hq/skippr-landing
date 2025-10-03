import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Team from './components/Team';
import About from './components/About';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="antialiased relative">
        {/* Background patterns */}
        <div className="fixed inset-0 z-[-1] grid-pattern"></div>
        <div className="fixed inset-0 z-[-2] bg-black"></div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
