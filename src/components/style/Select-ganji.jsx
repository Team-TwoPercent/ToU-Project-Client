import styled from 'styled-components';

export const MainContainer = styled.div`
  min-width: 50%;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr 6fr 1fr;
  background-color: #f5f5f5;
`;
export const ServeContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;

  //grid setting
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: repeat(1, 1fr);
  gap: 50px;
`;
export const TextContainer = styled.div`
  grid-column: 1/2;
`;
export const Title = styled.h1`
  font-family: 'Pretendard';
  padding-top: 20px;
  color: #000;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  text-align: left;
  width: 275px;
`;
export const ServeTitle = styled.p`
  font-family: 'Pretendard';
  color: #878787;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 34px 0;
  width: 210px;
`;
export const Button = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0; //초기화
  padding: 0;
  overflow: visible;
  cursor: pointer;

  width: 192px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #191919;

  font-family: 'Pretendard';
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    color: #000;
    background: #fff;
    border: 1px solid #000;
  }
`;

export const CharacterContainer = styled.div`
  grid-column: 2/3;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;
export const RatImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 1/2;
  grid-row: 1/2;
`;
export const CowImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 2/3;
  grid-row: 1/2;
`;
export const TigerImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 3/4;
  grid-row: 1/2;
`;
export const RabbitImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 4/5;
  grid-row: 1/2;
`;

export const DragonImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 1/2;
  grid-row: 2/3;
`;
export const SnakeImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 2/3;
  grid-row: 2/3;
`;
export const HorseImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 3/4;
  grid-row: 2/3;
`;
export const SheepImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 4/5;
  grid-row: 2/3;
`;

export const MonkeyImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 1/2;
  grid-row: 3/4;
`;
export const ChickenImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 2/3;
  grid-row: 3/4;
`;
export const DogImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 3/4;
  grid-row: 3/4;
`;
export const PigImg = styled.img`
  width: 232px;
  height: 256px;
  grid-column: 4/5;
  grid-row: 3/4;
`;