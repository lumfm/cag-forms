"use client";

import { IntakeReasonInputs } from "@/app/lib/definitions";
import { Box, Button, } from "@mui/material";
import { green } from "@mui/material/colors";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import ReasonForCall from "../../customFormInput/customReasonForCall";
import { useState } from "react";
import CustomMultilineDescription from "../../customFormInput/customMultilineDescription";
import CustomMultilineIntake from "../../customFormInput/customMultilineIntake";

interface IIntakeProps {
  handleBack: () => void;
  handleNext: () => void;
}

const AssuranceDescriptionIntake = ({
  handleBack,
  handleNext,
}: IIntakeProps) => {
  const [reason, setReason] = useState("");

  const { handleSubmit, reset } = useForm({
    defaultValues: {
      description: "",
      reason: "",
      intake: "",
    },
  });

  const {control, getValues} = useFormContext()

  const onSubmit : SubmitHandler<IntakeReasonInputs> = (data) => {
    console.log(data);
  };

  const handleChange = (e: any) =>{
    setReason(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <ReasonForCall name="reason" control={control} handleChange={handleChange} />

        {reason !== "status" && (
          <CustomMultilineDescription
            name="description"
            label="Description"
            control={control}
            rows={3}
            required={false}
          />
        )}

        <CustomMultilineIntake
          name="intake"
          label="Intake / Status Note"
          control={control}
          rows={8}
          required={false}
          reason={reason}
        />

        <Box display={"flex"} justifyContent={"space-around"} gap={"1rem"}>
          <Button
            onClick={handleBack}
            sx={{
              width: "40%",
            }}
          >
            Back
          </Button>
          <Button
            type="submit"
            onClick={() =>{
              handleNext();
              reset();
              console.log(getValues())
            }}
            sx={{
              width: "50%",
              bgcolor: green[800],
              color: "white",
              ":hover": {
                bgcolor: green[500],
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default AssuranceDescriptionIntake;
