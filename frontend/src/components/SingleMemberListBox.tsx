import { Layout } from "antd";
import styled from "styled-components";
import { CrownFilled } from "@ant-design/icons";

const { Content } = Layout;

type MemberListProps = {
  profile: string;
  nickname: string;
  owner?: boolean;
  manager?: boolean;
  badge: number;
};

export default function SingleMemberListBox({ ...props }: MemberListProps) {
  return (
    <>
      <SingleMemberWrapper>
        <div className="member__profile-container">
          <img className="profile-img" src={props.profile} />
        </div>
        <div className="member__info-container">
          <div className="nickname">
            {props.nickname}
            <span className="owner">
              {props.owner ? (
                <>
                  <CrownFilled className="crown" />
                  그룹장
                </>
              ) : null}
              {props.manager ? (
                <>
                  <CrownFilled className="crown" />
                  매니저
                </>
              ) : null}
            </span>
          </div>
          <div className="badge-cnt">뱃지 수: {props.badge}개</div>
        </div>
      </SingleMemberWrapper>
    </>
  );
}

const SingleMemberWrapper = styled(Content)`
  width: 30vw;
  display: flex;
  padding-bottom: 2.4rem;

  .member__profile-container {
    padding-right: 1.6rem;
  }

  .member__info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;
    font-weight: 700;
    font-size: 1.6rem;
  }

  .profile-img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }

  .nickname {
  }

  .owner {
    font-size: 1rem;
    padding-left: 1rem;
    font-weight: 400;
  }

  .crown {
    color: #fec935;
    font-size: 2rem;
    padding-right: 0.5rem;
  }

  .badge-cnt {
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
