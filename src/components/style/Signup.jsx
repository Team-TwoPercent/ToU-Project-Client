import styled from 'styled-components';

export const BodyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 5fr 1fr;
  background: #fff;
`;
export const LoginContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
`;
export const Title = styled.p`
  font-family: 'Pretendard';
  color: #191919;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;
export const NameContainer = styled.div`
  margin: 0;
  width: 425px;
  margin: 0 auto;
  margin-bottom: 24px;
`;
export const IdContainer = styled.div`
  margin: 0;
  width: 425px;
  margin: 0 auto;
  margin-bottom: 24px;
`;
export const Text = styled.p`
  font-family: 'Pretendard';
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding-bottom: 8px;
`;
export const Input = styled.input`
  border-radius: 4px;
  box-shadow: none;
  font-family: 'Pretendard';
  font-size: 1em;
  -webkit-appearance: none; //인풋 초기화
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  width: 400px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--500, #808080);
  background: #fff;

  font-family: 'Pretendard';
  color: #080808;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;
export const PasswordContainer = styled.div`
  margin: 0;
  width: 425px;
  margin: 0 auto;
  position: relative;
`;
export const CheckPassword = styled.div`
  position: absolute;
  top: 55px;
  right: 40px;
  cursor: pointer;
  position: absolute;

  svg {
    width: 20.131px;
    height: 18px;
    stroke-width: 1.5px;
    stroke: #999;
  }
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  width: 420px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 78px;
`;
export const CheckBox = styled.input`
  appearance: none;
  border: 0;
  border-radius: 2px;
  width: 15px;
  height: 16px;
  background-color: #fff;
  border: 1px solid var(--500, #808080);
  margin: 0;
  margin-top: 2px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='000' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 150% 150%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #fff;
    border: 1px solid var(--500, #808080);
  }
`;
export const CheckBoxText = styled.p`
  color: var(--500, #808080);
  font-family: 'Pretendard';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding-left: 12px;
`;
export const ErrorText = styled.p`
  color: rgb(232, 124, 3);
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-top: 8px;
`;
