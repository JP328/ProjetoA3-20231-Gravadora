import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Base() {
  return (
    <>
      <ToastContainer/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default Base;