import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UpgradeLink = styled.div`
  a {
    color: #1f80e0;
    border: 1px solid #1f80e0;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 3px;
    display: block;
  }
`;

function Upgrade() {
  return (
    <UpgradeLink>
      <Link to="/get-started" className="upgrade">
        Upgrade
      </Link>
    </UpgradeLink>
  );
}

export default Upgrade;
