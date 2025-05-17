import { Topic, Thread, Comment, User } from "../types";

export const topics: Topic[] = [
  {
    id: 1,
    title: "AI 윤리",
    subtopics: [
      { id: 11, title: "AI 규제", parentId: 1 },
      { id: 12, title: "책임 있는 AI", parentId: 1 },
    ],
  },
  {
    id: 2,
    title: "생성형 AI",
    subtopics: [
      { id: 21, title: "ChatGPT", parentId: 2 },
      { id: 22, title: "Stable Diffusion", parentId: 2 },
    ],
  },
];

export const threads: Thread[] = [
  {
    id: 1,
    topicId: 1,
    title: "AI 윤리의 미래는?",
    content: "AI가 사회에 미치는 영향과 윤리적 쟁점에 대해 토론해요.",
    likes: 12,
    comments: 5,
  },
  {
    id: 2,
    topicId: 21,
    title: "ChatGPT 활용법 공유",
    content: "여러분은 ChatGPT를 어떻게 활용하고 계신가요?",
    likes: 8,
    comments: 3,
  },
  {
    id: 3,
    topicId: 3,
    title: "Next.js 15의 변화점",
    content: "최신 프론트엔드 트렌드와 Next.js 15의 주요 기능을 이야기해요.",
    likes: 5,
    comments: 2,
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    threadId: 1,
    user: "damso_user",
    content: "좋은 의견 감사합니다!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    threadId: 1,
    user: "ai_lover",
    content: "AI 윤리 정말 중요하죠.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export const users: User[] = [
  {
    id: 1,
    nickname: "damso_user",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "AI와 토론을 사랑하는 Damso 커뮤니티 유저입니다.",
  },
];
