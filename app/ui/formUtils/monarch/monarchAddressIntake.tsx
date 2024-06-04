"use client";

import { MonarchAddressInputs } from "@/app/lib/definitions";
import { Box, Button, TextField } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import CustomFormBasicInput from "../../customFormInput";

interface IIntakeProps {
  handleBack: () => void;
  handleNext: () => void;
}

const MonarchAddressIntake = ({ handleBack, handleNext }: IIntakeProps) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      address1: "",
      address2: "",
      zip_code: "",
      city: "",
      county: "",
      state: "",
    },
  });

  const onSubmit = (data: MonarchAddressInputs) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <CustomFormBasicInput
          name="email"
          label="Email"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="address1"
          label="Address 1"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="address2"
          label="Address 2"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="zip_code"
          label="Zip Code"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="city"
          label="City"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="county"
          label="County"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="state"
          label="State"
          control={control}
          required={false}
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
            sx={{
              width: "50%",
              bgcolor: blueGrey[800],
              color: "white",
              ":hover": {
                bgcolor: blueGrey[500],
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default MonarchAddressIntake;
