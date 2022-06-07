import Menu from './Menu';
import styled from 'styled-components';
import Logo from './Logo';
import MenuFilter from './MenuFilter';
import Search from './Search';
import Upgrade from './Upgrade';
import Profile from './Profile';

const HeaderDiv = styled.header`
  background: #0c111b;
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 75px; 
  z-index: 99;
  .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
`;

function Header() {
    return (
      <HeaderDiv className="header">
        <div className="container">
            <Menu />
            <Logo />
            <MenuFilter />
            <Search />
            <Upgrade />
            <Profile />
        </div>
      </HeaderDiv>
    );
}

export default Header;