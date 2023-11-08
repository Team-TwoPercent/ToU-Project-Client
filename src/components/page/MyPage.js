import Header from "../public/Header";
import { MainContainer } from "../public/MainContainer";
import { useState } from "react";
import styled from "styled-components";

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
`;

export const Letters_Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 20px;
  margin-top: 12px;
  margin-bottom: 0px;
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
          <MyPage_Title>마이페이지</MyPage_Title>
          <Btn_div>
            <Btn_InActive onClick={setSectionSent}>보낸편지함</Btn_InActive>
            <Btn_Active onClick={setSectionReceived}>받은편지함</Btn_Active>
          </Btn_div>
          <Letters_list>
            <Letters>
              <Letters_Title>플래너 잘 쓸 것 같은 사람은?</Letters_Title>
              <Letters_Description>말에게 보냈어</Letters_Description>
            </Letters>
            <Letters>
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
            <Letters>
              <Letters_Title>플래너 잘 쓸 것 같은 사람은?</Letters_Title>
              <Letters_Description>말에게 보냈어</Letters_Description>
            </Letters>
          </Letters_list>
        </MainContainer>
      </>
    );
  }
}
