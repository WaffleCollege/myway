import React from "react";
import "./LogOut.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from "../../firebase";
import pic  from "./img/logout.jpg";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebaseのログアウト関数を呼び出す
      navigate("/")
    } catch (error) {
      console.error("ログアウトエラー:", error.message);
    }
  };

  return (
    <div>
        <div className="logout-container">
            <h2>ログアウト</h2>
            <img src = {pic} className="logout-img" alt="logout img"/>
            <div className="btn"
            onClick={handleLogout}><LogoutIcon />ログアウト</div>
        </div>
    </div>
  );
}

export default Logout;
