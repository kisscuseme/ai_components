// 더미 사용자 데이터
export const users = [
  {
    id: 1,
    name: "사용자01",
    avatar: "https://tabler.io/avatars/avatar-1.png",
    participationCount: 15,
  },
  {
    id: 2,
    name: "사용자02",
    avatar: "https://tabler.io/avatars/avatar-2.png",
    participationCount: 12,
  },
  {
    id: 3,
    name: "사용자03",
    avatar: "https://tabler.io/avatars/avatar-3.png",
    participationCount: 10,
  },
  {
    id: 4,
    name: "사용자04",
    avatar: "https://tabler.io/avatars/avatar-4.png",
    participationCount: 8,
  },
  {
    id: 5,
    name: "사용자05",
    avatar: "https://tabler.io/avatars/avatar-5.png",
    participationCount: 6,
  },
];

// 더미 토론 데이터
export const discussions = [
  {
    id: 1,
    title: "인공지능의 미래에 대한 토론",
    createdAt: "2023-05-15",
    authorId: 1,
    messageCount: 24,
    isPopular: true,
  },
  {
    id: 2,
    title: "기후 변화와 지속 가능한 발전",
    createdAt: "2023-05-18",
    authorId: 2,
    messageCount: 18,
    isPopular: true,
  },
  {
    id: 3,
    title: "원격 근무의 장단점",
    createdAt: "2023-05-20",
    authorId: 3,
    messageCount: 15,
    isPopular: false,
  },
  {
    id: 4,
    title: "디지털 프라이버시와 보안",
    createdAt: "2023-05-22",
    authorId: 4,
    messageCount: 12,
    isPopular: false,
  },
  {
    id: 5,
    title: "미래 교육의 방향성",
    createdAt: "2023-05-25",
    authorId: 5,
    messageCount: 9,
    isPopular: true,
  },
];

// 더미 메시지 데이터
export const messages = [
  {
    id: 1,
    discussionId: 1,
    authorId: 1,
    content: "인공지능이 발전함에 따라 일자리가 줄어들 것이라고 생각합니다.",
    createdAt: "2023-05-15T10:00:00",
  },
  {
    id: 2,
    discussionId: 1,
    authorId: 2,
    content:
      "저는 오히려 새로운 형태의 일자리가 생길 것이라고 봅니다. 역사적으로 새로운 기술이 등장할 때마다 새로운 직업이 생겨났습니다.",
    createdAt: "2023-05-15T10:05:00",
  },
  {
    id: 3,
    discussionId: 1,
    authorId: 1,
    content:
      "그렇지만 이번에는 인간의 지적 능력을 대체하는 기술이라는 점에서 이전과는 다르지 않을까요?",
    createdAt: "2023-05-15T10:10:00",
  },
  {
    id: 4,
    discussionId: 1,
    authorId: 3,
    content:
      "저는 인공지능이 인간을 완전히 대체하기보다는 보완하는 역할을 할 것이라고 생각합니다.",
    createdAt: "2023-05-15T10:15:00",
  },
  {
    id: 5,
    discussionId: 1,
    authorId: 2,
    content:
      "동의합니다. 인공지능은 반복적이고 예측 가능한 작업을 자동화하고, 인간은 창의적이고 감성적인 영역에 집중하게 될 것입니다.",
    createdAt: "2023-05-15T10:20:00",
  },
];

// 사용자 ID로 사용자 정보 찾기
export const getUserById = (id: number) => {
  return users.find((user) => user.id === id);
};

// 토론 ID로 토론 정보 찾기
export const getDiscussionById = (id: number) => {
  return discussions.find((discussion) => discussion.id === id);
};

// 토론 ID로 해당 토론의 메시지 목록 찾기
export const getMessagesByDiscussionId = (discussionId: number) => {
  return messages.filter((message) => message.discussionId === discussionId);
};
