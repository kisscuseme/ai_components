export interface User {
  id: string
  name: string
  avatar: string
  posts: number
  replies: number
  joinedAt: string
  bio?: string
}

export interface Message {
  id: string
  content: string
  author: User
  createdAt: string
}

export interface Discussion {
  id: string
  title: string
  content: string
  author: User
  createdAt: string
  tags?: string[]
  replies: Message[]
}
