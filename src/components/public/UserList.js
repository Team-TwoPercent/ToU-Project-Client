import styled from 'styled-components';
import User from './img/User.png';
import { Link } from 'react-router-dom';

export const UserContainer = styled.div`
  width: 140px;
  height: 180px;
  display: flex;
  padding: 24px 34px;
  align-items: flex-start;
  gap: 8px;

  border-radius: 8px;
  background: #fff;
  position: relative;
`;
export const UserProfile = styled.img`
  margin: 0 auto;
  width: 80px;
  height: 80px;
`;
export const UserName = styled.p`
  margin: 0;
  color: #000;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.44px;

  position: absolute;
  top: 116px;
  left: 75px;
`;
export const WhiteButton = styled.button`
  position: absolute;
  left: 30px;
  top: 160px;
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0; //초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  padding: 10px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--200, #ccc);

  background: #fff;

  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover,
  visited,
  focus {
    border: none;
    background: black;
    color: white;
  }
`;

export default function UserList() {
  return (
    <>
      <UserContainer>
        <UserProfile src={User}></UserProfile>
        <UserName>이예나</UserName>
        <Link to="/SelectGanji" style={{ textDecoration: 'none' }}>
          <WhiteButton>선택하기</WhiteButton>
        </Link>
      </UserContainer>
    </>
  );
}
