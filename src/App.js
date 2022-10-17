import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Mounted from "./pages/Mounted";
import Nopage from "./pages/Nopage";
import Product from "./pages/product";
import Profile from "./pages/Profile";
import Streams from "./pages/Streams";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="browse" element={<Browse />} />
          <Route path="details" element={<Details />} />
          <Route path="streams" element={<Streams />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="mounted" element={<Mounted/>} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
