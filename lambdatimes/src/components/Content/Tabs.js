import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tabs = props => {
  return (
    <TabsContainer>
      <TopicsContainer>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {props.tabs.map(tab => {
          return (
            <Tab
              key={tab}
              tab={tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          );
        })}
      </TopicsContainer>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

const TabsContainer = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 47px;
background-color: #fff;
@media (min-width: 1280px) {
    width: 1280px;
`;

const TopicsContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

// Make sure to use PropTypes to validate your types!
export default Tabs;
