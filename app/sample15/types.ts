export interface Topic {
  id: number;
  title: string;
  parentId?: number;
  subtopics?: Topic[];
}

export interface Thread {
  id: number;
  topicId: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
}

export interface Comment {
  id: number;
  threadId: number;
  user: string;
  content: string;
  image?: string;
}

export interface User {
  id: number;
  nickname: string;
  image: string;
  bio?: string;
}
