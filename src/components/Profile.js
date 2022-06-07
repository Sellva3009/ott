import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileDiv = styled.div`
    display: flex;
    align-items: center;
    svg {
        font-size: 30px;
        color: #ddd;
    }
    ul {
    li {
      position: relative;
      > ul {
        display: none;
        position: absolute;
        right: 5px;
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

function Profile() {
  return (
    <ProfileDiv>
      <ul>
        <li>
          <FaRegUserCircle />
          <ul>
            <li>
              <Link to="/channels">Get extra months</Link>
            </li>
            <li>
              <Link to="/languages">Watchlist</Link>
            </li>
            <li>
              <Link to="/genres">My Account</Link>
            </li>
            <li>
              <Link to="/genres">Logout</Link>
            </li>
          </ul>
        </li>
      </ul>
    </ProfileDiv>
  );
}

export default Profile;
