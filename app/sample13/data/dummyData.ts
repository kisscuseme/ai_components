export interface User {
  id: number;
  name: string;
  avatar: string;
  participationCount: number;
}

export interface Discussion {
  id: number;
  title: string;
  authorId: number;
  createdAt: string;
  messageCount: number;
  isPopular: boolean;
}

export interface Message {
  id: number;
  discussionId: number;
  authorId: number;
  content: string;
  createdAt: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "김토론",
    avatar: "https://i.pravatar.cc/150?img=1",
    participationCount: 15,
  },
  {
    id: 2,
    name: "이대화",
    avatar: "https://i.pravatar.cc/150?img=2",
    participationCount: 12,
  },
  {
    id: 3,
    name: "박의견",
    avatar: "https://i.pravatar.cc/150?img=3",
    participationCount: 10,
  },
  {
    id: 4,
    name: "최생각",
    avatar: "https://i.pravatar.cc/150?img=4",
    participationCount: 8,
  },
  {
    id: 5,
    name: "정토의",
    avatar: "https://i.pravatar.cc/150?img=5",
    participationCount: 6,
  },
];

export const discussions: Discussion[] = [
  {
    id: 1,
    title: "환경 보호를 위한 일상적인 실천 방안",
    authorId: 1,
    createdAt: "2024-02-20",
    messageCount: 8,
    isPopular: true,
  },
  {
    id: 2,
    title: "미래 교육의 방향성에 대한 토론",
    authorId: 2,
    createdAt: "2024-02-19",
    messageCount: 12,
    isPopular: true,
  },
  {
    id: 3,
    title: "AI 기술 발전과 윤리적 고려사항",
    authorId: 3,
    createdAt: "2024-02-18",
    messageCount: 6,
    isPopular: false,
  },
  {
    id: 4,
    title: "지속 가능한 도시 개발 방안",
    authorId: 4,
    createdAt: "2024-02-17",
    messageCount: 4,
    isPopular: false,
  },
  {
    id: 5,
    title: "문화 다양성과 사회 통합",
    authorId: 5,
    createdAt: "2024-02-16",
    messageCount: 7,
    isPopular: false,
  },
];

export const messages: Message[] = [
  {
    id: 1,
    discussionId: 1,
    authorId: 1,
    content:
      "환경 보호를 위해 일상에서 실천할 수 있는 방안에 대해 논의해보면 좋겠습니다.",
    createdAt: "2024-02-20T10:00:00",
  },
  {
    id: 2,
    discussionId: 1,
    authorId: 2,
    content:
      "저는 일회용품 사용을 줄이는 것부터 시작하는 것이 좋다고 생각합니다.",
    createdAt: "2024-02-20T10:05:00",
  },
  {
    id: 3,
    discussionId: 1,
    authorId: 3,
    content: "대중교통 이용도 좋은 방법이 될 수 있겠네요.",
    createdAt: "2024-02-20T10:10:00",
  },
];

export const getUserById = (id: number) => {
  return users.find((user) => user.id === id);
};

export const getDiscussionById = (id: number) => {
  return discussions.find((discussion) => discussion.id === id);
};

export const getMessagesByDiscussionId = (discussionId: number) => {
  return messages.filter((message) => message.discussionId === discussionId);
};
