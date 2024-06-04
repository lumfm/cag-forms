"use client";

import { Box, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import { BasicInputs } from "@/app/lib/definitions";
import CustomFormBasicInput from "../customFormInput";
import LanguageDropdown from "../customFormInput/customLanguageDropdown";
import RelationshipDropdown from "../customFormInput/customAutoRelationshipDropdown";
import CustomDatePicker from "../customFormInput/customDatePicker";
import dayjs from "dayjs";

interface IBasicFormProps {
  handleNext: () => void;
}

const BasicCallerFnolForm = ({ handleNext }: IBasicFormProps) => {
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
      date_of_loss: dayjs(new Date()),
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

        <CustomFormBasicInput
          name="policy_claim"
          label="Policy / Claim #"
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

        <CustomDatePicker name="date_of_loss" label="Date of Loss" control={control} />

        <Button
          type="submit"
          sx={{
            width: "60%",
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
    </form>
  );
};

export default BasicCallerFnolForm;
