import { useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { TeamOutlined, TrophyFilled } from "@ant-design/icons";
import { theme } from "../styles/theme";
import Algorithms from "../assets/algorithm_badge.png";
import CS from "../assets/cs_badge.png";
import Blog from "../assets/blog_badge.png";
import Lecture from "../assets/lecture_badge.png";
import Book from "../assets/book_badge.jpeg";
import ChallengeBox from "../components/ChallengeBox";
import { BoardBox } from "../components/BoardBox";
import { Modal } from "../components/common/Modal";
import SingleMemberListBox from "../components/SingleMemberListBox";

interface ButtonStyled {
  color?: string;
  font?: string;
  fontWeight?: number;
  margin?: string;
  cursor?: boolean;
}

const { Content } = Layout;

const badges = [
  { name: "알고리즘", img: Algorithms, color: theme.colors.purple },
  { name: "CS", img: CS, color: theme.colors.pink },
  { name: "블로깅", img: Blog, color: theme.colors.orange },
  { name: "강의", img: Lecture, color: theme.colors.mint },
  { name: "개발서적", img: Book, color: theme.colors.lightred },
];

export default function Group() {
  const [memberListModal, setMemberListModal] = useState(false);

  const [challengeList, setChallengeList] = useState([
    {
      bgImg: Algorithms,
      notStarted: true,
      title: "1일 1백준을 풀어봅시다.",
      dueDate: 3,
      profile:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg",
      cnt: "5 / 12",
    },
    {
      bgImg: Book,
      notStarted: true,
      ending: true,
      title: "모던자바스크립트 읽기",
      dueDate: 3,
      profile:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg",
      cnt: "5 / 12",
    },
    {
      bgImg: Blog,
      notStarted: false,
      title: "뭉치의 TIL 작성 챌린지",
      dueDate: 3,
      profile:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg",
      cnt: "5 / 12",
    },
    {
      bgImg: CS,
      notStarted: false,
      title: "김태원의 CS 스터디",
      dueDate: 3,
      profile:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2023/03/urban-20230310154400454301.jpg",
      cnt: "5 / 12",
    },
  ]);

  const [memberList, setMemberList] = useState([
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "뭉치뭉치똥뭉치",
      badge: 2,
      owner: true,
      manager: false,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "초코만먹는초코",
      badge: 3,
      owner: false,
      manager: true,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "해피한해피",
      badge: 5,
      owner: false,
      manager: false,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "초코친구코코",
      badge: 10,
      owner: false,
      manager: false,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "졸린뽀삐",
      badge: 6,
      owner: false,
      manager: false,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "뭉치친구뭉뭉이",
      badge: 7,
      owner: false,
      manager: false,
    },
    {
      profile:
        "https://user-images.githubusercontent.com/55757379/235518955-05b3f322-0590-45a5-9fdf-2e620666f34d.png",
      nickname: "난누구게",
      badge: 4,
      owner: false,
      manager: false,
    },
  ]);

  return (
    <>
      {memberListModal ? (
        <Modal closeModal={() => setMemberListModal(false)}>
          <MemberModalWrapper>
            <div className="member__modal-title">그룹원 목록</div>
            <MemberListContainer>
              {memberList.map((member) => (
                <SingleMemberListBox
                  profile={member.profile}
                  nickname={member.nickname}
                  owner={member.owner}
                  manager={member.manager}
                  badge={member.badge}
                />
              ))}
            </MemberListContainer>
          </MemberModalWrapper>
        </Modal>
      ) : null}
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
              <TrophyFilled className="badge-icon" />
              뭉치뭉치똥뭉치네 업적
              <TrophyFilled className="badge-icon" />
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
                onClick={() => setMemberListModal(true)}
              >
                그룹원 보기
              </CommonButton>
            </div>
          </div>
          <BadgesContainer>
            {badges.map((badge, index) => (
              <BadgeBox key={index}>
                <div className="badge-cnt">x3</div>
                <CommonButton
                  color={badge.color}
                  font="Kanit-Bold"
                  fontWeight={700}
                  margin="0 0 1rem 0"
                >
                  {badge.name}
                </CommonButton>
                <img className="badge-img" src={badge.img} />
              </BadgeBox>
            ))}
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
            {challengeList.map((challenge) => (
              <ChallengeBox
                bgImg={challenge.bgImg}
                notStarted={challenge.notStarted}
                title={challenge.title}
                dueDate={challenge.dueDate}
                profile={challenge.profile}
                cnt={challenge.cnt}
              />
            ))}
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
            <BoardBox
              title={"혹시 알고리즘 스터디 하실 분?"}
              date={"2023.04.20."}
              writer={"뽀삐"}
            />
            <BoardBox
              title={"혹시 알고리즘 스터디 하실 분?"}
              date={"2023.04.20."}
              writer={"뽀삐"}
              admin={true}
            />
            <BoardBox
              title={"혹시 알고리즘 스터디 하실 분?"}
              date={"2023.04.20."}
              writer={"뽀삐"}
            />
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

  .badge-icon {
    margin-right: 1rem;
    color: #ffcc4d;
    font-size: 3.2rem;
  }

  .badge-icon:last-child {
    margin-left: 1rem;
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
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem 1rem;

  .badge-cnt {
    position: absolute;
    bottom: 0;
    right: 15%;
    z-index: 1;
    background-color: ${theme.colors.lightred};
    color: ${theme.colors.white};
    font-size: 1.6rem;
    /* padding: 0.1rem 0.8rem; */
    width: 3.2rem;
    height: 2.4rem;
    text-align: center;
    border-radius: 1.5rem;
  }

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

const BoardContainer = styled(Content)`
  padding: 3rem 0;
`;

const BoardList = styled(Content)`
  display: flex;
  justify-content: space-between;
`;

const MemberModalWrapper = styled(Content)`
  height: fit-content;
  max-height: 90vh;
  overflow-y: scroll;
  background-color: ${theme.colors.white};
  padding: 4.8rem;
  border-radius: 1rem;

  .member__modal-title {
    font-size: 2.4rem;
    font-weight: 700;
    padding-bottom: 3.2rem;
  }
`;

const MemberListContainer = styled(Content)`
  display: flex;
  flex-direction: column;
`;
