"use client";

import { IntakeLossTypeInputs } from "@/app/lib/definitions";
import { Box, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import CustomMultiline from "../../customFormInput/customMultilineInput";
import PropertyLossType from "../../customFormInput/customPropertyLossType";

interface IIntakeProps {
  handleBack: () => void;
  handleNext: () => void;
}

const MonarchDescriptionIntake = ({ handleBack, handleNext }: IIntakeProps) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      description: "",
      loss_type: "",
    },
  });

  const onSubmit = (data: IntakeLossTypeInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <CustomMultiline
          name="description"
          label="Loss Description"
          control={control}
          rows={9}
          required={false}
        />

        <PropertyLossType name="loss_type" control={control} />

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
            onClick={handleNext}
            sx={{
              width: "50%",
              bgcolor: blueGrey[800],
              color: "white",
              ":hover": {
                bgcolor: blueGrey[500],
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

export default MonarchDescriptionIntake;
