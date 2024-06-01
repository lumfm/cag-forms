import { callReasons } from "@/app/lib/aa_callReasons";
import { MenuItem, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
}

const ReasonForCall = ({ name, control }: ICustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextField
          label="Reason for Call"
          select
          value={value}
          onChange={onChange}
          size="small"
          fullWidth
          required
        >
          {callReasons.map((reason) => (
            <MenuItem key={reason.value} value={reason.value}>
              {reason.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default ReasonForCall;
