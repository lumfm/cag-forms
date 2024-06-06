"use client";

import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import { BasicInputs } from "@/app/lib/definitions";
import CustomFormBasicInput from "../customFormInput";
import LanguageDropdown from "../customFormInput/customLanguageDropdown";
import RelationshipDropdown from "../customFormInput/customAutoRelationshipDropdown";

interface IBasicFormProps {
  handleNext: () => void;
  ButtonColor1: string;
  ButtonColor2: string;
}

const BasicCallerForm = ({ handleNext, ButtonColor1, ButtonColor2 }: IBasicFormProps) => {
  const { handleSubmit } = useForm({
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
  const {control} = useFormContext()

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
          required={true}
        />

        <CustomFormBasicInput
          name="firstName"
          label="First Name"
          control={control}
          required={true}
        />

        <CustomFormBasicInput
          name="lastName"
          label="Last Name"
          control={control}
          required={true}
        />

        <CustomFormBasicInput
          name="phoneNumber"
          label="Phone Number"
          control={control}
          required={true}
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
          required={true}
        />

        <RelationshipDropdown
          name1="relationship"
          name2="relationshipOther"
          control={control}
          required={true}
        />

        <Button
          type="submit"
          sx={{
            width: "60%",
            bgcolor: ButtonColor1,
            color: "white",
            ":hover": {
              bgcolor: ButtonColor2,
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
