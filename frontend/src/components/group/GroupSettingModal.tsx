import { Modal, Layout, Tabs } from "antd";
import type { TabsProps } from "antd";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import SingleMemberListBox from "./SingleMemberListBox";
import {
  fetchAppliedMembers,
  fetchGroupMembers,
  handleGroupApplication,
  handleMember,
} from "../../api/group";

interface ButtonStyled {
  color?: string;
  hoverColor?: string;
  font?: string;
  fontWeight?: number;
  margin?: string;
  cursor?: string;
}

interface MemberType {
  image: string;
  nickname: string;
  badge: number;
  authority: "MEMBER" | "OWNER" | "MANAGER";
}

interface PropsType {
  open: boolean;
  toggleModal: () => void;
  memberList: MemberType[];
  setMemberList: React.Dispatch<React.SetStateAction<MemberType[]>>;
  appliedList: MemberType[];
  setAppliedList: React.Dispatch<React.SetStateAction<MemberType[]>>;
}

const { Content } = Layout;

export function GroupSettingModal(props: PropsType) {
  // 그룹원들 리렌더링 메소드
  async function fetchAndUpdateGroupMembers() {
    const membersData = await fetchGroupMembers();
    props.setMemberList(membersData["member-list"]);
  }

  async function fetchAndUpdateGroupAppliedMembers() {
    const appliedMembersData = await fetchAppliedMembers();
    props.setAppliedList(appliedMembersData["apply-list"]);
  }

  // 그룹 매니저 지정, 해임 메소드
  async function handleManagerSetting(authority: string, nickname: string) {
    if (authority === "MEMBER") {
      // 매니저 지정
      // TODO: 1을 groupId로 추후에 수정
      const resp = await handleMember(1, "MANAGER", nickname);
      if (resp) {
        fetchAndUpdateGroupMembers();
      }
    } else if (authority === "MANAGER") {
      // 매니저 해임
      // TODO: 1을 groupId로 추후에 수정
      const resp = await handleMember(1, "MEMBER", nickname);
      if (resp) {
        fetchAndUpdateGroupMembers();
      }
    }
  }

  // 그룹 멤버 강퇴 메소드
  async function handleDropMember(nickname: string) {
    // TODO: 1을 groupId로 추후에 수정
    const resp = await handleMember(1, "DROP", nickname);
    if (resp) {
      fetchAndUpdateGroupMembers();
    }
  }

  async function handleAcception(
    groupId: number,
    status: string,
    userName: string
  ) {
    const resp = await handleGroupApplication(groupId, status, userName);
    if (resp) {
      fetchAndUpdateGroupMembers();
      fetchAndUpdateGroupAppliedMembers();
    }
  }

  // 그룹원 관리 Tab
  const FirstTabContent = () => {
    return (
      <>
        <TabContentWrapper>
          {props.memberList.map((member: MemberType, index: number) => (
            <div className="member-setting-container">
              <SingleMemberListBox
                key={index}
                profile={member.image}
                nickname={member.nickname}
                owner={member.authority === "OWNER" ? true : false}
                manager={member.authority === "MANAGER" ? true : false}
                badge={member.badge}
              />
              {/* 그룹장일 경우는 매니저 지정, 강퇴하기 안보이게 처리 */}
              {member.authority !== "OWNER" ? (
                <div className="setting-btn-box">
                  <CommonButton
                    className="setting-btn"
                    color={theme.colors.lightblue}
                    hoverColor={theme.colors.hoverLightBlue}
                    onClick={() =>
                      handleManagerSetting(member.authority, member.nickname)
                    }
                  >
                    {/* 현재 매니저일 경우엔 매니저 해임 글씨 뜨게 하기 */}
                    {member.authority === "MANAGER"
                      ? "매니저 해임"
                      : "매니저 지정"}
                  </CommonButton>
                  <CommonButton
                    className="setting-btn"
                    color={theme.colors.failure}
                    hoverColor={theme.colors.hoverFailure}
                    onClick={() => handleDropMember(member.nickname)}
                  >
                    강퇴하기
                  </CommonButton>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="manager-desc">
            <span className="red-dot">*</span>매니저는 최대 3명까지 지정이
            가능합니다.
          </div>
        </TabContentWrapper>
      </>
    );
  };

  // 대기 중인 요청 Tab
  const SecondTabContent = () => {
    return (
      <>
        <TabContentWrapper>
          {props.appliedList.length === 0 ? (
            <div className="no-applied-members">대기 중인 요청이 없습니다.</div>
          ) : (
            <></>
          )}
          {props.appliedList.map((member: MemberType) => (
            <div className="member-setting-container">
              <SingleMemberListBox
                profile={member.image}
                nickname={member.nickname}
                badge={member.badge}
              />
              <div className="setting-btn-box">
                <CommonButton
                  className="setting-btn"
                  color={theme.colors.lightblue}
                  hoverColor={theme.colors.hoverLightBlue}
                  onClick={() =>
                    handleAcception(1, "ACCEPTED", member.nickname)
                  }
                >
                  수락
                </CommonButton>
                <CommonButton
                  className="setting-btn"
                  color={theme.colors.failure}
                  hoverColor={theme.colors.hoverFailure}
                  onClick={() =>
                    handleAcception(1, "REJECTED", member.nickname)
                  }
                >
                  거절
                </CommonButton>
              </div>
            </div>
          ))}
        </TabContentWrapper>
      </>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `그룹원 관리`,
      children: <FirstTabContent />,
    },
    {
      key: "2",
      label: `대기 중인 요청`,
      children: <SecondTabContent />,
    },
  ];

  return (
    <>
      <Modal
        open={props.open}
        onCancel={props.toggleModal}
        width={800}
        footer={null}
      >
        <MemberSettingModalWrapper>
          <div className="modal-title">그룹 관리</div>
          <TabContainer>
            <Tabs className="tab-list" defaultActiveKey="1" items={items} />
          </TabContainer>
        </MemberSettingModalWrapper>
      </Modal>
    </>
  );
}

const MemberSettingModalWrapper = styled(Content)`
  height: fit-content;
  max-height: 90vh;
  overflow-y: scroll;
  background-color: ${theme.colors.white};
  padding: 6.4rem 8rem;
  border-radius: 1rem;

  .modal-title {
    font-size: 2.4rem;
    font-weight: 700;
    padding-bottom: 3.2rem;
  }
`;

const TabContainer = styled(Content)`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  .ant-tabs,
  .ant-tabs-tab-btn {
    font-size: 1.5rem;
  }

  .ant-tabs-tab-active {
    font-weight: ${theme.fontWeight.bold};
  }
`;

const TabContentWrapper = styled(Content)`
  padding-top: 2rem;

  .no-applied-members {
    font-size: 1.5rem;
    text-align: center;
  }

  .member-setting-container {
    display: flex;
    align-items: center;
  }

  .setting-btn-box {
    display: flex;
    padding-left: 1rem;
  }

  .setting-btn {
    margin-left: 1rem;
    cursor: pointer;
  }

  .manager-desc {
    font-size: 1.5rem;
  }

  .red-dot {
    padding-right: 0.5rem;
    color: ${theme.colors.failure};
  }
`;

const CommonButton = styled(Content)<ButtonStyled>`
  padding: 0.4rem 1.6rem;
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.color};
  font-family: ${(props) => props.font};
  font-weight: ${(props) => props.fontWeight};
  cursor: ${(props) => (props.cursor === "true" ? "pointer" : null)};
  color: ${theme.colors.white};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
