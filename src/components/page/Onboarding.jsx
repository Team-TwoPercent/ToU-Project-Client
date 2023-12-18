import styled from 'styled-components';
import Header from '../public/Header';
import { MainContainer } from '../public/MainContainer';
import { BlackButton } from '../public/BlackButton';
import Cloud from '../public/img/Cloud.png';
import Magnifier from '../public/img/Magnifier.png';
import Message from '../public/img/Message.png';
import { Link } from 'react-router-dom';

export const BodyContainer = styled.div`
  width: 50%;
  height: 30%;
  margin: 0 auto;
  position: relative;
`;
export const Title = styled.div`
  position: absolute;
  width: 50%;
  margin: 0 auto;
  height: 150px;
  top: 178px;
  left: 24%;
`;
export const TitleText = styled.h1`
  margin: 0;
  text-align: center;
  font-family: 'Pretendard';
  color: #191919;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const TitleServeText = styled.p`
  padding-top: 8px;
  margin: 0;
  text-align: center;
  font-family: 'Pretendard';
  color: #898989;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const PromotionContainer = styled.div`
  margin: 0 auto;
  width: 55%;
  margin-bottom: 81px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 30px;
  grid-gap: 24px;
  place-items: center;
`;
export const Promiotion = styled.div`
  width: 260px;
  height: 301px;
  flex-shrink: 0;

  border-radius: 12px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(112, 144, 176, 0.15);

  img {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
  }
`;
export const PromiotionServeContainer = styled.div`
  width: 70%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const PromiotionText = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
  margin-top: 46px;
`;
const PromiotionImg = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
`;
export const ButtonContainer = styled.div`
  width: 25%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 81px;
`;
export default function Onboarding() {
  return (
    <MainContainer>
      <BodyContainer>
        <Title>
          <TitleText>Welcome ToU !</TitleText>
          <TitleServeText>🙋🏻‍♀️ ToU에 대해 알아볼까요?</TitleServeText>
        </Title>
      </BodyContainer>
      <PromotionContainer>
        <Promiotion>
          <PromiotionServeContainer>
            <PromiotionImg src={Message} alt="Message" />
            <PromiotionText>자신의 마음을 전할 수 있어요.</PromiotionText>
          </PromiotionServeContainer>
        </Promiotion>
        <Promiotion>
          <PromiotionServeContainer>
            <PromiotionImg src={Magnifier} alt="My Image" />
            <PromiotionText>자신이 원하는 사람을 선택해 편지를 전달할 수 있어요.</PromiotionText>
          </PromiotionServeContainer>
        </Promiotion>
        <Promiotion>
          <PromiotionServeContainer>
            <PromiotionImg src={Cloud} alt="Cloud" />
            <PromiotionText>자신이 받은 편지나 작성한 편지를 저장하여 볼 수 있어요</PromiotionText>
          </PromiotionServeContainer>
        </Promiotion>
      </PromotionContainer>
      <ButtonContainer>
        <Link to="/Signin" style={{ textDecoration: 'none' }}>
          <BlackButton>Tou시작하기</BlackButton>
        </Link>
      </ButtonContainer>
    </MainContainer>
  );
}
