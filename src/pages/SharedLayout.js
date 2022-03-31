import { Outlet, Link } from "react-router-dom";
import Footer from "../components/ Footer";
import Navbar from "../components/Navbar";

function SharedLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout