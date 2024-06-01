"use client";

import { IntakeReasonInputs } from "@/app/lib/definitions";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import ReasonForCall from "../customFormInput/customReasonForCall";
import CustomMultiline from "../customFormInput/customMultilineInput";

interface IIntakeProps {
  handleBack: () => void;
}

const AssuranceDescriptionIntake = ({ handleBack }: IIntakeProps) => {

  const { handleSubmit, control } = useForm({
    defaultValues: {
      reason: '',
      description: '',
      intake: '',
    },
  });

  const onSubmit = (data: IntakeReasonInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>

        <ReasonForCall name="reason" control={control} />

        <CustomMultiline name="description" label="Description" control={control} rows={3} required={false}/>
        <CustomMultiline name="intake" label="Intake / Status Note" control={control} rows={7} required={false}/>

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
