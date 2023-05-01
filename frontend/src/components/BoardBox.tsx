import { Layout } from "antd";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { NotificationFilled } from "@ant-design/icons";

const { Content } = Layout;

export function BoardBox({ ...props }) {
  return (
    <>
      <BoardBoxWrapper>
        {props.admin ? <NotificationFilled className="admin" /> : null}
        <div className="board-title">{props.title}</div>
        <div className="board-info">
          <div>{props.date}</div>
          <div>작성자: {props.writer}</div>
        </div>
      </BoardBoxWrapper>
    </>
  );
}

const BoardBoxWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  width: 10px;
  height: 16rem;
  padding: 1rem 2rem;
  background-color: ${theme.colors.mint};
  margin-right: 1.6rem;
  border-radius: 1rem;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.45));
  }

  .admin {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 3rem;
    color: ${theme.colors.failure};
  }

  .admin:hover {
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.2));
  }

  .board-title {
    font-size: 1.8rem;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }

  .board-info {
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.white};
    font-weight: 600;
  }
`;
