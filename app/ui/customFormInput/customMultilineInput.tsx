import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  label: string;
  rows: number;
  required: boolean;
}

const CustomMultiline = ({
  name,
  control,
  label,
  rows,
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
          fullWidth
          multiline
          rows={rows}
        />
      )}
    />
  );
};

export default CustomMultiline;
