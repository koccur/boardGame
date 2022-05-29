import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { MyFriends } from "./pages/myFriends";
import { MyGames } from "./pages/myGames";
import { AppHeader } from "./shared/header";
import { GlobalStyles } from './styles/global';

export const App = function() {
  return (
    <>
      <GlobalStyles />
      <React.Suspense fallback={<span>Loading...</span>}>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="myFriends" element={<MyFriends />} />
            <Route path="/myGames" element={<MyGames />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </React.Suspense>
    </>
  );
} 