import {
  AccountCircleRounded,
  ArrowOutwardRounded,
  HomeRounded,
  LogoutRounded,
  Person,
  TextSnippetRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import Creditcard from "../components/Creditcard";
import { ProfileMenu } from "../components/ProfileMenu";
import { Sidemenu } from "../components/Sidemenu";

function HomeLayout() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  return (
    <div className="bg-white w-screen h-screen flex flex-row items-center">
      <Sidemenu
        onMenuOpen={() => {
          setMenuOpen(true);
        }}
      ></Sidemenu>
      <Outlet></Outlet>
      <Box
        sx={{ display: { xs: "none", lg: "flex" } }}
        className="w-1/4 h-full"
        padding={6}
        display="flex"
        flexDirection={"column"}
      >
        <ProfileMenu />
        <SwipeableDrawer
          anchor={"right"}
          sx={{
            "& .MuiPaper-root": {
              width: "300px",
              p: 4,
            },
          }}
          open={MenuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
        >
          <ProfileMenu></ProfileMenu>
        </SwipeableDrawer>
      </Box>
    </div>
  );
}

export default HomeLayout;
