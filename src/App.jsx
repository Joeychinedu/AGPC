import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayoutHome from "./components/AppLayoutHome";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
// import AboutHeader from "./components/AboutHeader";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Story from "./pages/Story";
import Foundation from "./pages/Foundation";
import Sermons from "./pages/Sermons";
import Give from "./pages/Give";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayoutHome />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AppLayout />}>
          {/* <Route element={<AboutHeader />}> */}
          <Route path="/about" element={<About />} />
          <Route path="/beliefs" element={<Beliefs />} />
          <Route path="/story" element={<Story />} />
          {/* </Route> */}
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/give" element={<Give />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
