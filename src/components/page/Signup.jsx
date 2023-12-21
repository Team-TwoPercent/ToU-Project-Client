import styled from 'styled-components';
import { BlackButton } from '../public/BlackButton';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import * as S from '../style/Signup'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [changePw, setChangePw] = useState('password');
  const [usernameValid, setUserNameValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const navigate = useNavigate();

  const userNameChange = (e) => {
    setUsername(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
    const regex = /^.{3,16}$/;
    if (regex.test(name)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
    const regex = new RegExp(/^.{7,16}$/);
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  const checkPassword = (e) => {
    if (changePw === 'password') {
      setChangePw('text');
    } else setChangePw('password');
  };
  const SignupButton = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_SIGNIN_API}/join`, {
        username: name,
        password,
        name: username,
      });
      navigate('/Signin');
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert('중복된 아이디나 이름이 있습니다.');
      } else {
        alert('회원가입에 실패했습니다.');
      }
    }
  };

  return (
    <S.BodyContainer>
      <S.LoginContainer>
        <S.Title>Welcome ToU</S.Title>
        <S.NameContainer>
          <S.Text>이름</S.Text>
          <S.Input onChange={userNameChange} value={username}></S.Input>
        </S.NameContainer>
        <S.IdContainer>
          <S.Text>아이디</S.Text>
          <S.Input onChange={nameChange} value={name}></S.Input>
          <S.ErrorText>{!nameValid && name.length > 0 && <div>아이디는 4~16자 사이여야 합니다.</div>}</S.ErrorText>
        </S.IdContainer>
        <S.PasswordContainer>
          <S.Text>비밀번호</S.Text>
          <S.Input type={changePw} onChange={passwordChange} value={password} maxlength="36"></S.Input>
          <S.ErrorText>{!passwordValid && password.length > 0 && <div>비밀번호는 8~16자 사이여야 합니다.</div>}</S.ErrorText>
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
        </S.PasswordContainer>
        <S.CheckBoxContainer></S.CheckBoxContainer>
        <BlackButton onClick={SignupButton}>가입하기</BlackButton>
      </S.LoginContainer>
    </S.BodyContainer>
  );
}
