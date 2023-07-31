import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Home from "../src/components/Home";
import Error from "../src/components/Error";
import Result from '../src/components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/components/Result"
import Crud from './components/Crud';
export default function App() {
  return (
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Crud />} />
   <Route path="/error" element={<Error />} />
   <Route path="/result" element={<Result />} />
   <Route path="/crud" element={<Crud />} />
  </Routes>
  </BrowserRouter>
  )
}
