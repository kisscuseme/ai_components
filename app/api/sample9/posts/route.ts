import { NextResponse } from "next/server";

let posts = [
  {
    id: 1,
    title: "첫 번째 게시물",
    content: "Next.js와 MUI를 활용한 게시판 개발",
    author: "관리자",
    category: "free",
    likes: 15,
    comments: 5,
    createdAt: new Date().toISOString(),
  },
];

export async function GET() {
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newPost = {
    id: posts.length + 1,
    ...body,
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: 0,
  };
  posts.push(newPost);
  return NextResponse.json(newPost);
}
