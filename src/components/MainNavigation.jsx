import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { alpha, Container, Divider, Menu, MenuItem, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";

const LinkMarked = styled("span")(({ theme }) => ({
  height: 2,
  width: 0,
  backgroundColor: "#2cc3c5",
  position: "absolute",
  bottom: -2,
  left: "50%",
  transform: "translate(-50%,-50%)",
  transition: theme.transitions.create("width"),
}));
const MainNavigation = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = ["Home", "Schemes", "Team"];
  return (
    <AppBar position="sticky" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ bgcolor: "none", justifyContent: "space-between", display: "flex" }}>
          <IconButton disableRipple>
            <img className="h-10" src={"https://dr-rise.com/wp-content/uploads/2023/03/Logo_Light-300x118.png"}></img>
          </IconButton>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuRounded />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "90%",
                  maxWidth: "400px",
                  borderRadius: 3,
                },
                "& .MuiMenuItem-root": {
                  textAlign: "center",
                  justifyContent: "center",
                  // border: 0,
                  // borderImage: `linear-gradient(to right, ${grey[200]}, ${grey[500]},${grey[200]}) 1`,
                  // borderBottomWidth: "1px",
                  "&:active ,&:hover": {
                    backgroundColor: alpha("#ccf0f0", 0.8),
                  },
                },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  // slotProps={{
                  //   root: {
                  //     backgroundColor: "black",
                  //     className: "border-b-2 border-gray-800",
                  //   },
                  // }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{ flexGrow: 1, justifyContent: "flex-end", display: { xs: "none", md: "flex" } }}
            className="space-x-5"
          >
            {pages.map((page) => (
              <Button
                key={page}
                className="capitalize text-lg font-thin text-black font-sans"
                sx={{
                  my: 2,
                  fontWeight: 100,
                  color: grey[700],
                  display: "block",
                  "&:hover": {
                    color: "#2cc3c5",
                    "& .MuiImageMarked-root": {
                      width: "80%",
                    },
                  },
                }}
              >
                {page}
                <LinkMarked className="MuiImageMarked-root" />
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;
