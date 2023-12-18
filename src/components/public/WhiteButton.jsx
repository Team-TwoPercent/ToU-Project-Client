import styled from 'styled-components';

export const WhiteButton = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0; //초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  display: flex;
  width: 420px;
  height: 60px;
  padding: 14px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #000;

  background: #fff;

  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover, visited,focus{
    border: none;
    background: black;
    color: white;
  }
`;
