import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BlackButton } from '../public/BlackButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 5fr 1fr;
  background: #fff;
`;
export const LoginContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
`;
export const Title = styled.p`
  font-family: 'Pretendard';
  color: #191919;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  text-align: center;
  margin-bottom: 100px;
`;
export const IdContainer = styled.div`
  margin: 0;
  width: 420px;
  margin: 0 auto;
  margin-bottom: 24px;
`;
export const Text = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding-bottom: 8px;
`;
export const Input = styled.input`
  border-radius: 4px;
  box-shadow: none;
  font-family: 'Pretendard';
  font-size: 1em;
  -webkit-appearance: none; //인풋 초기화
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  width: 420px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--500, #808080);
  background: #fff;

  font-family: 'Pretendard';
  color: #080808;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;
export const PasswordContainer = styled.div`
  margin: 0;
  width: 420px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20px;
`;
export const CheckPassword = styled.div`
  position: absolute;
  top: 55px;
  right: 40px;
  cursor: pointer;

  svg {
    width: 20.131px;
    height: 18px;
    stroke-width: 1.5px;
    stroke: #999;
  }
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  width: 420px;
  padding-bottom: 80px;
  margin: 0 auto;
`;
export const CheckBox = styled.input`
  appearance: none;
  border: 0;
  border-radius: 2px;
  width: 15px;
  height: 16px;
  background-color: #fff;
  border: 1px solid var(--500, #808080);
  margin: 0;
  margin-top: 2px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='000' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fff;
    border: 1px solid var(--500, #808080);
  }
`;
export const CheckBoxText = styled.p`
  font-family: 'Pretendard';
  color: var(--500, #808080);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-left: 12px;
`;
export const ForgetPassword = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 150px;
  margin: 0 auto;
  padding: 0px;
  padding-bottom: 20px;
  padding-top: 40px;

  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;
export const ForgetPassword2 = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 201px;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;
export const ErrorText = styled.p`
  font-family: 'Pretendard';
  color: rgb(232, 124, 3);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-top: 8px;
`;
export const ErrorText2 = styled.p`
  font-family: 'Pretendard';
  color: rgb(232, 124, 3);
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-top: 8px;
  padding-bottom: 80px;
`;

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
    const regex = /^[a-z]+[a-z0-9]{5,19}$/;
    if (regex.test(username)) {
      setUserNameValid(true);
    } else {
      setUserNameValid(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{7,25}$/);
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
      console.log(username)
      localStorage.setItem('accessToken', data);
      localStorage.setItem('username', username);
      navigate('/mypage');
      console.log(data)
    } catch (e) {
      console.log(e);
      alert("올바른 아이디와 비밀번호를 입력해주세요.")
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
    <BodyContainer>
      <LoginContainer>
        <Title>Login ToU</Title>
        <IdContainer>
          <Text>아이디</Text>
          <Input type="text" value={username} onChange={handleName} />
          <ErrorText>{!usernameValid && username.length > 0 && <div>올바른 아이디 입력해주세요.</div>}</ErrorText>
        </IdContainer>
        <PasswordContainer>
          <Text>비밀번호</Text>
          <Input type={changePw} maxlength="16" value={password} onChange={handlePassword}></Input>
          <CheckPassword onClick={checkPassword}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M2.97996 6.223C2.04442 7.32718 1.34778 8.6132 0.93396 10C2.22596 14.338 6.24396 17.5 11 17.5C11.993 17.5 12.953 17.362 13.863 17.105M5.22796 4.228C6.94058 3.09781 8.94804 2.49682 11 2.5C15.756 2.5 19.773 5.662 21.065 9.998C20.3568 12.3673 18.8369 14.4115 16.772 15.772M5.22796 4.228L1.99996 1M5.22796 4.228L8.87796 7.878M16.772 15.772L20 19M16.772 15.772L13.122 12.122C13.4006 11.8434 13.6216 11.5127 13.7723 11.1486C13.9231 10.7846 14.0007 10.3945 14.0007 10.0005C14.0007 9.6065 13.9231 9.21636 13.7723 8.85235C13.6216 8.48834 13.4006 8.1576 13.122 7.879C12.8434 7.6004 12.5126 7.3794 12.1486 7.22863C11.7846 7.07785 11.3945 7.00025 11.0005 7.00025C10.6065 7.00025 10.2163 7.07785 9.85231 7.22863C9.4883 7.3794 9.15756 7.6004 8.87896 7.879M13.121 12.121L8.87996 7.88"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </CheckPassword>
          <ErrorText2>{!passwordValid && password.length > 0 && <div>비밀번호는 8~16자 사이여야 합니다.</div>}</ErrorText2>
        </PasswordContainer>
        <BlackButton disabled={notAllow} onClick={handleLogin}>
          로그인하기
        </BlackButton>
        <Link to="/ChangePassword" style={{ textDecoration: 'none' }}>
          <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
        </Link>
        <Link to="/Signup" style={{ textDecoration: 'none' }}>
          <ForgetPassword2>계정이 없나요? ToU에 가입하기</ForgetPassword2>
        </Link>
      </LoginContainer>
    </BodyContainer>
  );
}
