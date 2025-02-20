import { Route, Routes } from "react-router-dom";

// import "./commonResource/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CommnLayout from "./Components/SharedLayout/SharedLayout.jsx";
import Mac from "./Pages/Mac/Mac.jsx";
import Iphone from "./Pages/Iphone/Iphone.jsx";
import Watch from "./Pages/Watch/Watch.jsx";
import Ipad from "./Pages/Ipad/Ipad.jsx";
import Tv from "./Pages/Tv/Tv.jsx";
import Music from "./Pages/Music/Music.jsx";
import Support from "./Pages/Support/Support.jsx";
import Search from "./Pages/Search/Search.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Four04 from "./Pages/Four04/Four04.jsx";
import SharedLayout from "./Components/SharedLayout/SharedLayout.jsx";
import Main from "./Components/Main/Main.jsx";
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct.jsx";

function App() {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log(apiKey);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="mac" element={<Mac />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="iphone/:productID" element={<SingleAppleProduct />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="tv" element={<Tv />} />
        <Route path="music" element={<Music />} />
        <Route path="support" element={<Support />} />
        <Route path="search" element={<Search />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
