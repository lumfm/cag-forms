import { callerOptions } from "@/app/lib/callerOptions";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ICustomInputProps {
  name1: string;
  name2: string;
  required: string | boolean;
}

const RelationshipDropdown = ({ name1, name2, required }: ICustomInputProps) => {
  const [selectedRelationship, setSelectedRelationship] = useState("");
  const {control} = useFormContext()


  return (
    <>
      <Controller
        name={name1}
        control={control}
        rules={{required: required}}
        render={({ field: { value, onChange } }) => (
          <TextField
            label="Relationship"
            select
            value={value}
            onChange={(e) => {
              onChange(e);
              setSelectedRelationship(e.target.value);
            }}
            size="small"
            fullWidth
          >
            {callerOptions.map((relationship) => (
              <MenuItem key={relationship.value} value={relationship.value}>
                {relationship.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {selectedRelationship === "other" && (
        <Controller
          name={name2}
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Relationship"
              value={value}
              onChange={onChange}
              size="small"
              fullWidth
            />
          )}
        />
      )}
    </>
  );
};

export default RelationshipDropdown;
