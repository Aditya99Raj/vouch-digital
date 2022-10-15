import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import { drawerWidth } from "../../constants/constants";
const styles = {
  activeTab: {
    backgroundColor: "#153AC7",
    color: "white",
    borderRadius:'10px'
  },
  tab: {
    backgroundColor: "white",
    color: "black",
    borderRadius:'10px'
  },
};
const AppDrawer = ({ handleAdd, btnIndex }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              View Clients
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Typography>Company Name</Typography>
          <Divider />
          <List>
            {[
              {
                name: "View Clients",
                icon: <InboxIcon />,
              },
              {
                name: "Add Clients",
                icon: <MailIcon />,
              },
            ].map(({ name, icon }, index) => (
              <ListItem key={name} disablePadding>
                <ListItemButton
                  style={btnIndex === index ? styles.activeTab : styles.tab}
                  onClick={handleAdd(name, index)}
                >
                  <ListItemIcon onClick={""}>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default AppDrawer;
