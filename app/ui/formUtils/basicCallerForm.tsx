"use client";

import { Box, Button, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import CustomFormBasicInput from "../customFormInput";
import LanguageDropdown from "../customFormInput/customLanguageDropdown";
import RelationshipDropdown from "../customFormInput/customAutoRelationshipDropdown";
import { blue } from "@mui/material/colors";

interface IBasicFormProps {
  handleNext: () => void;
  ButtonColor1: string;
  ButtonColor2: string;
  title: string;
}

const BasicCallerForm = ({
  handleNext,
  ButtonColor1,
  ButtonColor2,
  title,
}: IBasicFormProps) => {
  const { handleSubmit } = useFormContext();

  const onSubmit = (data: any) => {
    console.log(data);
    handleNext();
  };

  return (
    <>
      <Typography
        variant="h5"
        textAlign={"center"}
        marginBottom={2}
        color={blue[700]}
      >
        {title}
      </Typography>
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
            fullWidth
          />

          <Box display={"flex"} gap={1}>
            <CustomFormBasicInput
              name="firstName"
              label="First Name"
              required={"First Name is required"}
            />

            <CustomFormBasicInput
              name="lastName"
              label="Last Name"
              required={"Last Name is required"}
            />
          </Box>

          <CustomFormBasicInput
            name="phoneNumber"
            label="Phone Number"
            required={"Phone Number is required"}
            fullWidth
          />

          <CustomFormBasicInput
            name="alternativeNumber"
            label="Alternative Number (optional)"
            required={false}
            fullWidth
          />

          <RelationshipDropdown
            name1="relationship"
            name2="relationshipOther"
            required={"Relationship is required"}
          />

          <LanguageDropdown
            name1="languagePref"
            name2="languageOther"
            required={"Language Preference is required"}
          />

          <Button
            type="submit"
            sx={{
              width: "60%",
              bgcolor: ButtonColor1,
              borderRadius: '0.5rem',
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
    </>
  );
};

export default BasicCallerForm;
