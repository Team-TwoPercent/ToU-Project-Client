import styled from 'styled-components';
import Header from '../public/Header';
import { BlackButton } from '../public/BlackButton';
import { WhiteButton } from '../public/WhiteButton';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;
export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
`;
export const GridItem1 = styled.div`
  grid-column: 2/3;
  grid-row: 4/5;
  justify-self: center;
  align-self: center;
`;
export const GridItem2 = styled.div`
  grid-column: 2/3;
  grid-row: 5/6;
  justify-self: center;
  align-self: center;
`;

export default function main() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <GridItem1>
          <Link to="/SelectUser" style={{ textDecoration: 'none' }}>
            <WhiteButton>편지쓰기</WhiteButton>
          </Link>
        </GridItem1>
        <GridItem2>
          <Link to="/MyPage" style={{ textDecoration: 'none' }}>
            <WhiteButton>편지보기</WhiteButton>
          </Link>
        </GridItem2>
      </BodyContainer>
    </MainContainer>
  );
}
