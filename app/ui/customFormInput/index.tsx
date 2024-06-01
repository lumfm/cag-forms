import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  label: string;
  required: boolean;
}

const CustomFormBasicInput = ({
  name,
  control,
  label,
  required,
}: ICustomInputProps) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: {onChange, value}}) => (
        <TextField
          label={label}
          required={required}
          onChange={onChange}
          value={value}
          size="small"
          fullWidth
        />
      )}
    />
  );
};

export default CustomFormBasicInput;
