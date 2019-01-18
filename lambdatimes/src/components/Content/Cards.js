import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => (
        <Card card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      imageUrl: PropTypes.string,
      author: PropTypes.string
    })
  )
};


export default Cards;
