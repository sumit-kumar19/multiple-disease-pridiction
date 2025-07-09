import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './componenta/home';
import Navbar from './componenta/navbar';
import Heart from './componenta/heartdesas';
import Daibites from './componenta/daibitepre';
import Kidney from './componenta/Kidneypre';
    

    function App() {
      return (
        <Router>
      
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predict-diabetes" element={<Daibites/>} />
            <Route path='*' element={<h1 style={{color:"black"}}>Not Found 404</h1>}/>
            <Route path="/predict-heart" element={<Heart />} />
            <Route path ="/predict-kidney" element={<Kidney/>} />
          </Routes>
  
        
      </Router>
  
      );
    }

    export default App;
    