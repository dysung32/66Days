import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const { Content } = Layout;

export default function Root() {
  return (
    <StyledLayout>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled(Layout)`
  width: 100vw;
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  text-align: center;
  min-height: 120;
  line-height: 120px;
  padding-inline: 5rem;
  font-size: 1rem;
`;
