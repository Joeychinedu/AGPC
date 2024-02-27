import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";

function AppLayoutHome() {
  return (
    <div>
      <Headroom pinStart={1000}>
        <Header bgColor="#fff" color="#777" />
      </Headroom>

      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayoutHome;
