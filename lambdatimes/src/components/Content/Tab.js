import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  const selectedcheck = () => {
    if (props.selectedTab === props.tab) {
      return "tab active-tab";
    } else {
      return "tab";
    }
  };
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={selectedcheck()}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
