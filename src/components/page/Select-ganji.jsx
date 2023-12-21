import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as S from '../style/Select-ganji'

//import img file
import Rat from '../public/img/Rat.png';
import Cow from '../public/img/Cow.png';
import Tiger from '../public/img/Tiger.png';
import Rabbit from '../public/img/Rabbit.png';
import Dragon from '../public/img/Dragon.png';
import Snake from '../public/img/Snake.png';
import Horse from '../public/img/Horse.png';
import Sheep from '../public/img/Sheep.png';
import Monkey from '../public/img/Monkey.png';
import Chicken from '../public/img/Chicken.png';
import Dog from '../public/img/Dog.png';
import Pig from '../public/img/Pig.png';

//import hover img file
import HoverRat from '../public/img/RatHoverImg.png';
import HoverCow from '../public/img/CowHoverImg.png';
import HoverTiger from '../public/img/TigerHoverImg.png';
import HoverRabbit from '../public/img/RabbitHoverImg.png';
import HoverDragon from '../public/img/DragonHoverImg.png';
import HoverSnake from '../public/img/SnakeHoverImg.png';
import HoverHorse from '../public/img/HorseHoverImg.png';
import HoverSheep from '../public/img/SheepHoverImg.png';
import HoverMonkey from '../public/img/MonkeyHoverImg.png';
import HoverChicken from '../public/img/ChickenHoverImg.png';
import HoverDog from '../public/img/DogHoverImg.png';
import HoverPig from '../public/img/PigHoverImg.png';
import { useState } from 'react';

export default function Gangi() {
  const [mouseon, setMouseon] = useState('true');
  const username = localStorage.getItem('username');
  const handleSelect = (animal) =>{
    localStorage.setItem('animal', animal)
    try{
      axios.post(`${process.env.REACT_APP_SIGNIN_API}/letter/select_12`, {
        "username" : username,
        "zodiacSign": animal,

      })
    } catch(key){
    }
  }
  return (
    <S.MainContainer>
      <S.ServeContainer>
        <S.TextContainer>
          <S.Title>당신의 간지를 골라보세요!</S.Title>
          <S.ServeTitle>자신이 원하는 12간지 캐릭터중 하나를 골라 편지를 작성해주세요!</S.ServeTitle>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <S.Button>메인 화면으로 돌아가기</S.Button>
          </Link>
        </S.TextContainer>
        <S.CharacterContainer>
        <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.RatImg
            onMouseEnter={() => {
              setMouseon('HoverRat');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rat')}
            src={mouseon === 'HoverRat' ? HoverRat : Rat}
          ></S.RatImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.CowImg
            onMouseEnter={() => {
              setMouseon('HoverCow');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Ox')}
            src={mouseon === 'HoverCow' ? HoverCow : Cow}
          ></S.CowImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.TigerImg
            onMouseEnter={() => {
              setMouseon('HoverTiger');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Tiger')}
            src={mouseon === 'HoverTiger' ? HoverTiger : Tiger}
          ></S.TigerImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.RabbitImg
            onMouseEnter={() => {
              setMouseon('HoverRabbit');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rabbit')}
            src={mouseon === 'HoverRabbit' ? HoverRabbit : Rabbit}
          ></S.RabbitImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.DragonImg
            onMouseEnter={() => {
              setMouseon('HoverDragon');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Dragon')}
            src={mouseon === 'HoverDragon' ? HoverDragon : Dragon}
          ></S.DragonImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.SnakeImg
            onMouseEnter={() => {
              setMouseon('HoverSnake');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Snake')}
            src={mouseon === 'HoverSnake' ? HoverSnake : Snake}
          ></S.SnakeImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.HorseImg
            onMouseEnter={() => {
              setMouseon('HoverHorse');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Horse')}
            src={mouseon === 'HoverHorse' ? HoverHorse : Horse}
          ></S.HorseImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.SheepImg
            onMouseEnter={() => {
              setMouseon('HoverSheep');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Goat')}
            src={mouseon === 'HoverSheep' ? HoverSheep : Sheep}
          ></S.SheepImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.MonkeyImg
            onMouseEnter={() => {
              setMouseon('HoverMonkey');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Monkey')}
            src={mouseon === 'HoverMonkey' ? HoverMonkey : Monkey}
          ></S.MonkeyImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.ChickenImg
            onMouseEnter={() => {
              setMouseon('HoverChicken');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rooster')}
            src={mouseon === 'HoverChicken' ? HoverChicken : Chicken}
          ></S.ChickenImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.DogImg
            onMouseEnter={() => {
              setMouseon('HoverDog');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Dog')}
            src={mouseon === 'HoverDog' ? HoverDog : Dog}
          ></S.DogImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <S.PigImg
            onMouseEnter={() => {
              setMouseon('HoverPig');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Pig')}
            src={mouseon === 'HoverPig' ? HoverPig : Pig}
          ></S.PigImg>
          </Link>
        </S.CharacterContainer>
      </S.ServeContainer>
    </S.MainContainer>
  );
}
