import { AccountCircleRounded, ArrowOutwardRounded } from "@mui/icons-material";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { useLoaderData } from "react-router-dom";

export const ProfileMenu = () => {
  const data = useLoaderData();
  return (
    <>
      <Box>
        <AccountCircleRounded fontSize="large" sx={{ color: grey[500], fontSize: 70, mb: 2 }}></AccountCircleRounded>

        <Typography variant="h5" className="font-semibold text-black">
          {data.username.split(" ")[0]}
        </Typography>
        <Typography variant="h5" className="font-semibold text-gray-700">
          {data.username.split(" ")[1]}
        </Typography>
        <Typography variant="body1" className="text-gray-500">
          client
        </Typography>
        <Typography variant="body2" className=" mt-2 text-gray-700">
          {data.email}
        </Typography>
      </Box>
      <Box sx={{ mt: 5, w: 10, h: 10, borderRadius: 5 }} className="bg-gray-100 h-40"></Box>
      <Box className="transactions" sx={{ mt: "auto", mb: 5 }}>
        <Typography variant="h6" className="font-semibold text-gray-700">
          Transactions
        </Typography>
        <List>
          <ListItem disableGutters alignItems="flex-start">
            <ListItemAvatar>
              <Avatar variant="rounded" sx={{ borderRadius: 4, bgcolor: "#ebfaf0", color: "#77e09e" }}>
                <ArrowOutwardRounded />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${data.schemeType}`}
              primaryTypographyProps={{ className: "text-sm font-semibold text-gray-700" }}
              secondary="invested"
            ></ListItemText>
            <Typography className=" text-sm font-semibold text-gray-700">{`+$${
              parseInt(data.capital.replace(/,/g, "")) / 1000
            }K`}</Typography>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
