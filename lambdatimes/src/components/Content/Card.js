import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Card = props => {
  return (
    <CardContainer>
      <HeadlineContainer>{props.card.headline}</HeadlineContainer>
      <AuthorContainer>
        <ImgContainer>
          <img src={props.card.img} alt='Avatar of Doggo Columnist' />
        </ImgContainer>
        <span>By {props.card.author}</span>
      </AuthorContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    imageUrl: PropTypes.string,
    author: PropTypes.string,
    tab: PropTypes.string
  })
};

const CardContainer = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: space-between;
align-items: none;
flex-direction: column;
background-color: #fff;
width: 380px;
margin-bottom: 16px;
padding: 24px;
`

const HeadlineContainer = styled.div`
font-size: 25px;
font-family: Didot, serif;
`

const AuthorContainer = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
margin-top: 15px;
span {
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}
`

const ImgContainer = styled.div`
padding-right: 10px;
border-right: 1px solid lightgrey;
height: 40px;
img {
  width: 40px;
}
`





export default Card;
