import { NextResponse } from "next/server";

const mockPosts = [
  {
    id: 1,
    title: "Next.js 최적화 기법",
    content: "서버 사이드 렌더링과 정적 생성을 활용한 성능 개선 방법",
    author: "NextJS 전문가",
    likes: 89,
    comments: 23,
    category: "info",
  },
  // 추가 mock 데이터...
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockPosts,
  });
}
