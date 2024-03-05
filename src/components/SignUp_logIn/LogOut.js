import React from "react";
import "./LogOut.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from "@mui/material";
import { auth } from "../../firebase";

function Logout() {
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Firebaseのログアウト関数を呼び出す
    } catch (error) {
      console.error("ログアウトエラー:", error.message);
    }
  };

  return (
    <div>
        <div className="logout-container">
            <h2>ログアウト</h2>
            <Button
                variant="contained"
                className="btn"
                onClick={handleLogout}
            >
                <LogoutIcon />
                ログアウト
            </Button>
        </div>
    </div>
  );
}

export default Logout;
