import React, { useState, useEffect } from 'react';
import { BlackButton } from '../public/BlackButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from '../style/Signin';

export default function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValid, setUserNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [changePw, setChangePw] = useState('password');

  const navigate = useNavigate();

  const handleName = (e) => {
    setUserName(e.target.value);
    const regex = /^.{3,16}$/;
    if (regex.test(username)) {
      setUserNameValid(true);
    } else {
      setUserNameValid(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = new RegExp(/^.{7,16}$/);
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_SIGNIN_API}/login`, {
        username,
        password,
      });
      localStorage.setItem('accessToken', data);
      localStorage.setItem('username', username);
      navigate('/');
    } catch (e) {
      alert('올바른 아이디와 비밀번호를 입력해주세요.');
    }
  };

  const checkPassword = (e) => {
    if (changePw === 'password') {
      setChangePw('text');
    } else setChangePw('password');
  };
  useEffect(() => {
    if (usernameValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [usernameValid, passwordValid]);
  return (
    <S.BodyContainer>
      <S.LoginContainer>
        <S.Title>Login ToU</S.Title>
        <S.IdContainer>
          <S.Text>아이디</S.Text>
          <S.Input type="text" value={username} onChange={handleName} />
          <S.ErrorText>{!usernameValid && username.length > 0 && <div>올바른 아이디 입력해주세요.</div>}</S.ErrorText>
        </S.IdContainer>
        <S.PasswordContainer>
          <S.Text>비밀번호</S.Text>
          <S.Input type={changePw} maxlength="16" value={password} onChange={handlePassword}></S.Input>
          <S.CheckPassword onClick={checkPassword}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M2.97996 6.223C2.04442 7.32718 1.34778 8.6132 0.93396 10C2.22596 14.338 6.24396 17.5 11 17.5C11.993 17.5 12.953 17.362 13.863 17.105M5.22796 4.228C6.94058 3.09781 8.94804 2.49682 11 2.5C15.756 2.5 19.773 5.662 21.065 9.998C20.3568 12.3673 18.8369 14.4115 16.772 15.772M5.22796 4.228L1.99996 1M5.22796 4.228L8.87796 7.878M16.772 15.772L20 19M16.772 15.772L13.122 12.122C13.4006 11.8434 13.6216 11.5127 13.7723 11.1486C13.9231 10.7846 14.0007 10.3945 14.0007 10.0005C14.0007 9.6065 13.9231 9.21636 13.7723 8.85235C13.6216 8.48834 13.4006 8.1576 13.122 7.879C12.8434 7.6004 12.5126 7.3794 12.1486 7.22863C11.7846 7.07785 11.3945 7.00025 11.0005 7.00025C10.6065 7.00025 10.2163 7.07785 9.85231 7.22863C9.4883 7.3794 9.15756 7.6004 8.87896 7.879M13.121 12.121L8.87996 7.88"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </S.CheckPassword>
          <S.ErrorText2>{!passwordValid && password.length > 0 && <div>비밀번호는 8~16자 사이여야 합니다.</div>}</S.ErrorText2>
        </S.PasswordContainer>
        <BlackButton disabled={notAllow} onClick={handleLogin}>
          로그인하기
        </BlackButton>
        <Link to="/Signup" style={{ textDecoration: 'none' }}>
          <S.ForgetPassword>계정이 없나요? ToU에 가입하기</S.ForgetPassword>
        </Link>
      </S.LoginContainer>
    </S.BodyContainer>
  );
}
