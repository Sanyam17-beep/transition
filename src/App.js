import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import { Navigate, Route, Routes ,useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <div className="App">
  <Navbar></Navbar>
  <main>
    <AnimatePresence mode='wait' initial={false}>
    <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home className='hu'/>} />
          <Route path="/about" element={<About/>} />
          </Routes>
    </AnimatePresence>
    
  </main>
 
    </div>
  );
}

export default App;
