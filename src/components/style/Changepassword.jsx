/*eslint-disable*/
import styled from "styled-components";

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
  font-family: "Pretendard";
  color: #191919;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin: 0;
  margin-bottom: 56px;
`;
export const EmailContainer = styled.div`
  margin: 0;
  width: 425px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const SubmitContainer = styled.div`
  position: relative;
  margin: 0;
  width: 425px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
export const CheckSubmit = styled.p`
  position: absolute;
  top: 33px;
  right: 30px;

  font-family: "Pretendard";
  color: var(--500, #808080);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
export const Text = styled.p`
  font-family: "Pretendard";
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
  font-family: "Pretendard";
  font-size: 1em;
  -webkit-appearance: none; //인풋 초기화
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;

  width: 420px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--500, #808080);
  background: #fff;

  color: #080808;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: none;
  }
`;
export const PasswordContainer = styled.div`
  margin: 0;
  width: 425px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 56px;
`;
export const ButtonContainer = styled.div`
  grid-row: 5/6;
  width: 420px;
  height: 60px;
  margin: 0 auto;
  margin-top: 20px;
`;
export const CheckPassword = styled.div`
  position: absolute;
  top: 55px;
  right: 40px;
  cursor: pointer;

  svg {
    width: 20.131px;
    height: 18px;
    stroke-width: 1.5px;
    stroke: #999;
  }
`;
export const ErrorText = styled.p`
  color: rgb(232, 124, 3);
  font-family: "Pretendard";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-top: 8px;
`;
