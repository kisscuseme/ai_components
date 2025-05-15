// 게시판 데이터 모델 및 임시 데이터

// 게시글 타입 정의
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  authorId: number;
  createdAt: string;
  views: number;
  likes: number;
  category: string;
  image?: string;
}

// 사용자 타입 정의
export interface User {
  id: number;
  name: string;
  profileImage: string;
  postCount: number;
}

// 댓글 타입 정의
export interface Comment {
  id: number;
  postId: number;
  content: string;
  author: string;
  authorId: number;
  createdAt: string;
}

// 임시 사용자 데이터
export const users: User[] = [
  {
    id: 1,
    name: "user1",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    postCount: 15,
  },
  {
    id: 2,
    name: "user2",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    postCount: 12,
  },
  {
    id: 3,
    name: "user3",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    postCount: 10,
  },
  {
    id: 4,
    name: "user4",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    postCount: 8,
  },
  {
    id: 5,
    name: "user5",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    postCount: 7,
  },
  {
    id: 6,
    name: "user6",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    postCount: 5,
  },
  {
    id: 7,
    name: "user7",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    postCount: 3,
  },
];

// 임시 게시글 데이터
export const posts: Post[] = [
  {
    id: 1,
    title: "자유 게시판의 첫 번째 게시글",
    content:
      "이것은 자유 게시판의 첫 번째 게시글입니다. 자유롭게 의견을 나눠보세요.",
    author: "user1",
    authorId: 1,
    createdAt: "2024-06-01 14:30",
    views: 123,
    likes: 15,
    category: "free",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "유머 게시판의 재미있는 이야기",
    content: "오늘 정말 재미있는 일이 있었어요. 함께 웃어보아요!",
    author: "user2",
    authorId: 2,
    createdAt: "2024-06-01 15:45",
    views: 98,
    likes: 22,
    category: "humor",
    image:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "정보 게시판: 최신 기술 트렌드",
    content:
      "최근 IT 업계의 트렌드에 대해 알아보았습니다. 유용한 정보를 공유합니다.",
    author: "user3",
    authorId: 3,
    createdAt: "2024-06-02 09:15",
    views: 156,
    likes: 31,
    category: "info",
  },
  {
    id: 4,
    title: "자유 게시판: 취미 공유",
    content: "여러분의 취미는 무엇인가요? 저는 최근 등산을 시작했습니다.",
    author: "user4",
    authorId: 4,
    createdAt: "2024-06-02 11:30",
    views: 87,
    likes: 12,
    category: "free",
  },
  {
    id: 5,
    title: "유머 게시판: 웃긴 사진 모음",
    content: "일상에서 찍은 웃긴 사진들을 모아봤습니다. 함께 웃어요!",
    author: "user5",
    authorId: 5,
    createdAt: "2024-06-03 13:20",
    views: 210,
    likes: 45,
    category: "humor",
    image:
      "https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "정보 게시판: 건강 관리 팁",
    content: "일상에서 쉽게 실천할 수 있는 건강 관리 팁을 공유합니다.",
    author: "user6",
    authorId: 6,
    createdAt: "2024-06-03 16:45",
    views: 132,
    likes: 28,
    category: "info",
  },
  {
    id: 7,
    title: "자유 게시판: 여행 계획",
    content: "다음 달에 제주도 여행을 계획 중입니다. 추천 장소가 있을까요?",
    author: "user7",
    authorId: 7,
    createdAt: "2024-06-04 10:10",
    views: 76,
    likes: 18,
    category: "free",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "유머 게시판: 재미있는 이야기",
    content: "어제 있었던 재미있는 에피소드를 공유합니다.",
    author: "user1",
    authorId: 1,
    createdAt: "2024-06-04 14:25",
    views: 92,
    likes: 20,
    category: "humor",
  },
  {
    id: 9,
    title: "정보 게시판: 금융 지식",
    content: "초보자를 위한 금융 지식과 투자 팁을 정리했습니다.",
    author: "user2",
    authorId: 2,
    createdAt: "2024-06-05 09:30",
    views: 145,
    likes: 35,
    category: "info",
  },
  {
    id: 10,
    title: "자유 게시판: 음악 추천",
    content: "요즘 즐겨듣는 음악을 추천합니다. 여러분의 추천곡도 알려주세요!",
    author: "user3",
    authorId: 3,
    createdAt: "2024-06-05 15:50",
    views: 88,
    likes: 22,
    category: "free",
  },
];

// 임시 댓글 데이터
export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    content: "정말 좋은 글이네요!",
    author: "user2",
    authorId: 2,
    createdAt: "2024-06-01 15:00",
  },
  {
    id: 2,
    postId: 1,
    content: "공감합니다. 저도 비슷한 경험이 있어요.",
    author: "user3",
    authorId: 3,
    createdAt: "2024-06-01 15:30",
  },
  {
    id: 3,
    postId: 2,
    content: "정말 재미있네요! ㅋㅋㅋ",
    author: "user1",
    authorId: 1,
    createdAt: "2024-06-01 16:00",
  },
  {
    id: 4,
    postId: 3,
    content: "유용한 정보 감사합니다.",
    author: "user4",
    authorId: 4,
    createdAt: "2024-06-02 10:00",
  },
  {
    id: 5,
    postId: 3,
    content: "추가 정보도 있으면 공유해주세요!",
    author: "user5",
    authorId: 5,
    createdAt: "2024-06-02 11:00",
  },
  {
    id: 6,
    postId: 5,
    content: "정말 웃겨요! ㅋㅋㅋ",
    author: "user6",
    authorId: 6,
    createdAt: "2024-06-03 14:00",
  },
  {
    id: 7,
    postId: 7,
    content: "제주도 서쪽 해변이 정말 아름다워요. 추천합니다!",
    author: "user2",
    authorId: 2,
    createdAt: "2024-06-04 11:00",
  },
  {
    id: 8,
    postId: 7,
    content: "성산일출봉도 꼭 가보세요!",
    author: "user3",
    authorId: 3,
    createdAt: "2024-06-04 12:00",
  },
];

// 최신글 가져오기
export const getLatestPosts = (count: number = 5): Post[] => {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, count);
};

// 인기글 가져오기
export const getPopularPosts = (count: number = 5): Post[] => {
  return [...posts].sort((a, b) => b.likes - a.likes).slice(0, count);
};

// 카테고리별 게시글 가져오기
export const getPostsByCategory = (category: string): Post[] => {
  return posts.filter((post) => post.category === category);
};

// 특정 게시글 가져오기
export const getPostById = (id: number): Post | undefined => {
  return posts.find((post) => post.id === id);
};

// 특정 게시글의 댓글 가져오기
export const getCommentsByPostId = (postId: number): Comment[] => {
  return comments.filter((comment) => comment.postId === postId);
};

// 사용자 목록 가져오기 (게시물 작성 순)
export const getUsersByPostCount = (count: number = 7): User[] => {
  return [...users].sort((a, b) => b.postCount - a.postCount).slice(0, count);
};
