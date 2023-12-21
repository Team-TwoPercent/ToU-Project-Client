import Header from '../public/Header';
import { WhiteButton } from '../public/WhiteButton';
import { Link } from 'react-router-dom';
import * as S from '../style/Main'

export default function main() {
  return (
    <S.MainContainer>
      <Header />
      <S.BodyContainer>
        <S.GridItem1>
          <Link to="/SelectUser" style={{ textDecoration: 'none' }}>
            <WhiteButton>편지쓰기</WhiteButton>
          </Link>
        </S.GridItem1>
        <S.GridItem2>
          <Link to="/MyPage" style={{ textDecoration: 'none' }}>
            <WhiteButton>편지보기</WhiteButton>
          </Link>
        </S.GridItem2>
      </S.BodyContainer>
    </S.MainContainer>
  );
}
