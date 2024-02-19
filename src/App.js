import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

import Post from './components/post/Post';
import SignUpLogIn from "./components/SignUp_logIn/SignUpLogIn";

function App() {
  return (
    <BrowserRouter>
     <div className="app">
        <Link to="/">Post</Link>
          <br />
        <Link to="/SignUp_logIn">会員登録・ログイン</Link>
        
        
        <Routes>
          <Route path = "/" element = {<Post />}/>
          <Route path = "/SignUp_LogIn" element={<SignUpLogIn />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
