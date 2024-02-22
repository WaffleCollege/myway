import React, { useState } from 'react'
import "./SignUpLogIn.module.css";

import EmailIcon from '@mui/icons-material/Email';
import UserIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Key';

function SignUpLogIn() {

  const [action,setAction] = useState("新規登録")

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
            <input type='text'placeholder='ユーザー名'/>
          </div>
        }
        
        <div className='input'>
        <div className='img'>
          <EmailIcon/> 
        </div>
        <input type='email' placeholder='メールアドレス'/>
        </div>

        <div className='input'>
        <div className='img'>
          <PasswordIcon/>
        </div>
        <input type='password' placeholder='パスワード'/>
        </div>
      </div>

      {action==="新規登録"?<div></div>:
        <div className='forget-password'>パスワードを忘れてしまった場合：<span>クリックして下さい</span>
        </div>
      }

      
      <div className='submit-container'>
        <div className={action==="ログイン"?"submit gray":"submit"}
          onClick={()=>{setAction("新規登録")}}>登録する</div>
        <div className={action==="新規登録"?"submit gray":"submit"}
          onClick={()=>{setAction("ログイン")}}>ログイン</div>
      </div>
    </div>
  );
}

export default SignUpLogIn
