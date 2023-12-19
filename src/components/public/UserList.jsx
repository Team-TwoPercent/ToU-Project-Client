import styled from 'styled-components';
import User from './img/User.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const UserContainer = styled.div`
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 24px 34px;
  gap: 8px;
  border-radius: 8px;
  background: #fff;
  position: relative;
`;
export const UserProfile = styled.img`
  margin: 0 auto;
  width: 80px;
  height: 80px;
`;
export const UserName = styled.p`
  margin: 0;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.44px;
  text-align: center;
`;
export const WhiteButton = styled.button`
  position: absolute;
  left: 30px;
  top: 160px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0; //초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--200, #ccc);

  background: #fff;

  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover,
  visited,
  focus {
    border: none;
    background: black;
    color: white;
  }
`;

export default function UserList(props) {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  useEffect(() => {
    if(!localStorage.getItem('accessToken')){
      navigate('/Signin')
    }
  },[])


  const handleSelectUser = async () =>{
      console.log(username)
    try{
      await axios.post(`${process.env.REACT_APP_SIGNIN_API}/letter/select_human`, {
        "username" : username,
        "receiverId" : 2
      })
    } catch(e){
      console.log(e)
    }
  }
  return (
    <>
      <UserContainer>
        <UserProfile src={User}></UserProfile>
        <UserName>{props.name}</UserName>
        <Link to="/SelectGanji" style={{ textDecoration: 'none' }}>
          <WhiteButton onClick={handleSelectUser}>선택하기</WhiteButton>
        </Link>
      </UserContainer>
    </>
  );
}
