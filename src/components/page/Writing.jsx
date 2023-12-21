import Header from '../public/Header';
import { BlackButton } from '../public/BlackButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import * as S from '../style/Writing';

export default function Writing(props) {
  const MAX_CONTENT_LENGTH = 250;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const senderName = localStorage.getItem('username');
  const receiverName = localStorage.getItem('receiverName');
  const id = parseInt(localStorage.getItem('id'));
  const animal = localStorage.getItem('animal');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDetail = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= MAX_CONTENT_LENGTH) {
      // 최대 글자 수 이내인 경우에만 내용 업데이트
      setContent(inputText);
    }
  };
  const handleButton = () => {
    const token = localStorage.getItem('accessToken');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      axios.post(
        `${process.env.REACT_APP_SIGNIN_API}/letter/write`,
        {
          username: senderName,
          receiverId: id,
          title: title,
          content: content,
          zodiacSign: animal,
        },
        config // 설정된 헤더 포함하여 요청 보내기
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.MainContainer>
      <Header />
      <S.BodyContainer>
        <S.Title>
          <S.TitleTo>Title</S.TitleTo>
          <S.TitleInput type="text" placeholder="제목을 입력하세요" value={title} onChange={handleTitle}></S.TitleInput>
        </S.Title>
        <S.Border></S.Border>
        <S.Letter maxLength={MAX_CONTENT_LENGTH} placeholder="내용을 입력하세요." value={content} onChange={handleDetail}></S.Letter>
        <S.ButtonContainer>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <BlackButton onClick={handleButton}>보내기</BlackButton>
          </Link>
        </S.ButtonContainer>
      </S.BodyContainer>
    </S.MainContainer>
  );
}
