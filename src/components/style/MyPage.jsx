import styled from 'styled-components';

export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
`;

export const MyPageTitle = styled.p`
  font-family: Pretendard;
  font-size: 1.875rem;
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
`;

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
