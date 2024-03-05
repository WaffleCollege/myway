import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Entire from "./components/entire-display/entire";
import SignUpLogIn from "./components/signUp_logIn/SignUpLogIn";
import Logout from "./components/signUp_logIn/LogOut";
import Post from "./components/post/Post";
import Individual from "./components/individual-display/individual";
import UserProfile from "./components/User-display/User";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* サイドバー */}
        <Sidebar />

        {/* コンテンツ */}
        <div className="content">
          {/* ルーティングの部分 */}
          <Routes>
            {/* ルート */}
            <Route path="/" element={<Entire />} />
            <Route path="/SignUp_LogIn" element={<SignUpLogIn />} />
            <Route path="/post" element={<Post />} />
            <Route path="/individual-display" element={<Individual />} />
            <Route path="/User" element={<UserProfile />} />
            <Route path="/LogOut" element={<Logout />} />
          </Routes>
        </div>

        {/* ボトムバー */}
        <div className="bottom-bar">
          <BottomBar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
