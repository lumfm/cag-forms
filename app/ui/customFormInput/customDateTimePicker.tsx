import { DateTimePicker } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  label: string;
}

const CustomDateTimePicker = ({ name, control, label }: ICustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DateTimePicker
          onChange={onChange}
          value={value}
          label={label}
          slotProps={{
            textField:{
                size: 'small',
                fullWidth: true,
            }
          }}
        />
      )}
    />
  );
};

export default CustomDateTimePicker;
