import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  control: Control<any>;
  label: string;
}

const CustomDatePicker = ({ name, control, label }: ICustomInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          onChange={onChange}
          value={value as string}
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

export default CustomDatePicker;
