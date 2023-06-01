import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Base from '../pages/Base';
import Register from '../pages/RegisterForm';
import Login from '../pages/Login';
import User from '../pages/User';
import AdminHome from '../pages/Admin';
import Admin from '../pages/AdminUsersInfos';

function MainRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home/>} />
          <Route path="/cadastre-se" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/usuario" element={<User/>} />
          <Route path="/admin-home" element={<AdminHome/>} />
          <Route path="/admin-user-infos" element={<Admin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;