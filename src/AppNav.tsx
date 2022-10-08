import ListView from "components/Common/ListView";
import ConnectWallet from "components/Reach/ConnectWallet";
import { Link } from "react-router-dom";
import routes from "routes/index";
import styled from "styled-components";

const Menu = styled.nav`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

const AppNav = () => (
  <Menu className="app-menu">
    {/* App routes */}
    <ListView
      row
      className="menu-items slide-down-fade-in"
      data={routes.filter(({ isPrivate }) => !isPrivate)}
      itemText={({ path, text }: any) => (
        <Link to={path} title={text}>
          {text}
        </Link>
      )}
    />

    <ConnectWallet />
  </Menu>
);

export default AppNav;
