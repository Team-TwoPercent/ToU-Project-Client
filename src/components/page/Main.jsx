import Header from '../public/Header';
import { WhiteButton } from '../public/WhiteButton';
import { Link, useNavigate } from 'react-router-dom';
import * as S from '../style/Main';
import { useEffect } from 'react';

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/Onboarding');
    }
  }, []);
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
