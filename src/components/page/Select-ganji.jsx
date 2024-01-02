/*eslint-disable*/
import { Link } from "react-router-dom";
import axios from "axios";
import * as S from "../style/Select-ganji";
import * as I from "../public/img/index";
import { useState } from "react";

export default function Gangi() {
  const [mouseon, setMouseon] = useState("true");
  const username = localStorage.getItem("username");
  const handleSelect = (animal) => {
    localStorage.setItem("animal", animal);
    try {
      axios.post(`${process.env.REACT_APP_SIGNIN_API}/letter/select_12`, {
        username: username,
        zodiacSign: animal,
      });
    } catch (key) {}
  };
  return (
    <S.MainContainer>
      <S.ServeContainer>
        <S.TextContainer>
          <S.Title>당신의 간지를 골라보세요!</S.Title>
          <S.ServeTitle>자신이 원하는 12간지 캐릭터중 하나를 골라 편지를 작성해주세요!</S.ServeTitle>
          <Link to="/" style={{ textDecoration: "none" }}>
            <S.Button>메인 화면으로 돌아가기</S.Button>
          </Link>
        </S.TextContainer>
        <S.CharacterContainer>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.RatImg
              onMouseEnter={() => {
                setMouseon("HoverRat");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Rat")}
              src={mouseon === "HoverRat" ? I.HoverImages.HoverRat : I.Images.Rat}
            ></S.RatImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.CowImg
              onMouseEnter={() => {
                setMouseon("HoverCow");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Ox")}
              src={mouseon === "HoverCow" ? I.HoverImages.HoverCow : I.Images.Cow}
            ></S.CowImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.TigerImg
              onMouseEnter={() => {
                setMouseon("HoverTiger");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Tiger")}
              src={mouseon === "HoverTiger" ? I.HoverImages.HoverTiger : I.Images.Tiger}
            ></S.TigerImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.RabbitImg
              onMouseEnter={() => {
                setMouseon("HoverRabbit");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Rabbit")}
              src={mouseon === "HoverRabbit" ? I.HoverImages.HoverRabbit : I.Images.Rabbit}
            ></S.RabbitImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.DragonImg
              onMouseEnter={() => {
                setMouseon("HoverDragon");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Dragon")}
              src={mouseon === "HoverDragon" ? I.HoverImages.HoverDragon : I.Images.Dragon}
            ></S.DragonImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.SnakeImg
              onMouseEnter={() => {
                setMouseon("HoverSnake");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Snake")}
              src={mouseon === "HoverSnake" ? I.HoverImages.HoverSnake : I.Images.Snake}
            ></S.SnakeImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.HorseImg
              onMouseEnter={() => {
                setMouseon("HoverHorse");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Horse")}
              src={mouseon === "HoverHorse" ? I.HoverImages.HoverHorse : I.Images.Horse}
            ></S.HorseImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.SheepImg
              onMouseEnter={() => {
                setMouseon("HoverSheep");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Goat")}
              src={mouseon === "HoverSheep" ? I.HoverImages.HoverSheep : I.Images.Sheep}
            ></S.SheepImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.MonkeyImg
              onMouseEnter={() => {
                setMouseon("HoverMonkey");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Monkey")}
              src={mouseon === "HoverMonkey" ? I.HoverImages.HoverMonkey : I.Images.Monkey}
            ></S.MonkeyImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.ChickenImg
              onMouseEnter={() => {
                setMouseon("HoverChicken");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Rooster")}
              src={mouseon === "HoverChicken" ? I.HoverImages.HoverChicken : I.Images.Chicken}
            ></S.ChickenImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.DogImg
              onMouseEnter={() => {
                setMouseon("HoverDog");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Dog")}
              src={mouseon === "HoverDog" ? I.HoverImages.HoverDog : I.Images.Dog}
            ></S.DogImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: "none" }}>
            <S.PigImg
              onMouseEnter={() => {
                setMouseon("HoverPig");
              }}
              onMouseLeave={() => {
                setMouseon("");
              }}
              onClick={() => handleSelect("Pig")}
              src={mouseon === "HoverPig" ? I.HoverImages.HoverPig : I.Images.Pig}
            ></S.PigImg>
          </Link>
        </S.CharacterContainer>
      </S.ServeContainer>
    </S.MainContainer>
  );
}
