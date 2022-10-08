import styled from "styled-components";
import AppNav from "AppNav";
import { GridContainer } from "components/Common/Containers";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Logo = styled(Link).attrs({ to: "/" })``;
const HeaderContainer = styled(GridContainer)`
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.primary};
  height: 60px;
  justify-content: space-between;
  padding-right: 0.5rem;

  .logo {
    display: block;
    height: 60px;
    pointer-events: none;
  }

  @media screen and (max-width: 600px) {
    padding-right: 0;
  }
`;

const AppHeader = () => (
  <HeaderContainer>
    <Logo>
      <img src={logo} className="logo spin" alt="App Logo" />
    </Logo>

    {/* Navigation Menu */}
    <AppNav />
  </HeaderContainer>
);

export default AppHeader;
