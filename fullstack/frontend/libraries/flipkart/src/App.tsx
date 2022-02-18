
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Typopage from "./pages/Typopage";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={ <About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/typo" element={<Typopage />}/>
      
      </Routes>
    
    </Router>

   
      
    </>
  );
}

export default App;
