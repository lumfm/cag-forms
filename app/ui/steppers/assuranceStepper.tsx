'use client'

import * as React from "react";
import BasicCallerForm from "../formUtils/basicCallerForm";
import AssuranceDescriptionIntake from "../formUtils/assuranceDescriptionIntake";
import { Box, Button, Paper, Step, StepLabel, Stepper } from "@mui/material";

export default function AssuranceStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ["Caller Information", "Description / Intake"];

  const handleNext = () => {
    activeStep === 0 && setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number): React.ReactNode => {
    switch (stepIndex) {
      case 0:
        return <BasicCallerForm handleNext = {handleNext} activeStep = {activeStep}/>;
      case 1:
        return (
          <AssuranceDescriptionIntake handleBack={handleBack}/>
        );
    }
  };

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"space-evenly"}
      marginTop={5}
    >
      <Paper elevation={1} sx={{
        padding: '1rem',
        width: '20rem',
        borderRadius: '1rem'
      }}>
        {getStepContent(activeStep)}
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
        maxHeight={"12rem"}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
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