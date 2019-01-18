import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map(card => (
        <Card card={card} key={card.headline}/>
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
      tab: PropTypes.string
    })
  )
};

const CardsContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: none;
flex-direction: row;
width: 100%;
margin-top: 16px;
flex-wrap: wrap;
@media (min-width: 1200px) {
    width: 1200px;
  }
`



export default Cards;
