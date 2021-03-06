import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = props => {

  return (
    <VariableTab selectedTab={props.selectedTab} tab={props.tab}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </VariableTab>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

const VariableTab = styled.div`
${props =>
  (props.selectedTab === props.tab)
    ? css`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    `
    : css`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
      `}
`



export default Tab;
