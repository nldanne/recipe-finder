import Home from './Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine.jsx';

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
      </Routes>
    </div>
  );
}

export default Pages;