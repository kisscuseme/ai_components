import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import { mockUsers } from "@/app/sample14/data/mock-data";
import Link from "next/link";

export default function UserList() {
  // Sort users by participation (number of posts + replies)
  const sortedUsers = [...mockUsers].sort(
    (a, b) => b.posts + b.replies - (a.posts + a.replies)
  );

  return (
    <Paper
      elevation={0}
      sx={{ border: 1, borderColor: "divider", borderRadius: 2 }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          인기 기여자
        </Typography>
        <List disablePadding>
          {sortedUsers.map((user, index) => (
            <Box key={user.id}>
              {index > 0 && <Divider component="li" />}
              <Link href={`/profile/${user.id}`} passHref>
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    px: 0,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={user.avatar} alt={user.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        게시물 {user.posts}개 • 댓글 {user.replies}개
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
            </Box>
          ))}
        </List>
      </Box>
    </Paper>
  );
}
