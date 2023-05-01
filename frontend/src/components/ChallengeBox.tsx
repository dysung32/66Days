import { Layout } from "antd";
import styled from "styled-components";
import { theme } from "../styles/theme";

const { Content } = Layout;

interface ChallengeImgStyled {
  bgImg: string;
  notStarted: boolean;
  ending?: boolean;
}

export default function ChallengeBox({ ...props }) {
  return (
    <>
      <ChallengeBoxWrapper>
        <ChallengeImg bgImg={props.bgImg} notStarted={props.notStarted}>
          {props.ending ? <div className="ending-logo">마감 임박</div> : null}
          <div className="not-started-logo">COMING SOON</div>
        </ChallengeImg>
        <div className="challenge__box-title">
          <div className="challenge-title">{props.title}</div>
          <div className="due-date">D-{props.dueDate}</div>
        </div>
        <div className="challenge__members-box">
          <div className="members-img-box">
            <img className="member-profile" src={props.profile} />
            <img className="member-profile" src={props.profile} />
            <img className="member-profile" src={props.profile} />
          </div>
          <div className="members__cnt-info">{props.cnt} 명</div>
        </div>
      </ChallengeBoxWrapper>
    </>
  );
}

const ChallengeBoxWrapper = styled(Content)`
  width: 20vw;
  display: flex;
  flex: initial;
  flex-direction: column;

  .challenge__box-title {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .challenge-title {
    font-weight: 700;
    flex-grow: 1;
  }

  .due-date {
    min-width: fit-content;
    font-family: "Kanit-Bold";
    color: ${theme.colors.failure};
  }

  .challenge__members-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .members-img-box {
    display: flex;
    flex-wrap: wrap;
  }

  .member-profile {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  .members__cnt-info {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #5f6f94;
    color: ${theme.colors.white};
    text-align: center;
  }
`;

const ChallengeImg = styled(Content)<ChallengeImgStyled>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bgImg});
  background-size: cover;
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));

  .ending-logo {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: ${theme.colors.failure};
    color: ${theme.colors.white};
    font-size: 1.2rem;
    font-weight: 700;
  }

  .not-started-logo {
    width: fit-content;
    border: 2px solid ${theme.colors.white};
    padding: 0.8rem 1.6rem;
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    font-family: "Kanit-SemiBold";
  }
`;
