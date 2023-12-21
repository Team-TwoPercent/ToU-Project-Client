import styled from 'styled-components';

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