import styled from 'styled-components';

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

  @media screen and (max-width: 1150px){
    font-size: 1.7rem;
  }
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
  
  @media screen and (max-width: 600px){
    width: 150px;
    height: 150px;
  }
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
  @media screen and (max-width: 600px){
    width: 150px;
    height: 150px;
  }
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
  @media screen and (max-width: 600px){
    width: 150px;
    height: 150px;
  }
`;
export const MainText = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0;
  padding: 45% 0;

  @media screen and (max-width: 600px){
    font-size: 1rem;
  }
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
  @media screen and (max-width: 600px){
    font-size: 0.75rem;
  }
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

  @media screen and (max-width: 600px){
    font-size: 0.75rem;
  }
`;