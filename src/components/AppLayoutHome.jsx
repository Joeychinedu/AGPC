import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Headroom from "react-headroom";

function AppLayoutHome() {
  return (
    <div>
      <Headroom>
        <Header
          bgImage="linear-gradient(to right, rgba(0, 0, 0, 0.284), rgba(0, 0, 0, 0.5))"
          color="#fff"
        />
      </Headroom>

      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayoutHome;
