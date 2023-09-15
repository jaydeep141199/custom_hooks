import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deshboard from "./Deshboard";
import Array from "./Array";
import Storage from "./Storage";
import Validation from "./Validation";
import CopyBoard from "./CopyBoard";
import Windows from "./Windows";
import Location from "./Location";
import DarkLightMode from "./DarkLightMode";
import Api from "./Api";

const Routing = () => {
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
export default Routing;
