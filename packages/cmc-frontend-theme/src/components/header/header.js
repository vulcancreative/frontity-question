import React from "react";
import { connect, styled } from "frontity";
import Nav from "./nav";
import MobileMenu from "./menu";
import Logo from "../../images/logo";

const Header = ({ state, libraries }) => {
  return (
    <HeaderWrapper>
      <BrandContainer>
        <StyledLink href="/">
          <Logo stroke="#0E2D41" />
        </StyledLink>
        <MobileMenu />
      </BrandContainer>
      <Nav />
    </HeaderWrapper>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 16px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 16px;
  position: relative;
  z-index: 2;
`;

const BrandContainer = styled.div`
  box-sizing: border-box;
  color: var(--orange);
  width: 100%;
  @media (min-width: 993px) {
    display: flex;
    width: auto;
  }
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  span {
    font-weight: 800;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: var(--orange);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
  &:hover {
    color: var(--black);
  }
`;
