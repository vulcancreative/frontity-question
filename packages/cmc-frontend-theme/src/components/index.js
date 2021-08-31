import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import { useTransition, animated } from "react-spring";
import BarlowSemiBoldWoff2 from "./../fonts/Barlow-SemiBold.woff2";
import BarlowSemiBoldWoff from "./../fonts/Barlow-SemiBold.woff";
import BarlowBoldWoff2 from "./../fonts/Barlow-Bold.woff2";
import BarlowBoldWoff from "./../fonts/Barlow-Bold.woff";
import BarlowMediumWoff2 from "./../fonts/Barlow-Medium.woff2";
import BarlowMediumWoff from "./../fonts/Barlow-Medium.woff";
import BarlowRegularWoff2 from "./../fonts/Barlow-Regular.woff2";
import BarlowRegularWoff from "./../fonts/Barlow-Regular.woff";
import BarlowLightWoff2 from "./../fonts/Barlow-Light.woff2";
import BarlowLightWoff from "./../fonts/Barlow-Light.woff";
import Switch from "@frontity/components/switch";
import Header from "./header/header";
import Footer from "./footer/footer";
import List from "./list";
import Post from "./post";
import Page from "./pages/page";
import HomePage from "./pages/homepage";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import BootstrapCss from "./styles/bootstrap.css";
import gutenbergStyle from "./styles/gutenberg/style.css";
import gutenbergTheme from "./styles/gutenberg/theme.css";
import getwidStyle from "./styles/getwid/style.css";
import getwidEditor from "./styles/getwid/editor.css";
import stackableFrontend from "./styles/stackable/frontend.css";
import stackableCustom from "./styles/stackable/custom.css";
import mainCss from "./styles/main.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const transitions = useTransition(state.router.link, (link) => link, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(BootstrapCss)} />
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={css(getwidStyle)} />
      <Global styles={css(getwidEditor)} />
      <Global styles={css(stackableFrontend)} />
      <Global styles={css(stackableCustom)} />
      <Global styles={css(mainCss)} />
      <Global styles={globalStyles} />
      {state.frontity.platform === "server" && (
        <Global
          styles={css`
            @font-face {
              font-family: "Barlow";
              src: url("${BarlowBoldWoff2}") format("woff2"),
                url("${BarlowBoldWoff}") format("woff");
              font-weight: bold;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Barlow";
              src: url("${BarlowSemiBoldWoff2}") format("woff2"),
                url("${BarlowSemiBoldWoff}") format("woff");
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Barlow";
              src: url("${BarlowMediumWoff2}") format("woff2"),
                url("${BarlowMediumWoff}") format("woff");
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Barlow";
              src: url("${BarlowRegularWoff2}") format("woff2"),
                url("${BarlowRegularWoff}") format("woff");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: "Barlow";
              src: url("${BarlowLightWoff2}") format("woff2"),
                url("${BarlowLightWoff}") format("woff");
              font-weight: 300;
              font-style: normal;
              font-display: swap;
            }
          `}
          supressHydrationWarning
        />
      )}

      {/* Add the header of the site. */}
      {!data.isError && (
        <HeadContainer>
          <Header />
        </HeadContainer>
      )}

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

      {transitions.map(({ item, props, key }) => {
        const data = state.source.get(item);
        return (
          <animated.div key={key} style={props}>
            <Absolute>
              <Body>
                <Switch>
                  <Loading when={data.isFetching} />
                  <List when={data.isArchive} />
                  <HomePage when={data.isHome} />
                  <Page when={data.isPage} />
                  <Post when={data.isPostType} />
                  <PageError when={data.isError} />
                </Switch>
              </Body>
            </Absolute>
          </animated.div>
        );
      })}

      {!data.isError && (
        <FooterContainer>
          <Footer />
        </FooterContainer>
      )}
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  :root {
    --orange: #f19a4a;
    --black: #111e29;
    --white: #ffffff;
    --green: #0e2d41;
    --cyan: #e8f7f5;
    --cyan-light: #d8f2ef;
  }

  body {
    margin: 0;
    color: var(--black);
    font-family: "Barlow", Helvetica, Arial, sans-serif;
    font-feature-settings: "kern";
    -webkit-font-smoothing: antialiased;
    min-height: -webkit-fill-available;
  }

  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
  }

  a,
  a:visited {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }

  p {
    line-height: 24px;
    font-size: 16px;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
  }

  .section {
    padding: 34px 0;
    @media (min-width: 992px) {
      padding: 50px 0;
    }
  }
`;

const HeadContainer = styled.div`
  border-bottom: 1px solid #dedede;
  position: relative;
  z-index: 6;
`;
const FooterContainer = styled.div``;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Absolute = styled.div`
  /* position: absolute; */
  width: 100%;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const theme = {
  sectionMixin: (radius) => `border-radius: ${radius};`,
};
