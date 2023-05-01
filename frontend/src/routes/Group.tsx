import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export default function Group() {
  return (
    <>
      <GroupWrapper>Wrapper</GroupWrapper>
    </>
  );
}

const GroupWrapper = styled(Content)`
  margin: 3.5rem 0;
`;
