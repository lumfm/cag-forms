"use client";

import { Box, Button } from "@mui/material";
import { useForm, useFormContext } from "react-hook-form";
import { BasicInputs } from "@/app/lib/definitions";
import CustomFormBasicInput from "../customFormInput";
import LanguageDropdown from "../customFormInput/customLanguageDropdown";
import RelationshipDropdown from "../customFormInput/customAutoRelationshipDropdown";
import dayjs from "dayjs";
import CustomDateTimePicker from "../customFormInput/customDateTimePicker";

interface IBasicFormProps {
  handleNext: () => void;
  ButtonColor1: string;
  ButtonColor2: string;
}

const BasicCallerAutoForm = ({
  handleNext,
  ButtonColor1,
  ButtonColor2,
}: IBasicFormProps) => {
  // const { handleSubmit } = useForm({
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
  //     date_time_of_loss: dayjs(new Date()),
  //   },
  // });
  const {handleSubmit} = useFormContext()


  const onSubmit = (data: any) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"1rem"}
        height={'fit'}
      >
        <CustomFormBasicInput
          name="firstName"
          label="First Name"
          required={true}
        />

        <CustomFormBasicInput
          name="lastName"
          label="Last Name"
          required={true}
        />

        <RelationshipDropdown
          name1="relationship"
          name2="relationshipOther"
          required={true}
        />

        <CustomFormBasicInput
          name="phoneNumber"
          label="Phone Number"
          required={true}
        />

        <CustomFormBasicInput
          name="alternativeNumber"
          label="Alternative Number"
          required={false}
        />

        <CustomFormBasicInput
          name="policy_claim"
          label="Policy / Claim #"
          required={true}
        />

        <CustomDateTimePicker
          name="date_time_of_loss"
          label="Date and Time of Loss"
        />

        <LanguageDropdown
          name1="languagePref"
          name2="languageOther"
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

export default BasicCallerAutoForm;