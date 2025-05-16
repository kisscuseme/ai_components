import { Discussion, User } from "@/app/sample14/types";

// Mock user data with Korean names
export const mockUsers: User[] = [
  {
    id: "1",
    name: "김민준",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 15,
    replies: 42,
    joinedAt: "2023-01-15",
    bio: "기술과 토론에 열정적입니다. 제 지식을 공유하고 다른 사람들로부터 배우는 것을 좋아합니다.",
  },
  {
    id: "2",
    name: "이지은",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 8,
    replies: 36,
    joinedAt: "2023-02-20",
    bio: "UI/UX 디자인과 사용자 경험에 관심이 많은 소프트웨어 개발자입니다.",
  },
  {
    id: "3",
    name: "박서준",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 12,
    replies: 28,
    joinedAt: "2023-03-10",
  },
  {
    id: "4",
    name: "최수아",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 5,
    replies: 19,
    joinedAt: "2023-04-05",
  },
  {
    id: "5",
    name: "정도현",
    avatar: "/placeholder.svg?height=40&width=40",
    posts: 7,
    replies: 15,
    joinedAt: "2023-05-12",
  },
];

// Mock discussion data in Korean
export const mockDiscussions: Discussion[] = [
  {
    id: "1",
    title: "Next.js 14에서 가장 좋아하는 기능은 무엇인가요?",
    content:
      "Next.js 14를 탐색하고 있는데 새로운 기능들이 정말 인상적입니다. 지금까지 가장 마음에 드는 기능은 무엇인가요?",
    author: mockUsers[0],
    createdAt: "2023-11-10T12:00:00Z",
    tags: ["Next.js", "React"],
    replies: [
      {
        id: "101",
        content:
          "새로운 App Router가 정말 좋아요! 라우팅이 훨씬 쉽고 직관적이 되었어요.",
        author: mockUsers[1],
        createdAt: "2023-11-10T12:30:00Z",
      },
      {
        id: "102",
        content:
          "서버 컴포넌트는 저에게 게임 체인저예요. 클라이언트 측 JavaScript 없이 컴포넌트에서 직접 데이터를 가져올 수 있다는 것이 놀랍습니다.",
        author: mockUsers[2],
        createdAt: "2023-11-10T13:15:00Z",
      },
      {
        id: "103",
        content:
          "개선된 이미지 최적화가 환상적입니다. 반응형 이미지를 처리하는 것이 훨씬 쉬워졌어요.",
        author: mockUsers[3],
        createdAt: "2023-11-10T14:00:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "Material UI vs. Tailwind CSS - 어떤 것을 선호하시나요?",
    content:
      "새 프로젝트를 시작하면서 Material UI와 Tailwind CSS 중에서 결정하려고 합니다. 이 라이브러리들에 대한 경험을 공유해주세요.",
    author: mockUsers[1],
    createdAt: "2023-11-08T10:00:00Z",
    tags: ["CSS", "UI"],
    replies: [
      {
        id: "201",
        content:
          "저는 Material UI를 선호합니다. 사전 구축된 컴포넌트로 완전한 디자인 시스템을 제공하며 높은 수준의 커스터마이징이 가능하기 때문입니다.",
        author: mockUsers[0],
        createdAt: "2023-11-08T10:30:00Z",
      },
      {
        id: "202",
        content:
          "Tailwind CSS는 디자인에 더 많은 유연성과 제어를 제공합니다. 독특한 모양과 느낌을 만들고 싶다면 완벽한 선택입니다.",
        author: mockUsers[4],
        createdAt: "2023-11-08T11:15:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "React에서 상태 관리를 위한 모범 사례",
    content:
      "React 애플리케이션에서 상태 관리를 위한 추천 접근 방식은 무엇인가요? Context API, Redux, Zustand 또는 다른 것이 있을까요?",
    author: mockUsers[2],
    createdAt: "2023-11-05T15:00:00Z",
    tags: ["React", "상태 관리"],
    replies: [
      {
        id: "301",
        content:
          "최근에 Zustand를 사용하고 있는데 Redux보다 훨씬 간단하면서도 여전히 강력합니다.",
        author: mockUsers[0],
        createdAt: "2023-11-05T15:30:00Z",
      },
      {
        id: "302",
        content:
          "Context API는 더 간단한 애플리케이션에 적합하지만, 복잡한 상태를 가진 대규모 앱을 구축할 때는 여전히 Redux를 선택합니다.",
        author: mockUsers[1],
        createdAt: "2023-11-05T16:00:00Z",
      },
      {
        id: "303",
        content:
          "Jotai도 확인해볼 가치가 있어요! 상태 관리에 대한 원자적 접근 방식이 정말 흥미롭습니다.",
        author: mockUsers[3],
        createdAt: "2023-11-05T16:45:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "Next.js 앱에서 인증을 어떻게 처리하시나요?",
    content:
      "Next.js를 위한 인증 솔루션에 대한 추천을 찾고 있습니다. 여러분의 프로젝트에서는 무엇을 사용하고 계신가요?",
    author: mockUsers[3],
    createdAt: "2023-11-02T09:00:00Z",
    tags: ["Next.js", "인증"],
    replies: [
      {
        id: "401",
        content:
          "NextAuth.js(현재 Auth.js)가 제가 주로 사용하는 솔루션입니다. 설정이 쉽고 많은 제공업체를 기본적으로 지원합니다.",
        author: mockUsers[0],
        createdAt: "2023-11-02T09:30:00Z",
      },
      {
        id: "402",
        content:
          "최근에 Clerk를 사용하고 있는데 정말 좋은 경험이었습니다. 그들의 UI 컴포넌트는 정말 세련되어 있어요.",
        author: mockUsers[2],
        createdAt: "2023-11-02T10:15:00Z",
      },
    ],
  },
  {
    id: "5",
    title: "React를 위한 가장 좋아하는 UI 컴포넌트 라이브러리는?",
    content:
      "React 프로젝트를 위한 가장 좋아하는 UI 컴포넌트 라이브러리는 무엇인가요? 접근성과 커스터마이징 옵션이 좋은 것을 찾고 있습니다.",
    author: mockUsers[4],
    createdAt: "2023-10-28T14:00:00Z",
    tags: ["React", "UI"],
    replies: [
      {
        id: "501",
        content:
          "Material UI가 제일 좋아요. 포괄적이고, 문서화가 잘 되어 있으며, 높은 수준의 커스터마이징이 가능합니다.",
        author: mockUsers[1],
        createdAt: "2023-10-28T14:30:00Z",
      },
      {
        id: "502",
        content:
          "최근에 Chakra UI를 즐겁게 사용하고 있어요. 접근성 기능이 내장되어 있고 컴포넌트 API가 좋습니다.",
        author: mockUsers[0],
        createdAt: "2023-10-28T15:00:00Z",
      },
      {
        id: "503",
        content:
          "Radix UI + Tailwind는 완전히 커스터마이징할 수 있는 스타일이 없는 접근성 있는 컴포넌트를 원한다면 강력한 조합입니다.",
        author: mockUsers[2],
        createdAt: "2023-10-28T15:45:00Z",
      },
    ],
  },
  {
    id: "6",
    title: "Next.js 성능 최적화 전략",
    content:
      "Next.js 애플리케이션의 성능을 최적화하기 위해 어떤 전략을 사용하시나요?",
    author: mockUsers[0],
    createdAt: "2023-10-25T11:00:00Z",
    tags: ["Next.js", "성능"],
    replies: [
      {
        id: "601",
        content:
          "next/image를 사용한 이미지 최적화는 필수입니다. LCP를 크게 개선하고 레이아웃 이동을 방지합니다.",
        author: mockUsers[3],
        createdAt: "2023-10-25T11:30:00Z",
      },
      {
        id: "602",
        content:
          "데이터 가져오기에 서버 컴포넌트를 사용하는 것이 제 앱 성능에 게임 체인저였습니다.",
        author: mockUsers[1],
        createdAt: "2023-10-25T12:15:00Z",
      },
    ],
  },
];
