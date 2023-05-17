import api from "./api";

interface Board {
  title: string;
  content: string;
}

async function fetchGroupPageData(id = 1) {
  try {
    const res = await api.get(`/api/v1/main-service/page/groups/${id}`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// 그룹 관리 or 그룹원 보기 모달의 그룹원 리스트 데이터 fetch
async function fetchGroupMembers(id = 1) {
  try {
    const res = await api.get(
      `/api/v1/main-service/group/${id}/manage/members`
    );
    if (res.status === 200) {
      console.log(res.data);
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// 그룹 가입 신청원 리스트 데이터 fetch
async function fetchAppliedMembers(id = 1) {
  try {
    const res = await api.get(`/api/v1/main-service/group/${id}/manage/apply`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchGroupBadges(id = 1) {
  try {
    const res = await api.get(`/api/v1/main-service/badge/list/${id}`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchBoardListByPage(groupId: number = 1, page: number) {
  try {
    const res = await api.get(
      `/api/v1/main-service/article/${groupId}/articles?offset=${page}`
    );
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchBoardData(groupId: number, articleId: number) {
  try {
    const res = await api.get(
      `/api/v1/main-service/article/${groupId}/${articleId}`
    );
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchCommentData(articleId: number, page: number) {
  try {
    const res = await api.get(
      `/api/v1/main-service/article/${articleId}/comments?offset=${page}`
    );
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function postBoard(groupId: number, board: Board) {
  try {
    const res = await api.post(
      `/api/v1/main-service/article/${groupId}`,
      board
    );
    if (res.status === 200) {
      alert("게시글 작성이 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function handleMember(groupId: number, status: string, userName: string) {
  try {
    const res = await api.patch(
      `/api/v1/main-service/group/${groupId}/manage/members/${status}?user_name=${userName}`
    );
    if (res.status === 200) {
      if (status === "MANAGER") {
        alert(`${userName}님 매니저 지정이 완료되었습니다.`);
      } else if (status === "MEMBER") {
        alert(`${userName}님 매니저 해임이 완료되었습니다.`);
      }
      return true;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function handleGroupApplication(
  groupId: number,
  status: string,
  userName: string
) {
  try {
    const res = await api.post(
      `/api/v1/main-service/group/${groupId}/manage/apply/${status}?user_name=${userName}`
    );
    if (res.status === 200) {
      if (status === "ACCEPTED") {
        alert(`${userName} 님의 그룹 승인이 완료되었습니다.`);
      } else if (status === "REJECTED") {
        alert(`${userName} 님의 그룹 거절이 완료되었습니다.`);
      }
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function postComment(
  groupId: number = 1,
  articleId: number,
  content: string
) {
  try {
    const res = await api.post(
      `/api/v1/main-service/article/${groupId}/${articleId}/comment`,
      { content: content }
    );
    if (res.status === 200) {
      alert("댓글 작성이 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {}
}

export {
  fetchGroupPageData,
  fetchGroupMembers,
  fetchAppliedMembers,
  fetchGroupBadges,
  fetchBoardListByPage,
  fetchBoardData,
  fetchCommentData,
  postBoard,
  handleMember,
  handleGroupApplication,
  postComment,
};
