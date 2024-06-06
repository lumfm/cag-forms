"use client";

import StarStepper from "@/app/ui/steppers/starStepper";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Box, Divider, Paper, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { NextPage } from "next";

const StarCasualty: NextPage = () => {
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
        <Typography variant="h3" color={green[600]} gutterBottom>
          Star Casualty
        <DirectionsCarIcon fontSize="large" sx={{
          mx: '1rem'
        }}/>
        </Typography>

        <Divider flexItem variant="middle"/>

        <StarStepper />

      </Box>
    </Paper>
  );
};

export default StarCasualty;
