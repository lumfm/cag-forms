"use client";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { SubmitHandler, useForm } from "react-hook-form";
import { BasicInputs } from "@/app/lib/definitions";
import CustomFormBasicInput from "../customFormInput";
import LanguageDropdown from "../customFormInput/customLanguageDropdown";
import RelationshipDropdown from "../customFormInput/customAutoRelationshipDropdown";

interface IBasicFormProps {
  handleNext: () => void;
  activeStep: number;
}

const BasicCallerForm = ({ handleNext }: IBasicFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      policy_claim: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      alternativeNumber: "",
      languagePref: "",
      languageOther: "",
      relationship: "",
      relationshipOther: "",
    },
  });

  const onSubmit = (data: BasicInputs) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
      >
        <CustomFormBasicInput
          name="policy_claim"
          label="Policy / Claim #"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="firstName"
          label="First Name"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="lastName"
          label="Last Name"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="phoneNumber"
          label="Phone Number"
          control={control}
          required={false}
        />

        <CustomFormBasicInput
          name="alternativeNumber"
          label="Alternative Number"
          control={control}
          required={false}
        />

        <LanguageDropdown
          name1="languagePref"
          name2="languageOther"
          control={control}
        />

        <RelationshipDropdown
          name1="relationship"
          name2="relationshipOther"
          control={control}
        />

        <Button
          type="submit"
          sx={{
            width: "60%",
            bgcolor: green[800],
            color: "white",
            ":hover": {
              bgcolor: green[500],
            },
          }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
};

export default BasicCallerForm;
