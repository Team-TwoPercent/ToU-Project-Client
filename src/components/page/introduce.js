import styled from 'styled-components';
import Header from '../public/Header';
import { MainContainer } from '../public/MainContainer';

export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
`;
export const H1 = styled.p`
  font-family: 'Pretendard';
  color: var(--1000, #000);
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;

  grid-column: 3/4;
  grid-row: 1/2;
  align-self: flex-end;
`;
export const Chap1 = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 50%;
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 0 auto;
  align-self: center;
`;
export const Chap2 = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 50%;
  grid-column: 3/4;
  grid-row: 2/3;
  margin: 0 auto;
  align-self: center;
`;
export const Chap3 = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  border-radius: 50%;
  grid-column: 4/5;
  grid-row: 2/3;
  margin: 0 auto;
  align-self: center;
`;
export const MainText = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0;
  padding: 45% 0;
`;
export const ServeText = styled.p`
  font-family: 'Pretendard';
  color: var(--700, #4d4d4d);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding-top: 40px;
  margin: 0;
`;
export const ServeText2 = styled.p`
  font-family: 'Pretendard';
  color: var(--700, #4d4d4d);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
  padding-top: 20px;
`;
export default function Introduce() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <H1>프로젝트 소개</H1>
        <Chap1>
          <MainText>Means</MainText>
          <ServeText>지금은 부족하지만 서로 부족한 부분을 채워 나가자는 의미를 가졌습니다</ServeText>
        </Chap1>
        <Chap2>
          <MainText>Members</MainText>
          <ServeText>Front-end_ 정태관, 박민준</ServeText>
          <ServeText2>Back-end _ 이예나, 강민규</ServeText2>
          <ServeText2>Designer _ 정태관</ServeText2>
          <ServeText2>AI _ 강민규</ServeText2>
        </Chap2>
        <Chap3>
          <MainText>Description </MainText>
          <ServeText>사용자가 자신이 원하는 사람을 선택해 편지를 보낼 수 있는 웹 사이트 새해와 새해를 뜻하는 12간지를 배경으로 만들어졌습니다</ServeText>
        </Chap3>
      </BodyContainer>
    </MainContainer>
  );
}
