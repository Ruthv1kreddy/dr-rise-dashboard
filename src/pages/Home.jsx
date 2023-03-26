import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";

import Creditcard from "../components/Creditcard";
import InfoBoxes from "../components/InfoBoxes";
import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartdata = {
    labels: ["invested", "profit"],
    datasets: [
      {
        label: "invested",
        data: [1200, 1900],
        offset: 6,
        borderRadius: 6,
        backgroundColor: ["#d7d7f1", "#5E37FF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex-1 h-[95%] overflow-x-hidden overflow-y-auto  bg-[#f6f8fe] rounded-[60px]  p-10 space-y-6">
      <h1 className="font-semibold text-4xl">Overview</h1>
      <InfoBoxes></InfoBoxes>
      <Grid container spacing={3} justifyItems="center">
        <Grid item xs={12} md={6}>
          <Creditcard></Creditcard>
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center" display={"flex"}>
          <Box sx={{ width: "250px", height: "300px" }} className="bg-white rounded-2xl shadow-lg p-3 inline-block">
            <Typography variant="h5" className="font-semibold text-gray-500">
              Efficiency
            </Typography>
            <Doughnut
              data={chartdata}
              options={{
                aspectRatio: 1,
                plugins: {
                  tooltip: {
                    enabled: false,
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
