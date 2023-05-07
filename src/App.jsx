import Calendar from 'react-calendar';
import './App.css';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import Auth from '@pages/Auth';
import { Routes, Route } from 'react-router-dom';
import User from '@pages/User';

const REST_API_KEY = '75796b33aac62e190e50bcc064cce581';
const REDIRECT_URI = 'http://localhost:5173/oauth/kakao/callback';
const KAKAO_REDIRECT_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route
        path="/login"
        element={<LoginPage KAKAO_REDIRECT_URI={KAKAO_REDIRECT_URI} />}
      />
      <Route path="/user" element={<User />} />
      <Route path="/oauth/kakao/callback" element={<Auth />} />
    </Routes>
  );
}

export default App;
