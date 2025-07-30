import styled from "styled-components";
import logo from "../assets/react.svg";
import { v } from "../styles/Variables";
import { AiOutlineLeft, AiOutlineHome, AiOutlineContacts, AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../App"

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const modSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const { setTheme, theme } = useContext(ThemeContext);
  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="sidebarbutton" onClick={modSidebarOpen}>
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="img-content">
          <img src={logo} alt="logo react" />
        </div>
        <div>
          <h2>Blockchain</h2>
        </div>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="Linkcontainer
      " key={label}>
          <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
            <div className="LinkIcon">
              {icon}
            </div>
            {sidebarOpen && (
              <span>{label}</span>
            )}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <div className="Linkcontainer
      " key={label}>
          <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
            <div className="LinkIcon">
              {icon}
            </div>
            {sidebarOpen && (
              <span>{label}</span>
            )}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">

              <div className="demo">
                <label className="switch">
                  <input type="checkbox" className="theme-switcher" onClick={changeTheme} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

//#region Data links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/"
  },
  {
    label: "Contact",
    icon: <AiOutlineContacts />,
    to: "/contact"
  },
  {
    label: "About",
    icon: <AiOutlineInfoCircle />,
    to: "/about"
  }
]

const secondaryLinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/null"
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null"
  }
]

//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
color:${(props) => props.theme.text};  
background:${(props) => props.theme.bg};
position:sticky;
padding-top: 20px;
.sidebarbutton {
  position: absolute;
  top: ${v.xxlSpacing};
  right: -18px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.bgtgderecha};
  box-shadow: 0 0 4px ${(props) => props.theme.bg3},
  0 0 7px ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
  border: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
  font-family: inherit;
  outline: inherit;
}

.Logocontent{
display: flex;
justify-content: center;
align-items: center;
padding-bottom: ${v.lgSpacing};
.img-content {
display:flex;
img{
max-width: 100%;
height: auto;
}
cursor: pointer;
transition: all 0.3s;
transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
}
h2{
display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
}
}

.Linkcontainer{
  margin: 8px 0;
  padding: 0 15%;
  :hover{
    background: ${(props) => props.theme.bg3};
  }
  .Links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: calc(${v.smSpacing} - 2px) 0;

    .LinkIcon {
      padding: ${v.smSpacing} ${v.mdSpacing};
      display: flex;
      svg{
        font-size: 25px;
      }
    }
    span { 
          color: ${(props) => props.theme.text};
    }
    &.active{
      .LinkIcon{
        svg{
          color: ${(props) => props.theme.text};
        }
      }
    }
  }
}

.Themecontent {
  display: flex;
  align-items: center;
  .titletheme {
    display: block;
    padding: 10px;
    font-weight: 700;
    opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
    transition: 0.3s;
    white-space:nowrap;
    overflow: hidden;
  }
  .Togglecontent {
    margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
    width: 36px;
    height: 20px;
    border-radius: 10px;
    transition: all 0.3s;
    position: relative;
    .theme-container {
      background-blend-mode: multiply, multiply;
      transition: 0.4s;
      .grid {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        font-family: "Lato", sans-serif;
      }
      .demo {
        font-size: 32px;
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          .theme-switcher {
            opacity: 0;
            width: 0;
            height: 0;
            &:checked +.slider:before{
              left: 4px;
              content: "🌑";
              transform: translateX(26px);
            }
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ themeUse }) => (themeUse ? v.lightcheckbox : v.checkbox)};
            transition: 0.4s;
            &::before {
              position: absolute;
              content: "☀️";
              height: 0px;
              width: 0px;
              left: -10px;
              top: 16px;
              line-height: 0px;
              transition: 0.4s;
          }
          &.round {
            border-radius: 34px;
            &::before {
              border-radius: 50%;
            }
          }
          }
        }
      }
    }
  }
}
`;

const Divider = styled.div`
height: 1px;
width: 100%;
background: ${(props) => props.theme.bg3};
margin: ${v.lgSpacing} 0;

`
//#endregion