"use client";

import * as React from "react";
import BasicCallerForm from "../formUtils/basicCallerForm";
import AssuranceDescriptionIntake from "../formUtils/assurance/assuranceDescriptionIntake";
import { Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import ConfirmationSave from "../formUtils/confirmationSave";
import { FormProvider, useForm } from "react-hook-form";
import { blue } from "@mui/material/colors";

export default function AssuranceStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm();

  const steps = ["Caller Information", "Description / Intake"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number): React.ReactNode => {
    switch (stepIndex) {
      case 0:
        return (
          <BasicCallerForm
            handleNext={handleNext}
            ButtonColor1={blue[800]}
            ButtonColor2={blue[600]}
            title={steps[0]}
          />
        );
      case 1:
        return (
          <AssuranceDescriptionIntake
            handleBack={handleBack}
            handleNext={handleNext}
            title={steps[1]}
          />
        );
      case 2:
        return (
          <ConfirmationSave ButtonColor1={"#2e7d32"} ButtonColor2={"#1976d2"} />
        );
    }
  };

  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"space-evenly"}
      marginTop={1}
    >
      <Paper
        elevation={1}
        sx={{
          padding: "1rem",
          width: "23rem",
          borderRadius: "1rem",
        }}
      >
        <FormProvider {...methods}>{getStepContent(activeStep)}</FormProvider>
      </Paper>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        bgcolor={"whitesmoke"}
        borderRadius={"1rem"}
        minWidth={"13rem"}
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
