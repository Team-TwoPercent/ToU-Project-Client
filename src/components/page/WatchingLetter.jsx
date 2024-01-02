/*eslint-disable*/
import React from "react";
import Header from "../public/Header";
import { BlackButton } from "../public/BlackButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as S from "../style/WatchingLetter";

export default function WatchingLetter() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SIGNIN_API}/letter/received/${id}`).then((res) => {
      setTitle(res.data.data.title);
      setContent(res.data.data.content);
    });
  }, []);

  const displayContent = (content) => {
    const lines = content.split("\n");
    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <S.MainContainer>
      <Header />
      <S.BodyContainer>
        <S.Title>
          <S.TitleTo>Title.</S.TitleTo>
          <S.TitleP>{title}</S.TitleP>
        </S.Title>
        <S.Border></S.Border>
        <S.Letter>{displayContent(content)}</S.Letter>
        <S.ButtonContainer>
          <Link to="/MyPage" style={{ textDecoration: "none" }}>
            <BlackButton>확인</BlackButton>
          </Link>
        </S.ButtonContainer>
      </S.BodyContainer>
    </S.MainContainer>
  );
}
