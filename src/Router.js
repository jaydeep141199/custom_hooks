
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deshboard from "./components/Deshboard";
import Array from "./components/Array";
import Storage from "./components/Storage";
import Validation from "./components/Validation";
import CopyBoard from "./components/CopyBoard";
import Windows from "./components/Windows";
import Location from "./components/Location";
import DarkLightMode from "./components/DarkLightMode";
import Api from "./components/Api";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Deshboard />}></Route>
          <Route path="/array" element={<Array />}></Route>
          <Route path="/storage" element={<Storage />}></Route>
          <Route path="/validation" element={<Validation />}></Route>
          <Route path="/copy" element={<CopyBoard />}></Route>
          <Route path="/window" element={<Windows />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/mode" element={<DarkLightMode />}></Route>
          <Route path="/api" element={<Api />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
