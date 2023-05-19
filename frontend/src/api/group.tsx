import api from "./api";

interface Board {
  title: string;
  content: string;
}

async function fetchGroupPageData(id = 1) {
  try {
    const res = await api.get(`/api/v1/page/groups/${id}`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    console.error(error);
    alert("그룹 접근 권한이 없습니다.");
    return false;
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// 그룹 관리 or 그룹원 보기 모달의 그룹원 리스트 데이터 fetch
async function fetchGroupMembers(id = 1) {
  try {
    const res = await api.get(`/api/v1/group/${id}/manage/members`);
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
    const res = await api.get(`/api/v1/group/${id}/manage/apply`);
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
    const res = await api.get(`/api/v1/badge/list/${id}`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// TODO: 하드코딩된 groupId 추후에 수정
async function fetchBoardListByPage(groupId: number = 1, page: number) {
  try {
    const res = await api.get(
      `/api/v1/article/${groupId}/articles?offset=${page}`
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
    const res = await api.get(`/api/v1/article/${groupId}/${articleId}`);
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
      `/api/v1/article/${articleId}/comments?offset=${page}`
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
    const res = await api.post(`/api/v1/article/${groupId}`, board);
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
      `/api/v1/group/${groupId}/manage/members/${status}?user_name=${userName}`
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
      `/api/v1/group/${groupId}/manage/apply/${status}?user_name=${userName}`
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
  // TODO: 하드코딩된 groupId 추후에 수정
  groupId: number = 1,
  articleId: number,
  content: string
) {
  try {
    const res = await api.post(
      `/api/v1/article/${groupId}/${articleId}/comment`,
      { content: content }
    );
    if (res.status === 200) {
      alert("댓글 작성이 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// TODO: 댓글 삭제 405 에러 해결
async function deleteComment(articleId: number, commentId: number) {
  try {
    const res = await api.patch(`/api/v1/article/${articleId}/${commentId}`);
    if (res.status === 200) {
      alert("댓글 삭제가 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function editBoard(
  groupId: number,
  articleId: number,
  title: string,
  content: string
) {
  try {
    const res = await api.patch(
      `/api/v1/article/${groupId}/modify/${articleId}`,
      {
        title: title,
        content: content,
      }
    );
    if (res.status === 200) {
      alert("게시글 수정이 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

// TODO: 게시글 삭제 405 에러 해결
async function deleteBoard(groupId: number, articleId: number) {
  try {
    const res = await api.patch(
      `/api/v1/article/${groupId}/delete/${articleId}`
    );
    if (res.status === 200) {
      alert("게시글 삭제가 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchChallengeList(groupId: number) {
  try {
    const res = await api.get(
      `/api/v1/challenge/startGroupChallenge/${groupId}`
    );
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function createNewChallenge(
  groupId: number,
  challengeId: number,
  challengeName: string | undefined,
  content: string,
  maxMemberCount: number | undefined,
  startAt: Date
) {
  try {
    const res = await api.post(`/api/v1/challenge/group/${groupId}`, {
      challengeId: challengeId,
      challengeName: challengeName,
      content: content,
      maxMemberCount: maxMemberCount,
      startAt: startAt,
    });
    if (res.status === 200) {
      alert("챌린지 생성이 완료되었습니다.");
      return true;
    }

    throw new Error();
  } catch (error) {
    alert(
      "챌린지를 생성할 수 없습니다. 시작 날짜에 동일 챌린지가 예약돼있거나 최대 30일 이내의 챌린지만 예약이 가능합니다."
    );
    return false;
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function getNewChallengeList(groupId: number) {
  try {
    const res = await api.get(`/api/v1/challenge/${groupId}`);
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function fetchAppliedChallengeMembers(groupChallengeId: number) {
  try {
    const res = await api.get(
      `/api/v1/challenge/group_challenge/${groupChallengeId}/application_list`
    );
    if (res.status === 200) {
      return res.data;
    }

    throw new Error();
  } catch (error) {
    console.log(error);
    // login error -> login  page
    // unauthorized -> unauthorized error
  }
}

async function handleChallengeApplication(
  groupChallengeId: number,
  state: string,
  nickname: string
) {
  try {
    const res = await api.patch(
      `/api/v1/challenge/group_challenge/${groupChallengeId}/${nickname}/${state}`
    );
    if (res.status === 200) {
      if (state === "ACCEPTED") {
        alert(`${nickname} 님의 챌린지 승인이 완료되었습니다.`);
      } else if (state === "REJECTED") {
        alert(`${nickname} 님의 챌린지 거절이 완료되었습니다.`);
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
  deleteComment,
  editBoard,
  deleteBoard,
  fetchChallengeList,
  createNewChallenge,
  getNewChallengeList,
  fetchAppliedChallengeMembers,
  handleChallengeApplication,
};
