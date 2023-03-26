import { AccountBalanceSharp, CurrencyRupeeSharp, Person, TrendingUpRounded } from "@mui/icons-material";
import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import InforBoxItem from "./InforBoxItem";

const InfoBoxes = () => {
  const data = useRouteLoaderData("home");
  console.log(data);
  return (
    <Grid container spacing={2} rowSpacing={3} alignItems="stretch">
      <Grid item xs={12} sm={6} md={4}>
        <InforBoxItem
          icon={<CurrencyRupeeSharp></CurrencyRupeeSharp>}
          text={"Capital"}
          amount={`$${data.capital}`}
        ></InforBoxItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <InforBoxItem
          icon={<AccountBalanceSharp></AccountBalanceSharp>}
          text={"Scheme Type"}
          amount={data.schemeType}
        ></InforBoxItem>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <InforBoxItem
          icon={<TrendingUpRounded></TrendingUpRounded>}
          text={"Profit %"}
          amount={`${data.profilPercentage}%`}
        ></InforBoxItem>
      </Grid>
    </Grid>
  );
};

export default InfoBoxes;
