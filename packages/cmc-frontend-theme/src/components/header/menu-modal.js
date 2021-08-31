import React from "react";
import { styled, connect } from "frontity";
import caretIcon from "./../../images/icons/caret.png";

const Menu = ({data, currentPageLink}) => {
  return (
    
      <NavWrapper>
        {data.map(({url, classes, target, title, child_items, attr_title }, index) => {
          const isCurrentPage = currentPageLink === url;
          const isNoRedirect = attr_title === "no-redirect";
          return (
          <NavItem key={index} className={child_items ? "has-child" : ""}>
            <a 
              className={`${isCurrentPage ? "active " : ""}${classes[0] ? classes[0] : ""} ${isNoRedirect ? "no-redirect" : null}`} 
              href={url ? url : null} 
              target={target ? target : "_self"}
            >
              {classes[0] ? <span className="link-icon"></span> : null}
              {title}
            </a>
            {child_items && <Menu data={child_items} currentPageLink={currentPageLink} />}
          </NavItem>);
        })}
      </NavWrapper>
    
  );
}

const MenuModal = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const link = state.router.link;
  const currentPageLink = link.split('/').slice(0,2).join("/");

  return (
    <NavContent>
      <MenuOverlay />
      <Menu data={items} currentPageLink={currentPageLink} />
    </NavContent>
  );
};

const NavContent = styled.div`
  z-index: 3;
  display:flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  min-height: 100vh;
  height: 100vh;
  padding-top: 30px;
  padding-bottom: 100px;
  ul {
    list-style-type: none;
    padding-left: 20px;
  }
  /* Parent Menu */
  & > ul {
    padding-left: 0;
    > li > a {
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      font-size: 20px;
      z-index: 999;
      transition: all 0.3s ease 0s;
    }
  }
  & > ul > .has-child {
    padding-left: 0;
    .has-child {
      > a {
        font-weight: 500;
        color: var(--black);
      }
      > ul a {
        color: var(--black);
      }
    }
  }
  & > div > div > a {
    font-weight: 500;
  }
`;

const NavWrapper = styled.ul`
  .has-child {
    position: relative;
    &:after {
        content: "";
        background-image: url(${caretIcon});
        position: absolute;
        top: 20px;
        right: 10px;
        width: 10px;
        height: 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10;
      }
  }
`

const NavItem = styled.li`
  a {
    width: 100%;
    outline: 0;
    font-size: 16px;
    text-align: left;
    padding: 14px 0;    
    display: block;
    position: relative;
    z-index: 999;
    transition: all 0.3s ease 0s;
    color: var(--black);
    &.active {
      color: #35747B;
    }
  }
  .btn-login {
    margin-top: 10px;
    color: var(--white);
    font-weight: bold;
    border: 1px solid var(--orange);
    background-color: var(--orange);
    opacity: 1;
    border-radius: 4px;
    text-align: center;

    &:hover {
      background-color: var(--orange);
      color: var(--white);
    }

    .link-icon {
      display: none;
    }
  }
  `;

const MenuOverlay = styled.div`
  background-color: #F6F8FB;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
`;

export default connect(MenuModal);
