"use client";

import AssuranceStepper from "@/app/ui/steppers/assuranceStepper";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Box, Divider, Paper, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { NextPage } from "next";

const Assurance: NextPage = () => {
  return (
    <Paper elevation={3} sx={{
      width: {
        xs: '80%',
        lg: '45%',
      },
      height: 'fit-content',
      paddingY: '2rem',
      marginTop: '6.5rem',
      bgcolor: grey[200],
      borderRadius: '0.7rem'
    }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Typography variant="h3" color={blue[700]} gutterBottom>
          Assurance America
        <DirectionsCarIcon fontSize="large" sx={{
          mx: '1rem'
        }}/>
        <MapsHomeWorkIcon fontSize="large" sx={{
          mr: '1rem'
        }}/>
        </Typography>

        <Divider flexItem variant="middle"/>

        <AssuranceStepper />

      </Box>
    </Paper>
  );
};

export default Assurance;
