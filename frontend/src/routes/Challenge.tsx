import { SendOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import YoutubeFilled from "@ant-design/icons/lib/icons/YoutubeFilled";
import { Avatar, Button, Checkbox, Input } from "antd";
import styled from "styled-components";

export default function Challenge() {
  return (
    <>
      <StyledTitle>
        <h1>
          <YoutubeFilled style={{ fontSize: "4rem", marginRight: "1rem" }} />
          김태원의 Figma 정복
        </h1>
        <div>김태원과 아이들의 피그마 정복기</div>
      </StyledTitle>
      <StyledContainer>
        <StyledChat>
          <div className="chat">
            <div className="chat__message">
              <Avatar icon={<UserOutlined />} />
              <div className="content">
                <div>뭉치</div>
                <p>
                  피그마는 어때요? askldfj aslkfj asdlkfj 피그마는 어때요?
                  askldfj aslkfj asdlkfj 피그마는 어때요? askldfj aslkfj asdlkfj
                  피그마는 어때요? askldfj aslkfj asdlkfj
                </p>
              </div>
              <div className="time">오후 8:30</div>
            </div>
            <div className="chat__message chat__message--me">
              <Avatar icon={<UserOutlined />} />
              <div className="content">
                <div>뭉치</div>
                <p>
                  피그마는 어때요? askldfj aslkfj asdlkfj 피그마는 어때요?
                  askldfj aslkfj asdlkfj 피그마는 어때요? askldfj aslkfj asdlkfj
                  피그마는 어때요? askldfj aslkfj asdlkfj
                </p>
              </div>
              <div className="time">오후 8:30</div>
            </div>
            <div className="chat__message chat__message--me">
              <Avatar icon={<UserOutlined />} />
              <div className="content">
                <div>뭉치</div>
                <p>피그마는 어때요?</p>
              </div>
              <div className="time">오후 8:30</div>
            </div>
          </div>
          <div className="send">
            <Input placeholder="메시지를 입력해주세요..." />
            <Button icon={<SendOutlined />}>Send</Button>
          </div>
        </StyledChat>
        <StyledMember>
          <div style={{ margin: "1.4rem" }}>
            <TeamOutlined style={{ fontSize: "2rem" }} />
            구성원(3인)
          </div>

          <Checkbox
            onChange={() => {}}
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <Avatar icon={<UserOutlined />} style={{ marginRight: "1rem" }} />
            피그마마스터김태원
          </Checkbox>
        </StyledMember>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMember = styled.section`
  flex: 1;
  background-color: #f6f6f6;
  border-radius: 8px;
  min-height: 40rem;
  padding: 2rem;
  font-size: 1.6rem;
`;

const StyledChat = styled.section`
  flex: 3;
  margin-right: 3.2rem;
  display: flex;
  flex-direction: column;
  background-color: #f7f5ff;
  border-radius: 8px;
  min-height: 40rem;
  padding: 2rem;

  .chat {
    flex: 1;

    .chat__message--me {
      flex-direction: row-reverse;
      text-align: right;
    }

    .chat__message {
      display: flex;
      font-size: 1.6rem;

      .content {
        max-width: 40vw;
        margin: 0 1rem;
        font-size: 1.6rem;
        font-weight: bold;

        p {
          font-weight: normal;
          display: inline-block;
          padding: 1rem;
          line-height: 2.4rem;
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        }
      }
      .time {
        color: #aaaaaa;
        vertical-align: bottom;
        margin-top: auto;
      }
    }
  }

  .send {
    display: flex;
    width: 80%;
    margin: 2.4rem auto;

    input {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    }

    button {
      margin-left: 1.6rem;
      background-color: #6350b6;
      color: white;
    }
  }
`;

const StyledTitle = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  h1 {
    font-size: 3.2rem;
    font-family: "Kanit-Bold";
    margin: 0;
  }
  div {
    font-size: 1.6rem;
    margin-left: 5rem;
    color: #b4b4b4;
  }
`;
