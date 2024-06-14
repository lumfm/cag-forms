import { DatePicker } from "@mui/x-date-pickers";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name: string;
  label: string;
}

const CustomDatePicker = ({ name, label }: ICustomInputProps) => {

  const {control} = useFormContext()
  
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
