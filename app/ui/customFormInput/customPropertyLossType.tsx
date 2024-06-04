import { propertyLossTypes } from "@/app/lib/mn_lossTypes";
import { MenuItem, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
}

const PropertyLossType = ({ name, control }: ICustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextField
          label="Loss Type"
          select
          value={value}
          onChange={onChange}
          size="small"
          fullWidth
          required
        >
          {propertyLossTypes.map((lossType) => (
            <MenuItem key={lossType.value} value={lossType.value}>
              {lossType.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PropertyLossType;
