/*eslint-disable*/
import Header from "../public/Header";
import { MainContainer } from "../public/MainContainer";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "../style/MyPage";
import styled from "styled-components";
import * as I from "../public/img/index";

const zodiacSignImages = {
  Rat: I.GanjiCh.RatCh,
  Ox: I.GanjiCh.CowCh,
  Tiger: I.GanjiCh.TigerCh,
  Rabbit: I.GanjiCh.RabbitCh,
  Dragon: I.GanjiCh.DragonCh,
  Snake: I.GanjiCh.SnakeCh,
  Horse: I.GanjiCh.HorseCh,
  Goat: I.GanjiCh.SheepCh,
  Monkey: I.GanjiCh.MonkeyCh,
  Rooster: I.GanjiCh.ChickenCh,
  Dog: I.GanjiCh.DogCh,
  Pig: I.GanjiCh.PigCh,
};

export default function MyPage() {
  const [section, setSection] = useState("sent");
  const [sender, setSender] = useState([]);
  const [recipient, setRecipient] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/Signin");
    } else {
      axios.get(`${process.env.REACT_APP_SIGNIN_API}/letter/sent`, config).then((res) => setSender(res.data.data));

      axios.get(`${process.env.REACT_APP_SIGNIN_API}/letter/received`, config).then((res) => setRecipient(res.data.data));
    }
  }, []);

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
          <S.MyPageTitle>마이페이지</S.MyPageTitle>
          <S.Btndiv>
            <BtnInActive onClick={setSectionSent}>보낸편지함</BtnInActive>
            <BtnActive onClick={setSectionReceived}>받은편지함</BtnActive>
          </S.Btndiv>
          <S.Letterslist>
            {recipient.map((receive) => (
              <Link to={`/WatchingLetter/${receive.id}`} style={{ textDecoration: "none" }}>
                <S.Letters>
                  <S.CharacterContainer>
                    <S.Character src={zodiacSignImages[receive.zodiacSign]}></S.Character>
                  </S.CharacterContainer>
                  <S.LettersTitle>{receive.title}</S.LettersTitle>
                  <S.LettersDescription>{receive.username}</S.LettersDescription>
                </S.Letters>
              </Link>
            ))}
          </S.Letterslist>
        </MainContainer>
      </>
    );
  } else if (section === "sent") {
    return (
      <>
        <MainContainer>
          <Header />
          <S.MyPageTitle>마이페이지</S.MyPageTitle>
          <S.Btndiv>
            <BtnActive onClick={setSectionSent}>보낸편지함</BtnActive>
            <BtnInActive onClick={setSectionReceived}>받은편지함</BtnInActive>
          </S.Btndiv>
          <S.Letterslist>
            {sender.map((send) => (
              <Link to={`/SendLetter/${send.id}`} style={{ textDecoration: "none" }}>
                <S.Letters>
                  <S.CharacterContainer>
                    <S.Character src={zodiacSignImages[send.zodiacSign]}></S.Character>
                  </S.CharacterContainer>
                  <S.LettersTitle>{send.title}</S.LettersTitle>
                  <S.LettersDescription>{send.reseivername}</S.LettersDescription>
                </S.Letters>
              </Link>
            ))}
          </S.Letterslist>
        </MainContainer>
      </>
    );
  }
}

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
