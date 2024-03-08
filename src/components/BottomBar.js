import React, { useState, useEffect} from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebase"
import "./BottomBar.css"; // 新しく作成するCSSファイルをインポート
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';



function BottomBar() {

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
    <div className="bottombar">
      {/* 各リンク */}
      <Button
        sx={{ 
            color: "#fff", width: "100%", textAlign: "left" ,paddingTop:"20px",fontWeight:"bold",fontSize:"15px"}}
        variant="text"
        size="large"
        component={Link}
        to="/"
      >
         <HomeIcon /> 
         {/* アイコンサイズを指定 */}
       
      </Button>

      {user? (
        //ユーザーがログインしている場合
        <Button
        sx={{ color: "#fff", width: "100%", textAlign: "left",paddingTop:"20px",fontWeight:"bold",fontSize:"15px" }}
        variant="text"
        size="large"
        component={Link}
        to="/Logout"
      >
        <PersonIcon/>
        {user.displayName} さん
      </Button>
      ) : (
        //ユーザーがログインしていない場合
        <Button
        sx={{ color: "#fff", width: "100%", textAlign: "left",paddingTop:"20px",fontWeight:"bold",fontSize:"15px" }}
        variant="text"
        size="large"
        component={Link}
        to="/SignUp_LogIn"
      >
        <PersonIcon/>
      </Button>
      )}

      {/* <Button
        sx={{ color: "#fff", width: "100%", textAlign: "left",padding:"20px" ,fontWeight:"bold",fontSize:"15px"}}
        variant="text"
        size="large"
        component={Link}
        to="/User"
      >
        <BookmarkIcon/>
      </Button> */}

      <Button
        sx={{ color: "#9DDCD", backgroundColor:"#E67A7A",width: "100%", textAlign: "left",fontWeight:"bold" ,fontSize:"15px",":hover" : {background: "#9DDCDC"}}}
        variant="contained"
        size="large"
        component={Link}
        // ログイン状態なら新規投稿へ、非ログイン状態ならログイン画面へ
        to={user ? "/post" : "/SignUp_LogIn"}
      >
        <EditIcon/>
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

export default BottomBar;
