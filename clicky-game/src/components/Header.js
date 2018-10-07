import React from "react";

// Calculator renders the Math component 4 times with different props
const Header = (props) => {
  return (
  <div>
    Clicks Count: {props.clicks} | 
    Top number of Clicks: {props.topClicks}
  </div>
  )
};

export default Header;
