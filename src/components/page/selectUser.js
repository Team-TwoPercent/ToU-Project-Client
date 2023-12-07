import styled from 'styled-components';
import Header from '../public/Header';
import { MainContainer } from '../public/MainContainer';
import UserList from '../public/UserList';

export const BodyContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 2.2fr 1fr;
  overflow-x: hidden;
`;
export const SelectUserContainer = styled.div`
  margin-top: 64px;
  grid-column: 2/3;
`;
export const ServeHeaderContainer = styled.div`
  height: 80px;
  display: flex;
  position: relative;
`;
export const Title = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.28px;

  margin: 0;
  margin-top: 10px;
`;
export const TitleInput = styled.input`
  position: absolute;
  right: 30px;
  width: 285px;
  margin-top: 0;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 5px;

  color: #000;
  font-family: 'Pretendard';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const SerchIcon = styled.svg`
  display: inline-flex;
  padding: 4px;
  align-items: flex-start;
  gap: 8px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 3px;
  top: 8px;
  cursor: pointer;
`;
export const Border = styled.hr`
  position: absolute;
  top: 41px;
  right: 1px;
  width: 320px;
  height: 1px;
  border: 1px solid rgba(128, 136, 8, 0);
  background: #808080;
  margin: 1px;
`;
export const SelectUserBodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function SelectUser() {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <SelectUserContainer>
          <ServeHeaderContainer>
            <Title>받을 인간</Title>
            <TitleInput type="text"></TitleInput>
            <SerchIcon xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.92308 1.07692C3.24662 1.07692 1.07692 3.24662 1.07692 5.92308C1.07692 8.59953 3.24662 10.7692 5.92308 10.7692C7.26145 10.7692 8.47225 10.2274 9.34982 9.34982C10.2274 8.47225 10.7692 7.26145 10.7692 5.92308C10.7692 3.24662 8.59953 1.07692 5.92308 1.07692ZM0 5.92308C0 2.65185 2.65185 0 5.92308 0C9.1943 0 11.8462 2.65185 11.8462 5.92308C11.8462 7.36459 11.3306 8.6865 10.4748 9.71332L13.8423 13.0808C14.0526 13.2911 14.0526 13.632 13.8423 13.8423C13.632 14.0526 13.2911 14.0526 13.0808 13.8423L9.71332 10.4748C8.6865 11.3306 7.36459 11.8462 5.92308 11.8462C2.65185 11.8462 0 9.1943 0 5.92308Z"
                fill="black"
              />
            </SerchIcon>
            <Border></Border>
          </ServeHeaderContainer>
          <SelectUserBodyContainer>
            <UserList></UserList>
          </SelectUserBodyContainer>
        </SelectUserContainer>
      </BodyContainer>
    </MainContainer>
  );
}
