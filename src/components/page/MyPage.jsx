import Header from "../public/Header";
import { MainContainer } from "../public/MainContainer";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Rat from '../public/img/RatCharacter.png';
import Ox from '../public/img/CowCharacter.png';
import Tiger from '../public/img/TigerCharacter.png';
import Rabbit from '../public/img/RabbitCharacter.png';
import Dragon from '../public/img/DragonCharacter.png';
import Snake from '../public/img/SnakeCharacter.png';
import Horse from '../public/img/HorseCharacter.png';
import Goat from '../public/img/SheepCharacter.png';
import Monkey from '../public/img/MonkeyCharacter.png';
import Rooster from '../public/img/ChickenCharacter.png';
import Dog from '../public/img/DogCharacter.png';
import Pig from '../public/img/PigCharacter.png';

export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
`;

const BtnInActive = styled.button`
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

const BtnActive = styled.button`
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

export const MyPageTitle = styled.p`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-top: 8vh;
  margin-bottom: 8vh;
`;

export const Btndiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

export const Letterslist = styled.div`
  display: flex;
  flex-direction: column-reverse;
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

export const LettersTitle = styled.p`
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

export const LettersDescription = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 20px;
  margin-top: 8px;
`;

const zodiacSignImages = {
  Rat: Rat,
  Ox: Ox,
  Tiger: Tiger,
  Rabbit: Rabbit,
  Dragon: Dragon,
  Snake: Snake,
  Horse: Horse,
  Goat: Goat,
  Monkey: Monkey,
  Rooster: Rooster,
  Dog: Dog,
  Pig: Pig,
};

export default function MyPage() {
  const [section, setSection] = useState("sent");
  const [sender, setSender] = useState([])
  const [recipient, setRecipient] = useState([])

  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
  };

  useEffect(() => {
    if(!localStorage.getItem('accessToken')){
      navigate('/Signin')
    }
    else{
      axios.get(`${process.env.REACT_APP_SIGNIN_API}/letter/sent`, config)
      .then((res) => setSender(res.data.data))


      axios.get(`${process.env.REACT_APP_SIGNIN_API}/letter/received`, config)
      .then((res) => setRecipient(res.data.data))

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
          <MyPageTitle >마이페이지</MyPageTitle>
          <Btndiv>
            <BtnInActive onClick={setSectionSent}>보낸편지함</BtnInActive>
            <BtnActive onClick={setSectionReceived}>받은편지함</BtnActive>
          </Btndiv>
          <Letterslist>
        {recipient.map(receive => (
          <Link to={`/WatchingLetter/${receive.id}`} style={{ textDecoration: 'none' }}>
            <Letters>
              <CharacterContainer>
                <Character src={zodiacSignImages[receive.zodiacSign]}></Character>
              </CharacterContainer>
              <LettersTitle>{receive.title}</LettersTitle>
              <LettersDescription>{receive.username}</LettersDescription>
            </Letters>
          </Link>    
        ))}
          </Letterslist>
        </MainContainer>
      </>
    );
  } else if (section === "sent") {
    return (
      <>
        <MainContainer>
          <Header />
          <MyPageTitle>마이페이지</MyPageTitle>
          <Btndiv>
            <BtnActive onClick={setSectionSent}>보낸편지함</BtnActive>
            <BtnInActive onClick={setSectionReceived}>받은편지함</BtnInActive>
          </Btndiv>
          <Letterslist>

          {sender.map(send => (
          <Link to={`/SendLetter/${send.id}`} style={{ textDecoration: 'none' }}>
            <Letters>
              <CharacterContainer>
                <Character src={zodiacSignImages[send.zodiacSign]}></Character>
              </CharacterContainer>
              <LettersTitle>{send.title}</LettersTitle>
              <LettersDescription>{send.reseivername}</LettersDescription>
            </Letters>
          </Link>    
        ))}
          </Letterslist>
        </MainContainer>
      </>
    );
  }
}
