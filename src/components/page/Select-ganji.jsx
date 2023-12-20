import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../public/Header';
import { BlackButton } from '../public/BlackButton';
import { WhiteButton } from '../public/WhiteButton';
import axios from 'axios';

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
      console.log(animal)
    }
    console.log(animal);
  }
  return (
    <MainContainer>
      <ServeContainer>
        <TextContainer>
          <Title>당신의 간지를 골라보세요!</Title>
          <ServeTitle>자신이 원하는 12간지 캐릭터중 하나를 골라 편지를 작성해주세요!</ServeTitle>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button>메인 화면으로 돌아가기</Button>
          </Link>
        </TextContainer>
        <CharacterContainer>
        <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <RatImg
            onMouseEnter={() => {
              setMouseon('HoverRat');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rat')}
            src={mouseon === 'HoverRat' ? HoverRat : Rat}
          ></RatImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <CowImg
            onMouseEnter={() => {
              setMouseon('HoverCow');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Ox')}
            src={mouseon === 'HoverCow' ? HoverCow : Cow}
          ></CowImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <TigerImg
            onMouseEnter={() => {
              setMouseon('HoverTiger');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Tiger')}
            src={mouseon === 'HoverTiger' ? HoverTiger : Tiger}
          ></TigerImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <RabbitImg
            onMouseEnter={() => {
              setMouseon('HoverRabbit');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rabbit')}
            src={mouseon === 'HoverRabbit' ? HoverRabbit : Rabbit}
          ></RabbitImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <DragonImg
            onMouseEnter={() => {
              setMouseon('HoverDragon');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Dragon')}
            src={mouseon === 'HoverDragon' ? HoverDragon : Dragon}
          ></DragonImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <SnakeImg
            onMouseEnter={() => {
              setMouseon('HoverSnake');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Snake')}
            src={mouseon === 'HoverSnake' ? HoverSnake : Snake}
          ></SnakeImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <HorseImg
            onMouseEnter={() => {
              setMouseon('HoverHorse');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Horse')}
            src={mouseon === 'HoverHorse' ? HoverHorse : Horse}
          ></HorseImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <SheepImg
            onMouseEnter={() => {
              setMouseon('HoverSheep');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Goat')}
            src={mouseon === 'HoverSheep' ? HoverSheep : Sheep}
          ></SheepImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <MonkeyImg
            onMouseEnter={() => {
              setMouseon('HoverMonkey');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Monkey')}
            src={mouseon === 'HoverMonkey' ? HoverMonkey : Monkey}
          ></MonkeyImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <ChickenImg
            onMouseEnter={() => {
              setMouseon('HoverChicken');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Rooster')}
            src={mouseon === 'HoverChicken' ? HoverChicken : Chicken}
          ></ChickenImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <DogImg
            onMouseEnter={() => {
              setMouseon('HoverDog');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Dog')}
            src={mouseon === 'HoverDog' ? HoverDog : Dog}
          ></DogImg>
          </Link>
          <Link to="/Writing" style={{ textDecoration: 'none' }}>
          <PigImg
            onMouseEnter={() => {
              setMouseon('HoverPig');
            }}
            onMouseLeave={() => {
              setMouseon('');
            }}
            onClick={() => handleSelect('Pig')}
            src={mouseon === 'HoverPig' ? HoverPig : Pig}
          ></PigImg>
          </Link>
        </CharacterContainer>
      </ServeContainer>
    </MainContainer>
  );
}
