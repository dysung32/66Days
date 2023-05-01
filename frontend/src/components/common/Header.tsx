import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import LogoTitle from "../../assets/logo-title.svg";
import Logo from "../../assets/logo.svg";
import avartar from "../../assets/avatar.svg";

export default function CustomHeader() {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={Logo} />
        <img src={LogoTitle} />
      </div>
      <div className="link">
        <a href="/search">search</a>
        <a href="/create">create group</a>
        <img src={avartar} />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled(Header)`
  position: fixed;
  width: 100vw;
  top: 0;
  border-bottom: 1px solid rgba(158, 158, 158, 0.2);
  text-align: center;
  height: 64;
  padding-inline: 5rem;
  line-height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  .logo {
    display: flex;
  }

  .link {
    display: flex;
    align-items: center;

    a {
      margin-right: 1rem;
    }
  }
`;
