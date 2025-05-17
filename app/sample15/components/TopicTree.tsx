"use client";

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Box,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const dummyTree = [
  {
    id: 1,
    title: "AI 윤리",
    children: [
      { id: 11, title: "AI 규제" },
      { id: 12, title: "책임 있는 AI" },
    ],
  },
  {
    id: 2,
    title: "생성형 AI",
    children: [
      { id: 21, title: "ChatGPT" },
      { id: 22, title: "Stable Diffusion" },
    ],
  },
];

function TopicNode({ node }: { node: any }) {
  const [open, setOpen] = React.useState(false);
  const hasChildren = node.children && node.children.length > 0;
  return (
    <>
      <ListItem disablePadding sx={{ mb: 1, borderRadius: 2 }}>
        <ListItemButton
          onClick={() => setOpen((o) => !o)}
          sx={{ pl: 2, bgcolor: "background.paper" }}
        >
          <ListItemText primary={node.title} />
          {hasChildren ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </ListItemButton>
      </ListItem>
      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {node.children.map((child: any) => (
              <ListItem
                key={child.id}
                disablePadding
                sx={{ mb: 1, borderRadius: 2 }}
              >
                <ListItemButton sx={{ pl: 6, bgcolor: "background.paper" }}>
                  <ListItemText primary={child.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default function TopicTree() {
  return (
    <Box>
      <List>
        {dummyTree.map((node) => (
          <TopicNode key={node.id} node={node} />
        ))}
      </List>
    </Box>
  );
}
