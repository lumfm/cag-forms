import { callReasons } from "@/app/lib/aa_callReasons";
import { MenuItem, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  handleChange: (e:any) => void;
}

const ReasonForCall = ({ name, control, handleChange }: ICustomInputProps) => {


  return (
    <Controller
      name={name}
      control={control}
      rules={{required: true}}
      render={({ field: { value, onChange } }) => (
        <TextField
          label="Reason for Call"
          select
          value ={value}
          onChange={(e) => {
            handleChange(e)
            onChange(e)
          }}
          size="small"
          fullWidth
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
