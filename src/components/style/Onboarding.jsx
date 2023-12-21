import styled from 'styled-components';

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
export const ButtonContainer = styled.div`
  width: 25%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 81px;
`;
