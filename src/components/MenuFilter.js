import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavDiv = styled.nav`
  min-width: 300px;
  ${"" /* border: 1px solid white; */}
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    li {
      position: relative;
      margin-bottom: -10px;
      padding-bottom: 10px;
      a {
        color: #fff;
        text-decoration: none;
      }
      > ul {
        display: none;
        position: absolute;
        left: 0px;
        top: 25px;
        width: 150px;
        background: #28344a;
        padding: 10px 0;
        a {
          font-size: 14px;
          display: block;
          text-decoration: none;
          color: #fff;
          padding: 5px 15px;
          background: none;
          &:hover {
              background: #0c111b;
          }
        }
      }
      &:hover {
        > ul {
          display: block;
        }
      }
    }
  }
`;

function MenuFilter() {
  return (
    <NavDiv>
      <ul>
        <li>
          <Link to="/tv">TV</Link>
          <ul>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
          <ul>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
          <ul>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/disneyplus">Disney+</Link>
          <ul>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
          <ul>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </li>
      </ul>
    </NavDiv>
  );
}

export default MenuFilter;
