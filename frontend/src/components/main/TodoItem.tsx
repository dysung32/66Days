import styled from "styled-components";
import { theme } from "../../styles/theme";
import Algo from "../../assets/landing/algoBox.png";
import { TodayTodoData } from "../../types/main";
import Chart from "./Chart";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router";
import { postChallenge } from "../../api/main";
interface IProps {
  challenge: TodayTodoData;
}
export default function TodoItem({ challenge }: IProps) {
  const navigate = useNavigate();
  console.log(challenge);
  const ch = challenge[0];
  console.log(ch);
  function countDays(startDate: string): number {
    const oneDay = 24 * 60 * 60 * 1000;
    const startDateTime = new Date(startDate).getTime();
    const todayDateTime = new Date().getTime();
    const diffDays = Math.round(
      Math.abs((todayDateTime - startDateTime) / oneDay)
    );
    return diffDays;
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [check, setCheck] = useState<boolean>(challenge[0].todayStreak);
  const [check, setCheck] = useState<boolean>(false);
  const handleOk = () => {
    setIsModalOpen(false);
    setCheck(true);
    //TODO: 챌린지 체크 post api 연결
    postChallenge(ch.myChallengeId);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Container
      onClick={() =>
        navigate(
          `/groups/${ch.groupChallengeId}/challenges/${ch.groupChallengeId}`
        )
      }
    >
      <div className="left">
        {/** TODO: 챌린지 이미지  */}
        <img src={Algo} alt="algo" />
        <div className="title">{ch.challengeName}</div>
      </div>
      <div className="right">
        {check ? <CustomChecked /> : <CustomUnChecked onClick={showModal} />}
        <Chart x={countDays(ch.startAt)} />
        <p>{countDays(ch.startAt)} / 66</p>
      </div>
      <CustomModal open={isModalOpen}>
        <div className="modal-title">{ch.challengeName}</div>
        <div className="modal-sub"> 챌린지를 완료하였습니까?</div>
        <div className="modal-warning">챌린지 확인 후 취소가 불가합니다.</div>
        <ModalButtonWrapper>
          <button className="ok" onClick={handleOk}>
            Yes
          </button>
          <button className="no" onClick={handleCancel}>
            Yet
          </button>
        </ModalButtonWrapper>
      </CustomModal>
    </Container>
  );
}
const CustomModal = styled(Modal)`
  svg {
    display: none;
  }
  .ant-modal-content {
    height: 48rem;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .modal-title {
    margin-top: 10.3rem;
    font-size: 3.2rem;
    font-weight: bold;
  }

  .modal-sub {
    margin-top: 3rem;
    font-size: 2.4rem;
    font-weight: ${theme.fontWeight.semibold};
  }
  .modal-warning {
    margin-top: 2rem;
    font-size: 1.6rem;
    color: #ff4a4a;
    font-weight: ${theme.fontWeight.semibold};
  }
  .ant-modal-footer {
    background-color: green;
    width: 70%;
    margin: 4.8rem auto;
    button {
      display: none;
    }
  }
`;

const ModalButtonWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 4.9rem auto;
  button {
    width: 16rem;
    height: 4.8rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    font-size: 2rem;
    color: white;
    border: none;
  }

  .ok {
    background-color: ${theme.colors.lightred};
    &:hover {
      border: solid 3px ${theme.colors.lightred};
      color: ${theme.colors.lightred};
      background-color: white;
    }
  }
  .no {
    background-color: ${theme.colors.lightblue};
    &:hover {
      border: solid 3px ${theme.colors.lightblue};
      color: ${theme.colors.lightblue};
      background-color: white;
    }
  }
`;

const Container = styled.div`
  width: 90% !important;
  height: 35rem;
  border: solid 1px ${theme.colors.gray400};
  border-radius: 15px;
  margin: 0 auto !important;
  display: flex !important;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 70%;
    display: flex;
    margin: auto 0;
  }
  .left {
    width: 55%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 2.4rem;
    font-weight: ${theme.fontWeight.semibold};
  }
  .title {
    font-size: 90%;
    text-align: center;
    display: flex;
    margin: 0 auto;
    margin-bottom: auto;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right {
    width: 45%;
    padding: 3rem;
    p {
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
    }
  }
`;
const CustomChecked = styled(CheckCircleOutlined)`
  font-size: 4rem;
  color: ${theme.colors.mint};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const CustomUnChecked = styled(CheckCircleOutlined)`
  font-size: 4rem;
  color: ${theme.colors.gray400};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;
