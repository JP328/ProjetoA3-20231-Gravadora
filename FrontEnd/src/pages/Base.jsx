import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

function Base() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  )
}

export default Base;