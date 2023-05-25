import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Base from '../pages/Base';
import Register from '../pages/RegisterForm';
import Login from '../pages/Login';

function MainRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home/>} />
          <Route path="/cadastre-se" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;