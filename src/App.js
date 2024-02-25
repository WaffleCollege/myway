import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

import Post from './components/post/Post';
import SignUpLogIn from "./components/SignUp_logIn/SignUpLogIn";
import Entire from "./components/entire-display/entire";
import Individual from "./components/individual-display/individual";
import {Button} from "@mui/material";

function App() {
  return (
    
    <BrowserRouter>
    <div className="app">
      <Button sx={"color:#7EC2C2;"} variant="outlined" size="large" component={Link} to="/">
        TOP
      </Button>
      <Button sx={"color:#9DDCDC;"} variant="outlined" size="large" component={Link} to="/SignUp_LogIn">
        会員登録
      </Button>
      <Button sx={"color:#9DDCDC;"} variant="outlined" size="large" component={Link} to="/post">
        新規投稿
      </Button>
      <Button sx={"color:#E67A7A;"} variant="outlined" size="large" component={Link} to="/individual-display">
        個別閲覧画面
      </Button>
        <Routes>
          <Route path = "/" element = {<Entire />}/>
          <Route path = "/SignUp_LogIn" element={<SignUpLogIn />}/>
          <Route path = "/post" element = {<Post />}/>
          <Route path = "/individual-display" element = {<Individual />}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
