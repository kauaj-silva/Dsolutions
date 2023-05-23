import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';

function Routing() {
  return (
    <Routes>
      <Route path="/Dsolutions" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Dsolutions/about" element={<About />} />
        <Route path="/Dsolutions/skills" element={<Skills />} />
        <Route path='/Dsolutions/projects' element={<Projects />}></Route>
      </Route>
    </Routes>
  );
};

export default Routing;