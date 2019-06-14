import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

export const Header = () => {
  return (
    <div className="header">
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}
const Date = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
`
const 

// export default Header;