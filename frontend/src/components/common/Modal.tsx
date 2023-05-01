import { ReactNode } from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

type ModalProps = {
  children: ReactNode;
  closeModal?: () => void;
};

export function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalWrapper>
      <ModalBackground onClick={closeModal}></ModalBackground>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled(Content)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalBackground = styled(Content)`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const ModalContainer = styled(Content)`
  z-index: 3;
  position: absolute;
  max-height: 90vh;
  overflow-y: scroll;
`;
