import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

import Post from './components/post/Post';
import SignUpLogIn from "./components/SignUp_logIn/SignUpLogIn";
import Entire from "./components/entire-display/entire";


function App() {
  return (
    <BrowserRouter>
     <div className="app">
        <Link to="/">entire</Link>
          <br />
        <Link to="/SignUp_logIn">会員登録・ログイン</Link>
        <br />
       <Link to ="/post">新規投稿</Link>
        
        <Routes>
          <Route path = "/" element = {<Entire />}/>
          <Route path = "/SignUp_LogIn" element={<SignUpLogIn />}/>
          <Route path = "/post" element = {<Post />}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
