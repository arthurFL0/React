import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BrasilApi from '../pages/BrasilApi'
import BuscaDDD from '../pages/BuscaDDD';


const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/BrasilApi" element={<BrasilApi/>} />
        <Route path="/:cep/:ddd" element={<BuscaDDD/>} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;
