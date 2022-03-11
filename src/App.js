import './App.css';
import { GlobalStyles } from './styles/global';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { MyGames } from "./pages/myGames";
import { About } from "./pages/about";
import { AppHeader } from "./shared/header";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import {firestore, auth} from './config/firebase'


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }
  return (
    <button onClick={signInWithGoogle}> Sign in with google</button>
  )
}
function SignOut() {
  return auth.currentUser & (
    <button onClick={() => auth.signOut()}>Sign out</button>
  )
}

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <GlobalStyles />
      <React.Suspense fallback={<span>Loading...</span>}>
        <AppHeader />

        <section>
          {user ? <Home /> : <SignIn />}
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myGames" element={<MyGames />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </React.Suspense>
    </>
  );
} 