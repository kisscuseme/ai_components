"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
import ForumIcon from "@mui/icons-material/Forum";

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
    router.push(`/sample13/profile/${id}`);
  };

  return (
    <Card
      sx={{
        borderRadius: 2,
        border: "1px solid #c8e6c9",
        bgcolor: "#f1f8e9",
        boxShadow: "0 4px 12px rgba(129, 199, 132, 0.2)",
      }}
    >
      <CardContent>
        <List sx={{ p: 0 }}>
          {users.map((user, index) => (
            <Box key={user.id}>
              <ListItem
                sx={{
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  borderRadius: 1,
                  "&:hover": {
                    bgcolor: "rgba(129, 199, 132, 0.1)",
                  },
                }}
                onClick={() => handleUserClick(user.id)}
              >
                <ListItemAvatar>
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{
                      width: 40,
                      height: 40,
                      border: "2px solid #81c784",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#2e7d32", fontWeight: 500 }}
                    >
                      {user.name}
                    </Typography>
                  }
                  secondary={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "#558b2f",
                      }}
                    >
                      <ForumIcon fontSize="small" />
                      <Typography variant="body2">
                        {user.participationCount}회 참여
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {index < users.length - 1 && (
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ borderColor: "#c8e6c9" }}
                />
              )}
            </Box>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UserList;
