import React from "react";
import { styled, connect } from "frontity";
import FourohfourBG from "./../images/fourohfour-background.jpg";
import FourohfourFG from "./../images/fourohfour-foreground";
import Link from "./link";

const description404 = (
  <>
    We couldn't find the page you were looking for.
    <Link link="/">
      Go Home
    </Link>
  </>
);

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://community.frontity.org"> let us know </a> or try refreshing
    your browser.
  </>
);

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Oops! Something went wrong";
  const title404 = "Oops!";

  return (
    <Container>
      <Wrapper>
        <Title>{data.is404 ? title404 : title}</Title>
        <Description>{data.is404 ? description404 : description}</Description>
      </Wrapper>
      <FourohfourFG />
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  position: relative;
  background-image: url(${FourohfourBG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  svg {
    max-width: 100%;
    width: 100%;
    height: 100%;
    z-index: 0;
    @media (max-width: 820px) and (orientation: portrait){
      transform: scale(1.5);
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 43px;
  width: 100%;
  text-align: center;
  z-index: 1;
  @media (max-width: 767px){
    transform: scale(.8);
    bottom: 20px;
  }

  @media (max-width: 376px){
    bottom: 0;
  }
  h1 {
    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    color: var(--white);
  }
  a {
    background-color: var(--green);
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;
    color: var(--white);
    border-radius: 19px;
    padding: 12px;
    width: 200px;
    text-align: center;
    height: 50px;
    margin: 32px auto 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 4em;
`;

const Description = styled.div`
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: var(--white);
  text-align: center;
`;
