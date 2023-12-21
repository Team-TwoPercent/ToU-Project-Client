import { MainContainer } from '../public/MainContainer';
import { BlackButton } from '../public/BlackButton';
import Cloud from '../public/img/Cloud.png';
import Magnifier from '../public/img/Magnifier.png';
import Message from '../public/img/Message.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from '../style/Onboarding';

export default function Onboarding() {
  return (
    <MainContainer>
      <S.BodyContainer>
        <S.Title>
          <S.TitleText>Welcome ToU !</S.TitleText>
          <S.TitleServeText>🙋🏻‍♀️ ToU에 대해 알아볼까요?</S.TitleServeText>
        </S.Title>
      </S.BodyContainer>
      <S.PromotionContainer>
        <S.Promiotion>
          <S.PromiotionServeContainer>
            <PromiotionImg src={Message} alt="Message" />
            <PromiotionText>자신의 마음을 전할 수 있어요.</PromiotionText>
          </S.PromiotionServeContainer>
        </S.Promiotion>
        <S.Promiotion>
          <S.PromiotionServeContainer>
            <PromiotionImg src={Magnifier} alt="My Image" />
            <PromiotionText>자신이 원하는 사람을 선택해 편지를 전달할 수 있어요.</PromiotionText>
          </S.PromiotionServeContainer>
        </S.Promiotion>
        <S.Promiotion>
          <S.PromiotionServeContainer>
            <PromiotionImg src={Cloud} alt="Cloud" />
            <PromiotionText>자신이 받은 편지나 작성한 편지를 저장하여 볼 수 있어요</PromiotionText>
          </S.PromiotionServeContainer>
        </S.Promiotion>
      </S.PromotionContainer>
      <S.ButtonContainer>
        <Link to="/Signin" style={{ textDecoration: 'none' }}>
          <BlackButton>Tou시작하기</BlackButton>
        </Link>
      </S.ButtonContainer>
    </MainContainer>
  );
}

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
