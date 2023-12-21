import styled from 'styled-components';
import Header from '../public/Header';
import { MainContainer } from '../public/MainContainer';
import UserList from '../public/UserList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../style/SelectUser'

export default function SelectUser() {
  const [getData, setGetData] = useState([])
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_SIGNIN_API}/users`)
      .then((res) => setGetData(res.data.users))
  }, []);
  const loginName = localStorage.getItem('username')
  return (
    <MainContainer>
      <Header />
      <S.BodyContainer>
        <S.SelectUserContainer>
          <S.ServeHeaderContainer>
            <S.Title>받는 사람</S.Title>
          </S.ServeHeaderContainer>
          <S.SelectUserBodyContainer>
        {getData.filter(user => user.username !== loginName).map(filteredUser => (
            <UserList key={filteredUser.id} id={filteredUser.id} name={filteredUser.name}></UserList>
          ))}
            <UserList></UserList>
          </S.SelectUserBodyContainer>
        </S.SelectUserContainer>
      </S.BodyContainer>
    </MainContainer>
  );
}
