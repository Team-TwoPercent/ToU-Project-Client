import styled from 'styled-components';
import Header from '../public/Header';
import { BlackButton } from '../public/BlackButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const MainContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;
export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 2fr 1.2fr 0.5fr repeat(5, 2fr);
`;
export const Title = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
`;
export const TitleTo = styled.p`
  width: 44px;
  height: 35px;
  justify-self: center;
  align-self: center;
  margin: 0;
  padding-right: 20px;

  font-family: 'Pretendard';
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TitleInput = styled.input`
  margin-top: 10px;
  justify-self: center;
  align-self: center;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 5px;

  color: #000;
  font-family: 'Pretendard';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Border = styled.hr`
  grid-column: 2/3;
  grid-row: 3/4;
  width: 846px;
  height: 1px;
  border: 1px solid rgba(128, 136, 8, 0);
  background: #d9d9d9;
  margin: 1px;
`;
export const Letter = styled.textarea`
  grid-column: 2/3;
  grid-row: 4/7;

  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 5px;

  color: #000;
  font-family: 'Pretendard';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ButtonContainer = styled.div`
  grid-column: 2/3;
  grid-row: 8/9;
`;

export default function Writing() {
  const[title, setTitle] = useState('')
  const[detail, setDetail] = useState('')

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleDetail = (e) => {
    setDetail(e.target.value)
  }
  const handleButton  = () => {
    try{
      axios.post(`${process.env.REACT_APP_SIGNIN_API}/letter/write`, {
        title,
        detail,
      })
    } catch(e){
      console.log(e)
    }
  }
  
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <Title>
          <TitleTo>To.</TitleTo>
          <TitleInput type="text" placeholder="받는 사람을 입력하세요" value={title} onChange={handleTitle}></TitleInput>
        </Title>
        <Border></Border>
        <Letter placeholder="내용을 입력하세요." value={detail} onChange={handleDetail}></Letter>
        <ButtonContainer>
        <Link to="/MyPage" style={{ textDecoration: 'none' }}>
          <BlackButton onClick={handleButton}>보내기</BlackButton>
          </Link>
        </ButtonContainer>
      </BodyContainer>
    </MainContainer>
  );
}
