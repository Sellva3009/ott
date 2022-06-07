import { Link } from "react-router-dom";
import styled from 'styled-components';

const LogoDiv = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
`;

function Logo() {
  return (
    <LogoDiv>
      <Link to="/">Disnep+hotstar</Link>
    </LogoDiv>
  );
}

export default Logo;
