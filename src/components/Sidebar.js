import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // 新しく作成するCSSファイルをインポート
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* 各リンク */}
      <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left" ,paddingTop:"20px",fontWeight:"bold",fontSize:"15px"}}
        variant="text"
        size="large"
        component={Link}
        to="/"
      >
         <HomeIcon/>
        ホーム
       
      </Button>
      <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left",paddingTop:"20px",fontWeight:"bold",fontSize:"15px" }}
        variant="text"
        size="large"
        component={Link}
        to="/SignUp_LogIn"
      >
        <PersonIcon/>
        会員登録
       
        ログイン
      </Button>

      <Button
        sx={{ color: "#9DDCDC", width: "100%", textAlign: "left",padding:"20px" ,fontWeight:"bold",fontSize:"15px"}}
        variant="text"
        size="large"
        component={Link}
        to="/User"
      >
        <BookmarkIcon/>
        お気に入り
      </Button>

      <Button
        sx={{ color: "#9DDCD", backgroundColor:"#E67A7A",width: "100%", textAlign: "left",fontWeight:"bold" ,fontSize:"15px",":hover" : {background: "#9DDCDC"}}}
        variant="contained"
        size="large"
        component={Link}
        to="/post"
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
