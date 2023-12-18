import Header from "../public/Header";
import { MainContainer } from "../public/MainContainer";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';

import Rat from '../public/img/RatCharacter.png';
import Cow from '../public/img/CowCharacter.png';
import Tiger from '../public/img/TigerCharacter.png';
import Rabbit from '../public/img/RabbitCharacter.png';
import Dragon from '../public/img/DragonCharacter.png';
import Snake from '../public/img/SnakeCharacter.png';
import Horse from '../public/img/HorseCharacter.png';
import Sheep from '../public/img/SheepCharacter.png';
import Monkey from '../public/img/MonkeyCharacter.png';
import Chicken from '../public/img/ChickenCharacter.png';
import Dog from '../public/img/DogCharacter.png';
import Pig from '../public/img/PigCharacter.png';

const Btn_InActive = styled.button`
  border: none;
  box-shadow: none;
  border-radius: 0; // 초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  width: 350px;
  height: 40px;
  padding: 14px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 10px;
  background: var(--1000, #ffffff);

  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: black;
    color: white;
    border: 1px solid;
  }
`;

const Btn_Active = styled.button`
  border: none;
  box-shadow: none;
  border-radius: 0; // 초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  width: 350px;
  height: 40px;
  padding: 14px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 10px;
  background: var(--1000, #000);

  color: #ffffff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: white;
    color: black;
    border: 1px solid #000;
  }
`;

export const MyPage_Title = styled.p`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-top: 8vh;
  margin-bottom: 8vh;
`;

export const Btn_div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

export const Letters_list = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  margin-top: 5vh;
`;

export const Letters = styled.div`
  width: 780px;
  height: 60px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CharacterContainer = styled.div`
  width: 30px;
  height: 60px;
  position: absolute;
  top: 4px;
  right: 30px;
  /* background-color: red; */
`;

export const Character = styled.img`
  width: 43px;
  height: 52px;
`

export const Letters_Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding-left: 20px;
  padding-top: 12px;  
`;

export const Letters_Description = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
  margin-top: 8px;
`;

export default function MyPage() {
  const [section, setSection] = useState("received");
  
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('accessToken')){
      navigate('/Signin')
    }
  },[])

  const setSectionReceived = () => {
    setSection("received");
  };

  const setSectionSent = () => {
    setSection("sent");
  };

  if (section === "received") {
    return (
      <>
        <MainContainer>
          <Header />
          <MyPage_Title >마이페이지</MyPage_Title>
          <Btn_div>
            <Btn_InActive onClick={setSectionSent}>보낸편지함</Btn_InActive>
            <Btn_Active onClick={setSectionReceived}>받은편지함</Btn_Active>
          </Btn_div>
          <Letters_list>
          <Link to="/WatchingLetter" style={{ textDecoration: 'none' }}>
            <Letters>
              <CharacterContainer>
                <Character src={Rat}></Character>
              </CharacterContainer>
              <Letters_Title>플래너 잘 쓸 것 같은 사람은?</Letters_Title>
              <Letters_Description>말에게 보냈어</Letters_Description>
            </Letters>
          </Link>
            <Letters>
            <CharacterContainer>
                <Character src={Pig}></Character>
              </CharacterContainer>
              <Letters_Title>플래너 잘 쓸 것 같은 사은?</Letters_Title>
              <Letters_Description>말에게 보냈어</Letters_Description>
            </Letters>
          </Letters_list>
        </MainContainer>
      </>
    );
  } else if (section === "sent") {
    return (
      <>
        <MainContainer>
          <Header />
          <MyPage_Title>마이페이지</MyPage_Title>
          <Btn_div>
            <Btn_Active onClick={setSectionSent}>보낸편지함</Btn_Active>
            <Btn_InActive onClick={setSectionReceived}>받은편지함</Btn_InActive>
          </Btn_div>
          <Letters_list>
          <Link to="/SendLetter" style={{ textDecoration: 'none' }}>
            <Letters>
              <CharacterContainer>
                <Character src={Chicken}></Character>
              </CharacterContainer>
              <Letters_Title>플래너 잘 쓸 것 같은 사람은?</Letters_Title>
              <Letters_Description>말에게 보냈어</Letters_Description>
            </Letters>
          </Link>
          </Letters_list>
        </MainContainer>
      </>
    );
  }
}
