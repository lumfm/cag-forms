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
      rules={{required: required}}
      render={({ field: {onChange, value}}) => (
        <TextField
          label={label}
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
