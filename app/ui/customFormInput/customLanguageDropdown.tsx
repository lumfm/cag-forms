import { languages } from "@/app/lib/languages";
import {
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Control, Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name1: string;
  name2: string;
  required: string | boolean;
}

const LanguageDropdown = ({ name1, name2, required }: ICustomInputProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const {control, formState:{errors}} = useFormContext()

  return (
    <FormControl size="small" fullWidth sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <Controller
        name={name1}
        control={control}
        rules={{required: required}}
        render={({ field: { value, onChange } }) => (
          <TextField
            select
            label="Language"
            value={value}
            onChange={(e) => {
              onChange(e);
              setSelectedLanguage(e.target.value); // Update selectedLanguage
            }}
            size="small"
            fullWidth
          >
            {languages.map((language) => (
              <MenuItem key={language.value} value={language.value}>
                {language.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {selectedLanguage === "other" && (
        <Controller
          name={name2}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Language"
              value={value}
              onChange={onChange}
              size="small"
              fullWidth
            />
          )}
        />
      )}
    </FormControl>
  );
};

export default LanguageDropdown;
