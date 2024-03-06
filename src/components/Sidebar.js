import React, { useState, useEffect} from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase"
import "./Sidebar.css"; // 新しく作成するCSSファイルをインポート
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';

function Sidebar() {

  //以下、ログイン状態の時にユーザー名を表示する設定
  const [user, setUser] = useState(null);
  useEffect(()=>{
    //ユーザーのログイン状態が変更されたときに呼び出されるコールバック設定
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser)
    })
    return () => {
      unsubscribe();
    };
  },[])

  return (
    <div className="sidebar">
      {/* 各リンク */}
      <div className="title">
        <h1>Way Better</h1>
        <br></br>
      </div>

      <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left" ,paddingTop:"20px",fontWeight:"bold",fontSize:"15px"}}
        variant="text"
        size="large"
        component={Link}
        to="/"
      >
        <div className="icon-wrapper"><HomeIcon/></div>
        <p>ホーム</p>
       
      </Button>

      {user? (
        //ユーザーがログインしている場合
        <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left",paddingTop:"20px",fontWeight:"bold",fontSize:"15px" }}
        variant="text"
        size="large"
        component={Link}
        to="/Logout"
      >
        <div className="icon-wrapper"><PersonIcon/></div>
        <p>{user.displayName} さん</p>
      </Button>
      ) : (
        //ユーザーがログインしていない場合
        <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left",paddingTop:"20px",fontWeight:"bold",fontSize:"15px" }}
        variant="text"
        size="large"
        component={Link}
        to="/SignUp_LogIn"
      >
        <div className="icon-wrapper"><PersonIcon/></div>
        <p>会員登録<br></br>ログイン</p>
        
      </Button>
      )}


      <Button
        sx={{ color: "#9DDCD", backgroundColor:"#E67A7A",width: "100%", textAlign: "left",fontWeight:"bold" ,fontSize:"15px",":hover" : {background: "#9DDCDC"}}}
        variant="contained"
        size="large"
        component={Link}
        // ログイン状態なら新規投稿へ、非ログイン状態ならログイン画面へ
        to={user ? "/post" : "/SignUp_LogIn"}
      >
        <EditIcon/>
        新規投稿
      </Button>
      {/* <Button
        sx={{ color: "#E67A7A", width: "100%", textAlign: "left" }}
        variant="outlined"
        size="large"
        component={Link}
        to="/individual-display"
      >
        個別閲覧画面
      </Button> */}
      
      {/* 閉じるボタン */}
    </div>
  );
}

export default Sidebar;
