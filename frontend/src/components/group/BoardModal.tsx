import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Layout, Modal } from "antd";
import { changeDateFormat } from "../../util/common";
import { SendOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { fetchCommentData, postComment } from "../../api/group";

const { Content } = Layout;

interface ArticleType {
  articleDTO: {
    articleId: number;
    title: string;
    content: string;
    createdAt: Date;
    userId: string;
    nickname: string;
    groupId: number;
    role: string;
  };
}

interface CommentType {
  commentId: number;
  articleId: number;
  groupId: number;
  userId: string;
  nickname: string;
  profileImagePath: string;
  content: string;
  createdAt: Date;
}

interface PropsType {
  open: boolean;
  toggleModal: () => void;
  boardData: ArticleType;
  commentData: CommentType[];
  setCommentData: React.Dispatch<React.SetStateAction<CommentType[]>>;
}

export function BoardModal(props: PropsType) {
  const commentRef = useRef<HTMLInputElement | null>(null);

  const CommentBox = () => {
    return (
      <CommentBoxWrapper>
        {props.commentData?.length === 0 ? (
          <div className="no-comments">댓글이 존재하지 않습니다.</div>
        ) : (
          <></>
        )}
        {props.commentData?.map((comment: CommentType, index) => (
          <SingleComment key={index}>
            <div className="writer-profile-box">
              <img
                className="comment-writer-profile"
                src={comment.profileImagePath}
              />
            </div>
            <div className="writer-info-box">
              <div className="writer-info-top">
                <div className="comment-writer-nickname">
                  {comment.nickname}
                </div>
                <div className="comment-date">
                  {changeDateFormat(new Date(comment.createdAt))}
                </div>
              </div>
              <div className="comment-content">{comment.content}</div>
            </div>
            <div className="comment-delete-box">
              <div className="delete-btn">Delete</div>
            </div>
          </SingleComment>
        ))}
      </CommentBoxWrapper>
    );
  };

  async function fetchAndSetCommentData(articleId: number) {
    const fetchedCommentData = await fetchCommentData(articleId, 0);
    props.setCommentData(fetchedCommentData.commentsList);
  }

  async function handleUploadComment(groupId: number, articleId: number) {
    if (commentRef.current) {
      const resp = await postComment(
        groupId,
        articleId,
        commentRef.current.value
      );
      if (resp) {
        commentRef.current.value = "";
        fetchAndSetCommentData(articleId);
        props.toggleModal();
      }
    }
  }

  return (
    <>
      <CustomModal
        open={props.open}
        onCancel={props.toggleModal}
        width={800}
        footer={null}
      >
        <BoardModalWrapper>
          <div className="modal-title">{props.boardData?.articleDTO.title}</div>
          <div className="board__modal-info">
            <div className="board-date">
              {props.boardData
                ? changeDateFormat(
                    new Date(props.boardData?.articleDTO.createdAt)
                  )
                : ""}
            </div>
            {/* TODO: auth 연결되면 userId와 board userId 비교해서 일치하면 수정 삭제 버튼 보이게 하기 */}
            {/* <div>
              작성자: {props.boardData?.articleDTO.nickname}
            </div> */}
            <div className="board-btn-list">
              <button className="board-btn edit">수정</button>
              <button className="board-btn delete">삭제</button>
            </div>
          </div>
          <BoardContentBox>
            <div className="board-content">
              {props.boardData?.articleDTO.content}
            </div>
          </BoardContentBox>
          <BoardCommentContainer>
            <div className="comment-box-title">댓글</div>
            <CommentBox />
            <CommentInputBox>
              <input
                className="comment-input"
                placeholder="댓글을 입력해주세요"
                ref={commentRef}
              />
              <div
                className="send-btn"
                onClick={() =>
                  handleUploadComment(1, props.boardData.articleDTO.articleId)
                }
              >
                Upload
                <SendOutlined className="send-icon" />
              </div>
            </CommentInputBox>
          </BoardCommentContainer>
        </BoardModalWrapper>
      </CustomModal>
    </>
  );
}

const CustomModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }
`;

const BoardModalWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 90vh;
  overflow-y: scroll;
  background-color: ${theme.colors.white};
  font-size: 1.6rem;
  padding: 6.4rem;
  border-radius: 1rem;

  .modal-title {
    font-size: 2.4rem;
    font-weight: 700;
    padding-bottom: 3.2rem;
  }

  .board__modal-info {
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.gray500};
    padding-bottom: 1rem;
    border-bottom: 2px solid ${theme.colors.gray300};
  }

  .board-btn-list {
    display: flex;
    width: 11rem;
    justify-content: space-between;
  }

  .board-btn {
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: ${theme.colors.white};
    cursor: pointer;
  }

  .edit {
    background-color: ${theme.colors.lightblue};
    &:hover {
      background-color: ${theme.colors.hoverLightBlue};
    }
  }

  .delete {
    background-color: ${theme.colors.failure};
    &:hover {
      background-color: ${theme.colors.hoverFailure};
    }
  }
`;

const BoardContentBox = styled(Content)`
  padding: 2rem 0;
  box-sizing: border-box;

  .board-content {
    padding-bottom: 2rem;
    border-bottom: 2px solid ${theme.colors.gray300};
    overflow-y: scroll;
    max-height: 20vh;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

const BoardCommentContainer = styled(Content)`
  padding: 2.4rem 0;

  .comment-box-title {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const CommentBoxWrapper = styled(Content)`
  display: flex;
  flex-direction: column;
  height: 25vh;
  min-height: min-content;
  overflow-y: scroll;
  margin-bottom: 2rem;

  .no-comments {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;

const CommentInputBox = styled(Content)`
  display: flex;
  font-size: 1.6rem;

  .comment-input {
    flex-grow: 1;
    padding-left: 2rem;
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.gray300};
  }

  .send-btn {
    background-color: #6350b6;
    border-radius: 0.8rem;
    padding: 0.8rem 1.8rem;
    font-family: "Kanit-Regular";
    color: ${theme.colors.white};
    margin-left: 1.6rem;
    cursor: pointer;
  }

  .send-icon {
    padding-left: 1rem;
  }
`;

const SingleComment = styled(Content)`
  display: flex;
  align-items: start;
  /* min-height: 6rem; */
  min-height: fit-content;
  padding-top: 1rem;
  border-bottom: 1px solid ${theme.colors.gray300};
  font-size: 1.6rem;

  .comment-writer-profile {
    width: 4.8rem;
    height: 4.8rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }

  .writer-profile-box {
    width: 4.8rem;
  }

  .writer-info-box {
    padding: 0 2rem 1rem;
    flex-grow: 1;
  }

  .writer-info-top {
    display: flex;
    padding-bottom: 0.5rem;
  }

  .comment-writer-nickname {
    font-weight: 700;
    padding-right: 2rem;
  }

  .comment-date {
    color: ${theme.colors.gray400};
  }

  .comment-delete-box {
    display: flex;
    align-items: center;
    height: max-content;
    padding-left: 1rem;
    justify-content: center;
  }

  .delete-btn {
    background-color: ${theme.colors.failure};
    border-radius: 0.8rem;
    padding: 0.8rem 1.8rem;
    font-family: "Kanit-Regular";
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;
