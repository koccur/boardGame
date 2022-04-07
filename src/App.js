import './App.css';
import { GlobalStyles } from './styles/global';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { MyBooks } from "./pages/myBooks";
import { About } from "./pages/about";
import { AppHeader } from "./shared/header";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <React.Suspense fallback={<span>Loading...</span>}>
        {/* <AppHeader /> */}
        <MyBooks/>
        {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/myBooks" element={<MyBooks />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </React.Suspense>
    </>
  );
} 