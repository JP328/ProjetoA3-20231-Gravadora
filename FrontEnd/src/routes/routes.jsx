import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Base from '../pages/Base';
import Register from '../pages/RegisterForm';

function MainRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home/>} />
          <Route path="/cadastre-se" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;