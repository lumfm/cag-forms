"use client";

import AssuranceStepper from "@/app/ui/steppers/assuranceStepper";
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
        </Typography>

        <Divider flexItem variant="middle"/>

        <AssuranceStepper />

      </Box>
    </Paper>
  );
};

export default Assurance;
