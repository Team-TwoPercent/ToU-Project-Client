import *as S from '../style/Introduce'
import Header from '../public/Header';
import { MainContainer } from '../public/MainContainer';


export default function Introduce() {
  return (
    <MainContainer>
      <Header />
      <S.BodyContainer>
        <S.H1>프로젝트 소개</S.H1>
        <S.Chap1>
          <S.MainText>Means</S.MainText>
          <S.ServeText>지금은 부족하지만 서로 부족한 부분을 채워 나가자는 의미를 가졌습니다</S.ServeText>
        </S.Chap1>
        <S.Chap2>
          <S.MainText>Members</S.MainText>
          <S.ServeText>Front-end_ 정태관, 박민준</S.ServeText>
          <S.ServeText2>Back-end _ 이예나, 강민규</S.ServeText2>
          <S.ServeText2>Designer _ 정태관</S.ServeText2>
          <S.ServeText2>AI _ 강민규</S.ServeText2>
        </S.Chap2>
        <S.Chap3>
          <S.MainText>Description </S.MainText>
          <S.ServeText>사용자가 자신이 원하는 사람을 선택해 편지를 보낼 수 있는 웹 사이트 새해와 새해를 뜻하는 12간지를 배경으로 만들어졌습니다</S.ServeText>
        </S.Chap3>
      </S.BodyContainer>
    </MainContainer>
  );
}
