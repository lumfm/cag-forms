import { TextField } from "@mui/material";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  label: string;
  required: string | boolean;
  minLength?: number;
  maxLength?: number;
  fullWidth?: boolean;
}

const CustomFormBasicInput = ({
  name,
  label,
  required,
  minLength,
  maxLength,
  fullWidth,
}: ICustomInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
          minLength: minLength,
          maxLength: maxLength,
        }}
        render={({ field: { onChange, value } }) => (
          <TextField
            label={label}
            onChange={onChange}
            value={value}
            size="small"
            fullWidth={fullWidth}
          />
        )}
      />
      {errors.name?.type === "required" && (
        <p role="alert">This field is required`</p>
      )}
    </>
  );
};

export default CustomFormBasicInput;
