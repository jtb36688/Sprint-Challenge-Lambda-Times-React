import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import styled, { css } from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <TopBar />
      <Header />
      <Content />
    </AppContainer>
  );
}

const AppContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #f1f1f1;
color: #333;
font-family: 'PT Sans', sans-serif;
background-color: #f1f1f1;
`


export default App;
