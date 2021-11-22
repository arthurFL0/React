import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BrasilApi from '../pages/BrasilApi'

const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/BrasilApi" element={<BrasilApi/>} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;
