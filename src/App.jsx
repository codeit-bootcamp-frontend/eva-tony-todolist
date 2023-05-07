<<<<<<< HEAD
import './App.css';

import './App.css';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import Layout from '@pages/Layout';
import Auth from '@pages/Auth';
import { Routes, Route } from 'react-router-dom';
import User from '@pages/User';
=======
import Calendar from "react-calendar";
import "./App.css";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import Layout from "@pages/Layout";
import Auth from "@pages/Auth";
import { Routes, Route } from "react-router-dom";
import User from "@pages/User";
import Temp from "@components/Temp";

import PetalAnimation from "@components/PetalAnimation";

>>>>>>> 7c1df049119bbd87c84db9f82ec3c89be4eb5da6
const CLIENT_URL = import.meta.env.VITE_CLIENT_URL;

const REST_API_KEY = '75796b33aac62e190e50bcc064cce581';
const REDIRECT_URI = `${CLIENT_URL}oauth/kakao/callback`;
const KAKAO_REDIRECT_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function App() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "100%",
          // height: "100%",
          zIndex: -1,
          backgroundColor: "black",
        }}
      >
        <Temp />
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/login"
            element={<LoginPage KAKAO_REDIRECT_URI={KAKAO_REDIRECT_URI} />}
          />
          <Route path="/user" element={<User />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          {/* <Route path="/temp" element={<Temp />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
