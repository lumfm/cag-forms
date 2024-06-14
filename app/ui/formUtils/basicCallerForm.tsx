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
  // const methods = useForm({
  //   defaultValues: {
  //     policy_claim: "",
  //     firstName: "",
  //     lastName: "",
  //     phoneNumber: "",
  //     alternativeNumber: "",
  //     languagePref: "",
  //     languageOther: "",
  //     relationship: "",
  //     relationshipOther: "",
  //   },
  // });
  const {handleSubmit} = useFormContext()

  const onSubmit = (data: any) => {
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
          required={true}
          minLength={10}
          maxLength={12}
        />

        <CustomFormBasicInput
          name="firstName"
          label="First Name"
          required={'First Name is required'}
        />

        <CustomFormBasicInput
          name="lastName"
          label="Last Name"
          required={'Last Name is required'}
        />

        <CustomFormBasicInput
          name="phoneNumber"
          label="Phone Number"
          required={'Phone Number is required'}
        />

        <CustomFormBasicInput
          name="alternativeNumber"
          label="Alternative Number"
          required={false}
        />

        <LanguageDropdown
          name1="languagePref"
          name2="languageOther"
          required={'Language Preference is required'}
        />

        <RelationshipDropdown
          name1="relationship"
          name2="relationshipOther"
          required={'Relationship is required'}
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
