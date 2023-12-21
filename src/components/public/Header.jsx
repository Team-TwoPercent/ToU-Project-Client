import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #cfcfcf;
  background: #fff;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: 38px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }
`;
export const LogoText = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  @media screen and (max-width: 560px){
    font-size: 1.75rem;
  }
`;

export const HeaderNavigation = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  
`;
export const List = styled.li`
  font-family: 'Pretendard';
  color: var(--600, #666);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    font-weight: 700;
    color: var(--900, #1a1a1a);
    cursor: pointer;
  }
  @media screen and (max-width: 560px){
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  border: none;
  box-shadow: none;
  border-radius: 0; //초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 8px;
  border: 1px solid #000;
  background: transparent;

  font-family: 'Pretendard';
  margin: 0;
  color: var(--800, #333);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    border: none;
    background: black;
    color: white;
  }
  @media screen and (max-width: 560px){
    font-size: 0.75rem;
    padding: 5px 15px;
  }
`;


export default function Header() {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem('accessToken');
    setLogin(false)
    alert("로그아웃 되었습니다.")
    navigate('/')
  }
  return (
    <>
      <HeaderContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LogoContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path
                d="M2 12.0588V23.5C2 25.7091 3.79086 27.5 6 27.5H26C28.2091 27.5 30 25.7091 30 23.5V12.0588L18.0964 19.3841C16.8108 20.1752 15.1892 20.1753 13.9036 19.3841L2 12.0588Z"
                fill="#0F172A"
              />
              <path
                d="M30 9.71044V9.5C30 7.29086 28.2091 5.5 26 5.5H6C3.79086 5.5 2 7.29086 2 9.5V9.71044L14.9518 17.6808C15.5946 18.0764 16.4054 18.0764 17.0482 17.6808L30 9.71044Z"
                fill="#0F172A"
              />
            </svg>
            <LogoText>ToU</LogoText>
          </LogoContainer>
        </Link>
        <HeaderNavigation>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <List>홈</List>
          </Link>
          <Link to="/introduce" style={{ textDecoration: 'none' }}>
            <List>프로젝트 소개</List>
          </Link>
          <Link to="/SelectUser" style={{ textDecoration: 'none' }}>
            <List>편지쓰기</List>
          </Link>
          <Link to="/MyPage" style={{ textDecoration: 'none' }}>
            <List>마이페이지</List>
          </Link>
        </HeaderNavigation>
        <div>
          {!localStorage.getItem('accessToken') ? (
            <Link to="/Signin" style={{ textDecoration: 'none' }}>
              <Button>로그인</Button>
            </Link>
          ) : (
            <Button onClick={handleLogout}>로그아웃</Button>
          )}
        </div>
        
      </HeaderContainer>
    </>
  );
}
