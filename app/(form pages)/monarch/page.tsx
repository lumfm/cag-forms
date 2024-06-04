"use client";

import MonarchStepper from "@/app/ui/steppers/monarchStepper";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Box, Divider, Paper, Typography } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { NextPage } from "next";

const Monarch: NextPage = () => {
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
        <Typography variant="h3" color={amber[800]} gutterBottom>
          Monarch National
        <MapsHomeWorkIcon fontSize="large" sx={{
          mx: '1rem'
        }}/>
        </Typography>

        <Divider flexItem variant="middle"/>

        <MonarchStepper />

      </Box>
    </Paper>
  );
};

export default Monarch;
