import React from "react";
import { Person } from "@mui/icons-material";
import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const InforBoxItem = (props) => {
  return (
    <Box
      className="bg-white rounded-xl shadow-md p-4 relative "
      sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
    >
      <Avatar
        variant="rounded"
        sx={{
          borderRadius: 3,
          bgcolor: "#5e37ff",
          color: "white",
          height: { xs: "50px", lg: "64px" },
          width: { xs: "50px", lg: "64px" },
          position: "relative",
          top: -27,
        }}
      >
        {props.icon}
      </Avatar>
      <Stack direction={"column"} className="inline-block" justifyItems={"flex-end"}>
        <Typography align="right" variant="body2" className="text-gray-500 font-thin">
          {props.text}
        </Typography>
        <Typography align="right" variant="h6" className="text-gray-600 font-semibold">
          {props.amount}
        </Typography>
      </Stack>
      <Divider
        orientation="horizontal"
        className=" w-[90%] absolute bottom-3 "
        sx={{ borderImage: `linear-gradient(to right, ${grey[200]}, ${grey[500]},${grey[200]}) 1`, borderWidth: 1 }}
      ></Divider>
    </Box>
  );
};

export default InforBoxItem;
