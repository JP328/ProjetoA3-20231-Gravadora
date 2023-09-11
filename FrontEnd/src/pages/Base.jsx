import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

function Base() {
  return (
    <>
      <Outlet/>
      <Footer />
    </>
  )
}

export default Base;