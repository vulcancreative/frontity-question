import React from "react";
import { connect, styled } from "frontity";
import Link from "./../link";
import remoteIcon from "./../../images/icons/remote.png";
import servicesIcon from "./../../images/icons/services.png";
import supportIcon from "./../../images/icons/support.png";
import cyberIcon from "./../../images/icons/cyber.png";
import infraIcon from "./../../images/icons/infra.png";
import localIcon from "./../../images/icons/local.png";
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

const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const topMenuItems = state.source.get(`/menu/${state.theme.topmenuUrl}/`).items;
  const link = state.router.link;
  const currentPageLink = link.split('/').slice(0,2).join("/");

  return (
    <NavHeader>
      <NavTopMenu>
        {topMenuItems.map((item) => {
          return (
            <NavTopMenuItem key={item.ID}>
              <Link className={item.classes[0]} link={item.url}>{item.title}</Link>
            </NavTopMenuItem>
          );
        })}
      </NavTopMenu>
      <NavContainer>
        <Menu data={items} currentPageLink={currentPageLink} />
      </NavContainer>
    </NavHeader>
  );
};

export default connect(Nav);

const NavHeader = styled.div`
  font-weight: 500;
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavTopMenu = styled.ul`
  list-style: none;
  display:flex;
  padding: 0;
  justify-content: flex-end;
  font-size: 14px;
`;

const NavTopMenuItem = styled.li`
  + li {
    margin-left: 40px;
  }

  a {
    color: #111e29;
    opacity: 0.6;
  }
`;

const NavContainer = styled.nav`
  display:flex;
  padding: 0;
  justify-content: flex-end;
  font-size: 16px;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /* Hide icon block on primary menu */

  > ul > li {

    &.has-child {

      &:after {
        content: "";
        background-image: url(${caretIcon});
        position: absolute;
        top: 16px;
        right: 10px;
        width: 10px;
        height: 10px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      /* NEW ADDED: has-child */

      & > ul {
        display: flex;
        background-color: var(--white);

        & > li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          border-right: 1px solid #dedede;
          border-radius: 0;
          min-width: 280px;

          & > ul,
          & > ul li {
            width: 100%;
          }
        }

        & > li:last-child {
          border-right: none;
        }
      }

      & > a {
        padding: 8px 30px 8px 15px;
      } 
      /* Child Menu */

      > ul > li > a {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: 66px;
        position: relative;
        margin-bottom: 0;

        &:after {
          content: "";
          height: 1px;
          position: absolute;
          bottom: 0;
          left: 10px;
          right: 10px;
          background-color: #dedede;
        }
      }

      > ul > li a:hover {
        background-color: #effaf9;

        span {
          background-color: var(--white);
        }
      }
    }

    & > a > .link-icon {
      display: none;
    }

    & > ul {
      /* submenu positioning*/
      position: absolute;
      white-space: nowrap;
      border: 1px solid var(--cyan-light);
      border-radius: 7px;
      z-index: 1;
      left: -99999em;
    }

    &:hover > ul {
      left: auto;
      min-width: 100%;
      right: -356px;
    }
  }
`;

const NavWrapper = styled.ul`
  vertical-align: top;
  display: inline-block;

  a {
    display: block;
    color: var(--black);
    text-decoration: none;
    padding: 8px 10px;
    text-transform: capitalize;
    position: relative;
    opacity: 0.6;
    border-radius: 4px;
    border: 1px solid transparent;
    &.active {
      color: #35747b;
      background-color: #effaf9;
      border: 1px solid #effaf9;
      opacity: 1;
    }
    &.no-redirect {
      pointer-events: none;
      cursor: default;
    }
  }

  li {
    position: relative;
  }

  & > li {
    float: left;
    margin-right: 1px;
    border-radius: 4px;
  }

  & > li > a {
    margin-bottom: 1px;
  }

  & > li:hover > a {
    background-color: #effaf9;
    border: 1px solid #effaf9;
  }

  & li:hover > a {
    color: #35747b;
    opacity: 1;
  }

  & li a:first-of-type:nth-last-of-type(2):before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    border: 5px solid transparent;
    top: 50%;
    right: 5px;
  }

  & > li li:hover > ul {
    left: 100%;
    top: -1px;
  }
  /* arrow hover styling */

  & > li > a:first-of-type:nth-last-of-type(2):before {
    border-top-color: #aaaaaa;
  }

  & > li:hover > a:first-of-type:nth-last-of-type(2):before {
    border: 5px solid transparent;
    /* border-bottom-color: var(--orange); */
    margin-top: -5px;
  }

  & li li > a:first-of-type:nth-last-of-type(2):before {
    border-left-color: #aaaaaa;
    margin-top: -5px;
  }

  & li li:hover > a:first-of-type:nth-last-of-type(2):before {
    border: 5px solid transparent;
    border-right-color: var(--orange);
    right: 10px;
  }

  .btn-login {
    color: var(--orange);
    font-weight: bold;
    border: 1px solid var(--orange);
    opacity: 1;

    &:hover {
      background-color: var(--orange);
      color: var(--white);
    }

    .link-icon {
      display: none;
    }
  }
`;

const NavItem = styled.li`
  .link-icon {
    width: 48px;
    height: 48px;
    background-color: #effaf9;
    display: inline-block;
    border-radius: 8px;
    margin-right: 8px;
  }

  a > span {
    background-repeat: no-repeat;
    background-size: 32px;
    background-position: center;
  }

  .icon-remote span {
    background-image: url(${remoteIcon});
  }

  .icon-services span {
    background-image: url(${servicesIcon});
  }

  .icon-support span {
    background-image: url(${supportIcon});
  }

  .icon-cyber span {
    background-image: url(${cyberIcon});
  }

  .icon-infra span {
    background-image: url(${infraIcon});
  }

  .icon-local span {
    background-image: url(${localIcon});
  }

`;