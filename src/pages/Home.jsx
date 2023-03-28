import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";

import Creditcard from "../components/Creditcard";
import InfoBoxes from "../components/InfoBoxes";
import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRouteLoaderData } from "react-router-dom";
function Home() {
  const data = useRouteLoaderData("home");
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartdata = {
    labels: ["Investment", "Profit"],
    datasets: [
      {
        label: "invested",
        data: [!isNaN(data?.capital) ? data?.capital : parseInt(data?.capital.replace(/,/g, "")), data?.profitAmount],
        offset: 6,
        borderRadius: 6,
        backgroundColor: ["#d7d7f1", "#5E37FF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1 h-[95%]  bg-[url('https://dr-rise.com/wp-content/uploads/2021/01/pharma-company-template-hero-bg.svg')] bg-center bg-cover overflow-x-hidden overflow-y-auto  bg-[#f6f8fe] rounded-[60px]  p-10 space-y-6">
      <h1 className="font-semibold text-4xl">Portfolio</h1>
      <InfoBoxes></InfoBoxes>
      <Grid container spacing={3} justifyItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <Creditcard></Creditcard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} justifyContent="center" display={"flex"}>
          <Box
            sx={{ width: "250px", height: "300px" }}
            className="bg-white relative rounded-2xl shadow-lg p-3 inline-block"
          >
            <Typography variant="h5" className="font-semibold text-gray-500">
              Overview
            </Typography>
            <Box
              position={"absolute"}
              sx={{
                left: "50%",
                top: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transform: "translate(-50%,-50%)",
                // width: "10px",
                // height: "10px",
                // bgcolor: "#5E37FF",
              }}
            >
              <Typography className=" text-lg font-bold text-gray-800">{`₹${
                data
                  ? !isNaN(data?.capital)
                    ? data?.capital / 1000
                    : parseInt(data?.capital.replace(/,/g, "")) / 1000
                  : null
              }K`}</Typography>
              <Typography
                align="center"
                className="bg-[#5E37FF] w-fit font-normal text-center text-xs rounded-md p-1 px-2  text-white"
              >
                {`+${data?.profilPercentage}%`}
              </Typography>
            </Box>
            <Doughnut
              data={chartdata}
              options={{
                aspectRatio: 1,
                plugins: {
                  tooltip: {
                    enabled: true,
                  },
                  legend: {
                    position: "bottom",
                    labels: {
                      padding: 4,
                      usePointStyle: true,
                      pointStyle: "rectRounded",
                      pointStyleWidth: 30,
                      boxWidth: 35,
                      boxHeight: 10,
                      borderRadius: 110,
                    },
                  },
                },
                cutout: "90%",
                radius: 80,
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <div className="bg-[#5e37ff] w-1/2"></div>
    </div>
  );
}

export default Home;
