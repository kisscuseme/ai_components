"use client";

import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  avatar: string;
  participationCount: number;
}

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  const router = useRouter();

  const handleUserClick = (id: number) => {
    router.push(`/sample12/profile/${id}`);
  };

  return (
    <Paper elevation={1} sx={{ borderRadius: 2, overflow: "hidden" }}>
      <List sx={{ p: 0 }}>
        {users.map((user, index) => (
          <ListItem
            key={user.id}
            alignItems="center"
            onClick={() => handleUserClick(user.id)}
            sx={{
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
              borderBottom:
                index < users.length - 1
                  ? "1px solid rgba(0, 0, 0, 0.12)"
                  : "none",
            }}
          >
            <ListItemAvatar>
              <Avatar src={user.avatar} alt={user.name} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <Box
                  component="span"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    참여 횟수: {user.participationCount}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default UserList;
