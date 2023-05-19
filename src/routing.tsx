import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path='/projects' element={<Skills />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;