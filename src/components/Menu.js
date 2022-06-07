import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuDiv = styled.div`
  font-size: 28px;
  color: #fff;
  cursor: pointer;
  ul {
    li {
      position: relative;
      > ul {
        display: none;
        position: absolute;
        left: 5px;
        top: 30px;
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

function Menu() {
  return (
    <MenuDiv>
      <ul>
        <li>
          <HiMenu />
          <ul>
            <li>
              <Link to="/channels">Channels</Link>
            </li>
            <li><Link to="/languages">Languages</Link></li>
            <li><Link to="/genres">Genres</Link></li>
          </ul>
        </li>
      </ul>
    </MenuDiv>
  );
}

export default Menu;
