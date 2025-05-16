"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { getUserById } from "../data/dummyData";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ForestIcon from "@mui/icons-material/Forest";

interface Discussion {
  id: number;
  title: string;
  createdAt: string;
  authorId: number;
  messageCount: number;
  isPopular: boolean;
}

interface DiscussionListProps {
  discussions: Discussion[];
}

const DiscussionList = ({ discussions }: DiscussionListProps) => {
  const router = useRouter();

  const handleDiscussionClick = (id: number) => {
    router.push(`/sample13/board/${id}`);
  };

  return (
    <Box>
      {discussions.length === 0 ? (
        <Typography variant="body1" sx={{ py: 4, textAlign: "center" }}>
          토론이 없습니다.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {discussions.map((discussion) => {
            const author = getUserById(discussion.authorId);
            return (
              <Grid size={{ xs: 12 }} key={discussion.id}>
                <Card
                  sx={{
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    borderRadius: 2,
                    border: "1px solid #c8e6c9",
                    position: "relative",
                    overflow: "visible",
                    bgcolor: "#f1f8e9",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 6px 12px rgba(129, 199, 132, 0.3)",
                      bgcolor: "#e8f5e9",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 20,
                      top: 0,
                      width: 2,
                      height: "100%",
                      bgcolor: "#81c784",
                      opacity: 0.6,
                    },
                  }}
                  onClick={() => handleDiscussionClick(discussion.id)}
                >
                  <Box
                    sx={{ position: "absolute", top: -10, left: 10, zIndex: 1 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: "#66bb6a",
                        width: 36,
                        height: 36,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      <ForestIcon fontSize="small" />
                    </Avatar>
                  </Box>
                  <CardContent sx={{ pl: 5 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          color: "#2e7d32",
                          fontWeight: 600,
                        }}
                      >
                        {discussion.title}
                      </Typography>
                      {discussion.isPopular && (
                        <Chip
                          label="인기"
                          size="small"
                          sx={{
                            height: 24,
                            bgcolor: "#81c784",
                            color: "white",
                            fontWeight: 500,
                            border: "1px solid #66bb6a",
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar
                          src={author?.avatar}
                          alt={author?.name}
                          sx={{ width: 24, height: 24 }}
                        />
                        <Typography variant="body2" sx={{ color: "#558b2f" }}>
                          {author?.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <ChatBubbleOutlineIcon
                            fontSize="small"
                            sx={{ color: "#558b2f" }}
                          />
                          <Typography variant="body2" sx={{ color: "#558b2f" }}>
                            {discussion.messageCount}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: "#558b2f" }}>
                          {discussion.createdAt}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default DiscussionList;
