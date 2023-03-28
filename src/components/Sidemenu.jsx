import { HomeRounded, LogoutRounded, Person, TextSnippetRounded } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, redirect, useNavigate, useNavigation } from "react-router-dom";
import auth from "../FirebaseConfig";

export const Sidemenu = (props) => {
  const navigation = useNavigate();
  function Signouthelper() {
    signOut(auth)
      .then(() => {
        console.log("logged out");
        return navigation("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Box sx={{ display: { xs: "none", lg: "flex" } }} className="w-1/5 h-full border-1 items-start flex-col p-10">
        <img className="h-10" src={"https://dr-rise.com/wp-content/uploads/2023/03/Logo_Light-300x118.png"}></img>
        <Stack direction={"column"} sx={{ mt: 10 }} className="space-y-4">
          <Button
            startIcon={<HomeRounded />}
            className="text-[#5E37FF] font-semibold text-md justify-start capitalize"
            component={Link}
            to="/home"
            sx={{
              color: "#5E37FF",
              p: 2,
              py: 1,
              borderRadius: 5,
              "& .MuiButton-startIcon": {
                mr: `10px`,
              },
              "& .MuiTouchRipple-root": {
                borderRadius: 5,
              },
            }}
          >
            Overview
          </Button>
          <Button
            onClick={Signouthelper}
            startIcon={<LogoutRounded />}
            className="text-[#b0b1d5] justify-start capitalize"
            // component={<NavLink />}
            sx={{
              p: 2,
              py: 1,
              borderRadius: 5,
              "& .MuiButton-startIcon": {
                mr: `10px`,
              },
              "& .MuiTouchRipple-root": {
                borderRadius: 5,
              },
            }}
          >
            LogOut
          </Button>
          <Button
            startIcon={<TextSnippetRounded />}
            className="text-[#b0b1d5] justify-start capitalize"
            // component={<NavLink />}
            sx={{
              p: 2,
              py: 1,
              borderRadius: 5,
              "& .MuiButton-startIcon": {
                mr: `15px`,
              },
              "& .MuiTouchRipple-root": {
                borderRadius: 5,
              },
            }}
          >
            Documents
          </Button>
        </Stack>
        <Box sx={{ mt: "", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography align="center" variant="body2" className="font-sans font-semibold text-gray-500">
            Copyright © 2023 Dr. Rise
          </Typography>
          <Typography align="center" variant="body2" className="font-sans font-semibold text-gray-500">
            Powered by Dr. Rise
          </Typography>
        </Box>
      </Box>
      <AppBar
        sx={{
          display: { xs: "block", lg: "none" },

          width: "300px",
          borderRadius: 4,
          transform: "translate(-50%,0%)",
          top: "auto",
          left: "50%",
          bottom: "30px",
          height: "64px",
          color: grey[300],
        }}
        position="fixed"
        className="bg-white shadow-sm"
      >
        <Toolbar className="h-full justify-between items-center py-0 text-gray-400">
          <IconButton color="#5e37ff" sx={{ color: "#5e37ff" }} component={Link} to="/home">
            <HomeRounded />
          </IconButton>
          <IconButton onClick={Signouthelper}>
            <LogoutRounded />
          </IconButton>
          <IconButton>
            <TextSnippetRounded />
          </IconButton>
          <IconButton
            onClick={() => {
              props.onMenuOpen();
            }}
          >
            <Person></Person>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
