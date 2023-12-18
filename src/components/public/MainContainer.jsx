import styled from 'styled-components';

export const MainContainer = styled.div`
  // Layout
  min-width: 50%;
  width: 100vw;
  height: 100vh;

  // Style
  background-color: #f5f5f5;
`;

export default function Header() {
  return (
    <>
      <MainContainer></MainContainer>
    </>
  );
}
