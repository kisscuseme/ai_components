"use client";

import { useState } from "react";
import { Box, Container, Grid, Typography, Tabs, Tab } from "@mui/material";
import { discussions, users } from "./data/dummyData";
import DiscussionList from "./components/DiscussionList";
import UserList from "./components/UserList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Page() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const latestDiscussions = [...discussions].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const popularDiscussions = discussions.filter(
    (discussion) => discussion.isPopular
  );

  const sortedUsers = [...users].sort(
    (a, b) => b.participationCount - a.participationCount
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        background:
          "linear-gradient(180deg, rgba(232, 245, 233, 0.2) 0%, rgba(232, 245, 233, 0.6) 100%)",
        borderRadius: 4,
        mt: 2,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -30,
            width: "100%",
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#81c784",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(129, 199, 132, 0.4)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              🌳
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            mt: 4,
            color: "#2e7d32",
            fontWeight: 600,
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          토론 트리
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: "#2e7d32",
              borderLeft: "4px solid #66bb6a",
              pl: 2,
              py: 1,
              bgcolor: "rgba(129, 199, 132, 0.1)",
              borderRadius: "0 4px 4px 0",
            }}
          >
            토론 목록
          </Typography>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "#a5d6a7",
              bgcolor: "#f1f8e9",
              borderRadius: "4px 4px 0 0",
              p: 1,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="discussion tabs"
              textColor="primary"
              indicatorColor="primary"
              sx={{
                "& .MuiTab-root": {
                  color: "#558b2f",
                  fontWeight: 500,
                  "&.Mui-selected": { color: "#2e7d32", fontWeight: 600 },
                },
                "& .MuiTabs-indicator": { bgcolor: "#66bb6a", height: 3 },
              }}
            >
              <Tab label="최신 토론" {...a11yProps(0)} />
              <Tab label="인기 토론" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <DiscussionList discussions={latestDiscussions} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <DiscussionList discussions={popularDiscussions} />
          </TabPanel>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            활발한 사용자
          </Typography>
          <UserList users={sortedUsers} />
        </Grid>
      </Grid>
    </Container>
  );
}
