import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  label: string;
  rows: number;
  required: boolean;
  reason: string;
}

const CustomMultilineIntake = ({
  name,
  control,
  label,
  rows,
  required,
  reason,
}: ICustomInputProps) => {
  const { getValues } = useFormContext();
  const [template, setTemplate] = useState("");
  const [language, setLanguage] = useState("");
  const [relation, setRelation] = useState("");

  const firstName =
    getValues("firstName") === undefined ? "" : getValues("firstName");
  const lastName =
    getValues("lastName") === undefined ? "" : getValues("lastName");
  const phoneNumber =
    getValues("phoneNumber") === undefined ? "" : getValues("phoneNumber");
  const alternativeNumber =
    getValues("alternativeNumber") === undefined
      ? ""
      : getValues("alternativeNumber");

  const fullPhone = `(${phoneNumber.slice(0, 3)})${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)} ${
    phoneNumber[10] ? `x ${phoneNumber.slice(10)}` : ''
  }`;

  const fullAltPhone = alternativeNumber[0] ? `- (${alternativeNumber.slice(
    0,
    3
  )})${alternativeNumber.slice(3, 6)}-${alternativeNumber.slice(6, 10)} ${
    alternativeNumber[10] ? `x ${alternativeNumber.slice(10)}` : ''
  }` : '';

  useEffect(() => {
    getValues("languagePref") === "other"
      ? setLanguage(getValues("languageOther"))
      : setLanguage(
          getValues("languagePref")[0].toUpperCase() +
            getValues("languagePref").substring(1)
        );

    getValues("relationship") === "other"
      ? setRelation(getValues("relationshipOther"))
      : setRelation(
          getValues("relationship")[0].toUpperCase() +
            getValues("relationship").substring(1)
        );

    if (reason !== "status") {
      setTemplate(`Caller: ${firstName} ${lastName}, ${relation}
Ph: ${fullPhone} ${fullAltPhone}
Called to report an accident.
Set claim up.
Provided caller with the adj and claim information.
Set 2 business days for callback expectations.
Language Preference: ${language}`);
    } else {
      setTemplate(`Caller: ${firstName} ${lastName}, ${relation}
Ph: ${fullPhone} ${fullAltPhone}
Reason:
Resolution:
Language Preference: ${language}`);
    }
  }, [
    reason,
    firstName,
    lastName,
    fullPhone,
    fullAltPhone,
    language,
    relation,
  ]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          label={label}
          required={required}
          onChange={onChange}
          value={value || template}
          fullWidth
          multiline
          rows={rows}
        />
      )}
    />
  );
};

export default CustomMultilineIntake;
