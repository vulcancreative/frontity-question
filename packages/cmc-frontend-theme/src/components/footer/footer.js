import React from "react";
import { connect, styled } from "frontity";
import Logo from "../../images/logo";
import Twitter from "../../images/socials/twitter";
import Facebook from "../../images/socials/facebook";
import Linkedin from "../../images/socials/linkedin";

const Footer = ({ state, libraries }) => {
  const socials = state.source.get(`/menu/${state.theme.socialUrl}/`).items;
  const infos = state.source.get(`/menu/${state.theme.infosUrl}/`).items;
  const sitemap = state.source.get(`/menu/${state.theme.sitemapUrl}/`).items;
  const copyright = state.source.get(
    `/menu/${state.theme.copyrightUrl}/`
  ).items;

  return (
    <>
      <FooterTop>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 footer-widget widget-one">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <Logo stroke="#ffffff" />
                  <p className="description">{state.frontity.description}</p>
                  {/* <div className="socials">
                    <a href={socials[0].url}>
                      <Twitter fill="#323E5C"></Twitter>
                    </a>
                    <a href={socials[1].url}>
                      <Facebook fill="#323E5C"></Facebook>
                    </a>
                    <a href={socials[2].url}>
                      <Linkedin fill="#323E5C"></Linkedin>
                    </a>
                  </div> */}
                </div>
                <div className="col-12 col-lg-6">
                  <div className="infos">
                    {infos.map((x, index) => {
                      return (
                        <div key={index} className="info">
                          <p>
                            <strong>{x.title}</strong>
                          </p>
                          <p className="text">{x.post_content}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 footer-widget widget-two">
              <div className="subscribe">
                <p>
                  Signup below to stay in touch with us. Subscribe to our
                  newsletter.
                </p>

                <form
                  className="validate"
                  action="https://cmc-corp.us19.list-manage.com/subscribe/post?u=7bd8be6642ac8a00c18141192&amp;id=4d67da5491"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_blank"
                  noValidate
                >
                  <div className="mc-field-group">
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                      placeholder="Your email"
                    />
                  </div>

                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_7bd8be6642ac8a00c18141192_4d67da5491"
                      tabIndex="-1"
                      defaultValue=""
                    ></input>
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    ></input>
                  </div>
                </form>
              </div>
              <div className="sitemap">
                <p>
                  <strong>Sitemap</strong>
                </p>
                <div className="list">
                  {sitemap.map((x, index) => {
                    return (
                      <a key={index} href={x.url}>
                        {x.title}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FooterTop>
      <FooterBottom>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <span>Copyright 2020 CMC, LLC</span>
            </div>
            <div className="col-12 col-lg-6">
              <div className="policy-menu">
                {copyright.map((x, index) => {
                  return (
                    <a key={index} href={x.url}>
                      {x.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FooterBottom>
    </>
  );
};

const FooterTop = styled.div`
  background: var(--green);
  padding: 56px 0 40px;
  color: var(--white);
  @media (max-width: 768px) {
    & > .container > .row {
      flex-direction: column-reverse;
    }
  }
  a {
    color: var(--white);
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  .widget-one {
    .description {
      margin-top: 36px;
      font-size: 16px;
      line-height: 24px;
      opacity: 0.8;
    }
    .socials {
      display: flex;
      margin-top: 32px;
      @media (max-width: 768px) {
        margin-bottom: 32px;
      }
      a {
        width: 32px;
        height: 32px;
        padding: 7px;
        background-color: var(--white);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          height: 15px;
        }
        + a {
          margin-left: 24px;
        }
      }
    }
    .infos {
      margin-left: 40px;
      padding-right: 50px;
      @media (max-width: 768px) {
        margin-left: 0;
      }
      .info {
        margin-bottom: 24px;
      }
      .text {
        opacity: 0.8;
        font-size: 16px;
      }
    }
  }
  .widget-two {
    .subscribe {
      p {
        opacity: 0.8;
      }
      form {
        margin-top: 12px;
        margin-bottom: 45px;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .mc-field-group {
          width: 100%;
        }
        input {
          padding: 7px 11px 9px 11px;
          margin: 0;
          font-size: 14px;
          line-height: 24px;
          border: none;
          width: 100%;
        }
        .button {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          width: 104px;
          height: 40px;
          font-size: 14px;
          line-height: 24px;
          background-color: var(--orange);
          color: rgba(var(--white), 0.8);
          border-radius: 4px;
          border: 0;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
          font-style: normal;
          font-weight: 600;
        }
      }
    }
    .sitemap {
      @media (max-width: 768px) {
        margin-bottom: 45px;
      }
      .list {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(2, 1fr);
        grid-auto-flow: column;
        a {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  background: var(--green);
  color: var(--white);
  padding-bottom: 40px;
  @media (max-width: 768px) {
    .col-12 {
      margin-top: 20px;
    }
  }
  span {
    opacity: 0.8;
  }
  .policy-menu {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    a {
      color: var(--white);
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default connect(Footer);
