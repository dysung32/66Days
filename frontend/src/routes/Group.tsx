import { Layout } from "antd";
import styled from "styled-components";
import { TeamOutlined, CrownOutlined } from "@ant-design/icons";
import { theme } from "../styles/theme";
import Algorithms from "../assets/algorithm_badge.png";
import CS from "../assets/cs_badge.png";
import Blog from "../assets/blog_badge.png";
import Lecture from "../assets/lecture_badge.png";
import Book from "../assets/book_badge.jpeg";

interface ButtonStyled {
  color?: string;
  font?: string;
  fontWeight?: number;
  margin?: string;
  cursor?: boolean;
}

interface ChallengeImgStyled {
  bgImg: string;
  notStarted: boolean;
}

const { Content } = Layout;

export default function Group() {
  return (
    <>
      <GroupWrapper>
        <div className="group__title-container">
          <div className="title">
            <TeamOutlined className="title-icon" />
            뭉치뭉치똥뭉치네
          </div>
        </div>
        <GroupBadges>
          <div className="title-box">
            <div className="small__title">
              <CrownOutlined className="badge-icon-left" />
              뭉치뭉치똥뭉치네 업적
              <CrownOutlined className="badge-icon-right" />
            </div>
            <div className="btn-wrapper">
              <CommonButton
                color={theme.colors.black}
                font="Kanit-Regular"
                margin="0 1rem 0 0"
                cursor={true}
              >
                그룹 관리
              </CommonButton>
              <CommonButton
                color={theme.colors.gray500}
                font="Kanit-Regular"
                cursor={true}
              >
                그룹원 보기
              </CommonButton>
            </div>
          </div>
          <BadgesContainer>
            <BadgeBox>
              <CommonButton
                color={theme.colors.purple}
                fontWeight={700}
                margin="0 0 1rem 0"
              >
                알고리즘
              </CommonButton>
              <img className="badge-img" src={Algorithms} />
            </BadgeBox>
            <BadgeBox>
              <CommonButton
                color={theme.colors.pink}
                font="Kanit-Bold"
                margin="0 0 1rem 0"
              >
                CS
              </CommonButton>
              <img className="badge-img" src={CS} />
            </BadgeBox>
            <BadgeBox>
              <CommonButton
                color={theme.colors.orange}
                fontWeight={700}
                margin="0 0 1rem 0"
              >
                블로깅
              </CommonButton>
              <img className="badge-img" src={Blog} />
            </BadgeBox>
            <BadgeBox>
              <CommonButton
                color={theme.colors.mint}
                fontWeight={700}
                margin="0 0 1rem 0"
              >
                강의
              </CommonButton>
              <img className="badge-img" src={Lecture} />
            </BadgeBox>
            <BadgeBox>
              <CommonButton
                color={theme.colors.lightred}
                fontWeight={700}
                margin="0 0 1rem 0"
              >
                개발서적
              </CommonButton>
              <img className="badge-img" src={Book} />
            </BadgeBox>
          </BadgesContainer>
        </GroupBadges>
        <GroupChallenges>
          <div className="title-box">
            <div className="small__title">66 챌린지 목록</div>
            <div className="btn-wrapper">
              <CommonButton
                color={theme.colors.gray500}
                font="Kanit-Regular"
                cursor={true}
              >
                챌린지 추가
              </CommonButton>
            </div>
          </div>
          <ChallengesContainer>
            <ChallengeBox>
              <ChallengeImg bgImg={Algorithms} notStarted={true}>
                <div className="not-started-logo">COMMING SOON</div>
              </ChallengeImg>
              <div className="challenge__box-title">
                <div className="challenge-title">1일 1백준 풀어봅시다.</div>
                <div className="due-date">D-30</div>
              </div>
              <div className="challenge__members-box">
                <div className="members-img-box">
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                </div>
                <div className="members__cnt-info">5 / 12 명</div>
              </div>
            </ChallengeBox>
            <ChallengeBox>
              <ChallengeImg bgImg={Book} notStarted={true}>
                <div className="not-started-logo">COMMING SOON</div>
              </ChallengeImg>
              <div className="challenge__box-title">
                <div className="challenge-title">1일 1백준 풀어봅시다.</div>
                <div className="due-date">D-3</div>
              </div>
              <div className="challenge__members-box">
                <div className="members-img-box">
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                </div>
                <div className="members__cnt-info">5 / 12 명</div>
              </div>
            </ChallengeBox>
            <ChallengeBox>
              <ChallengeImg bgImg={Blog} notStarted={false}>
                <div className="not-started-logo">COMMING SOON</div>
              </ChallengeImg>
              <div className="challenge__box-title">
                <div className="challenge-title">1일 1백준 풀어봅시다.</div>
                <div className="due-date">D-3</div>
              </div>
              <div className="challenge__members-box">
                <div className="members-img-box">
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                </div>
                <div className="members__cnt-info">5 / 12 명</div>
              </div>
            </ChallengeBox>
            <ChallengeBox>
              <ChallengeImg bgImg={CS} notStarted={false}>
                <div className="not-started-logo">COMMING SOON</div>
              </ChallengeImg>
              <div className="challenge__box-title">
                <div className="challenge-title">1일 1백준 풀어봅시다.</div>
                <div className="due-date">D-3</div>
              </div>
              <div className="challenge__members-box">
                <div className="members-img-box">
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                  <img
                    className="member-profile"
                    src={
                      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg"
                    }
                  />
                </div>
                <div className="members__cnt-info">5 / 12 명</div>
              </div>
            </ChallengeBox>
          </ChallengesContainer>
        </GroupChallenges>
        <BoardContainer>
          <div className="title-box">
            <div className="small__title">게시판</div>
            <div className="btn-wrapper">
              <CommonButton
                color={theme.colors.gray500}
                font="Kanit-Regular"
                cursor={true}
              >
                게시글 작성
              </CommonButton>
            </div>
          </div>
          <BoardList>
            <SingleBoard>d</SingleBoard>
            <SingleBoard>d</SingleBoard>
            <SingleBoard>d</SingleBoard>
          </BoardList>
        </BoardContainer>
      </GroupWrapper>
    </>
  );
}

const GroupWrapper = styled(Content)`
  margin: 3.5rem 0;

  .small__title {
    font-size: 2.4rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }

  .group__title-container {
    display: flex;
  }

  .btn-wrapper {
    display: flex;
  }

  .title {
    font-size: 3.2rem;
    font-weight: 700;
  }

  .title-icon {
    margin-right: 1rem;
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GroupBadges = styled(Content)`
  padding: 3rem 0;

  .badge-icon-left {
    margin-right: 1rem;
    color: #ffcc4d;
  }

  .badge-icon-right {
    margin-left: 1rem;
    color: #ffcc4d;
  }
`;

const BadgesContainer = styled(Content)`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 3rem 2rem;
  width: 100%;
  border-radius: 1rem;
  background-color: ${theme.colors.gray100};
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.15));
`;

const BadgeBox = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;
  /* padding-bottom: 1rem; */

  .badge-img {
    width: 10vw;
    height: 10vw;
    border-radius: 1rem;
    object-fit: cover;
    cursor: pointer;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.15));

    &:hover {
      filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));
    }
  }
`;

const CommonButton = styled(Content)<ButtonStyled>`
  padding: 0.4rem 1.6rem;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-weight: ${(props) => props.fontWeight};
  cursor: ${(props) => (props.cursor ? "pointer" : null)};
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GroupChallenges = styled(Content)`
  padding: 3rem 0;
`;

const ChallengesContainer = styled(Content)`
  display: flex;
  justify-content: space-between;
`;

const ChallengeBox = styled(Content)`
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

  width: 20vw;
  height: 20vw;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .not-started-logo {
    width: fit-content;
    border: 2px solid ${theme.colors.white};
    padding: 0.8rem 1.6rem;
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    font-family: "Kanit-SemiBold";
  }
`;

const BoardContainer = styled(Content)`
  /* width: 100%; */
  padding: 3rem 0;
`;

const BoardList = styled(Content)`
  display: flex;
  justify-content: space-between;
`;

const SingleBoard = styled(Content)`
  width: 10px;
  height: 16rem;
  background-color: ${theme.colors.mint};
  border: 1px solid green;
`;
