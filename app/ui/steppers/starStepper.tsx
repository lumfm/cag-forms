"use client";

import * as React from "react";
import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import ConfirmationSave from "../formUtils/confirmationSave";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MonarchAddressIntake from "../formUtils/monarch/monarchAddressIntake";
import MonarchDescriptionIntake from "../formUtils/monarch/monarchDescriptionIntake";
import BasicCallerAutoForm from "../formUtils/basicCallerAutoForm";

const stepStyle = {
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#43a047",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "#43a047",
    },
  },
};

export default function StarStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ["Caller Information", "Named Insured / IV Driver", "IV", "CV Owner / Driver", "CV", "Additional Info", "Injured", "Accident Description"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number): React.ReactNode => {
    switch (stepIndex) {
      case 0:
        return <BasicCallerAutoForm handleNext={handleNext} ButtonColor1="#388e3c" ButtonColor2="#66bb6a"/>;
      case 1:
        return (
          <MonarchAddressIntake
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <MonarchDescriptionIntake
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 3:
        return <ConfirmationSave ButtonColor1="#388e3c" ButtonColor2="#66bb6a"/>;
    }
  };

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"space-evenly"}
      marginTop={5}
    >
      <Paper
        elevation={1}
        sx={{
          padding: "1rem",
          width: "20rem",
          borderRadius: "1rem",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {getStepContent(activeStep)}
        </LocalizationProvider>
      </Paper>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        bgcolor={"whitesmoke"}
        borderRadius={"1rem"}
        minWidth={"14rem"}
        paddingY={"2rem"}
        height={"fit"}
      >
        <Stepper activeStep={activeStep} orientation="vertical" sx={stepStyle}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
}
