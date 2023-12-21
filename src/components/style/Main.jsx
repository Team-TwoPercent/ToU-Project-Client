import styled from 'styled-components';

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