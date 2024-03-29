import React, { useState } from 'react'
import "./SignUpLogIn.css";

import EmailIcon from '@mui/icons-material/Email';
import UserIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Key';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function SignUpLogIn() {
  const [action,setAction] = useState("新規登録")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const navigate = useNavigate();

  const handleSignUp = async() => {
    try {
      const authObj = auth;
      // ユーザー作成
      await createUserWithEmailAndPassword(authObj, email, password);
      const user = authObj.currentUser;
      //ユーザー名を追加情報として更新
      await updateProfile(user, { displayName: username });
      // 会員登録成功時の処理
      console.log("会員登録成功")
      navigate("/post")
    } catch (error) {
      alert("無効なユーザー情報です "+error.message)
    }
  };

  const handleLogin = async() => {
    try {
      const authObj = auth;
      await signInWithEmailAndPassword(authObj, email, password);
      // ログイン成功時の処理
      console.log("ログイン成功")
      navigate("/post")
    } catch (error) {
      alert("無効なユーザー情報です "+error.message)
    }
  };

  return (
    <div className='container' id="signup-wrapper">
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {action === "ログイン"?<div></div>:
          <div className='input'>
            <div className='img'>
              <UserIcon/>
            </div>
            <input 
              type='text'
              placeholder='ユーザー名'
              onChange = {(e) => setUsername(e.target.value)}
              />
          </div>
        }
          <div className='input'>
          <div className='img'>
            <EmailIcon/> 
          </div>
          <input 
            type='email' 
            placeholder='メールアドレス'
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='input'>
          <div className='img'>
            <PasswordIcon/>
          </div>
          <input 
            type='password' 
            placeholder='パスワード'
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
        
      </div>

      

      
      <div className='submit-container'>
        <div className={action==="ログイン"?"submit gray":"submit"}
          onClick={()=> action === "新規登録" ? handleSignUp() : setAction("新規登録")}>登録する</div>
        <div className={action==="新規登録"?"submit gray":"submit"}
          onClick={()=> action === "ログイン" ? handleLogin() : setAction("ログイン")}>ログイン</div>
      </div>
      
    </div>
  );
}

export default SignUpLogIn;
