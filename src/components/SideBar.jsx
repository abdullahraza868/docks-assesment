import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { routes } from "../routes";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          background:
            "linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)",
          color: "white",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          p: 5,
        }}
      >
        <img
          src="src/assets/Logo.png"
          width={60}
          style={{ position: "absolute", top: 30, left: 1 }}
        />
        <Typography display="flex" fontWeight="bold" marginLeft={2}>
          Receh<Typography color="#6F6C99">tok</Typography>
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
        }}
      >
        <List>
          {routes.map((route, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={route.icon} height={25} width={25} />
                </ListItemIcon>
                <ListItemText
                  primary={route.title}
                  sx={{ color: "#6F6C99", fontSize: "3px" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Drawer>
  );
};

export default SideBar;
