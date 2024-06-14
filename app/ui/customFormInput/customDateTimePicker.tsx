import { DateTimePicker } from "@mui/x-date-pickers";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  label: string;
}

const CustomDateTimePicker = ({ name, label }: ICustomInputProps) => {

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DateTimePicker
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

export default CustomDateTimePicker;
