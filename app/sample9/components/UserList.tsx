"use client";

// 사용자 리스트(UserList) 컴포넌트
// 게시물 작성 순으로 사용자 목록을 표시
import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

interface User {
  id: number;
  name: string;
  postCount: number;
  avatar?: string;
}

export default function UserList() {
  // 실제 데이터 fetch/SSR/ISR 적용 위치(임시 데이터)
  const users: User[] = [
    {
      id: 1,
      name: "user1",
      postCount: 12,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "user2",
      postCount: 8,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "user3",
      postCount: 5,
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "user4",
      postCount: 3,
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];

  return (
    <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
      <List sx={{ p: 0 }}>
        {users.map((user, index) => (
          <React.Fragment key={user.id}>
            <ListItem sx={{ py: 1.5 }}>
              <ListItemAvatar>
                <Avatar src={user.avatar} alt={user.name} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    게시글 {user.postCount}개
                  </Typography>
                }
              />
            </ListItem>
            {index < users.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
