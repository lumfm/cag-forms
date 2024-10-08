import { callerOptions } from "@/app/lib/callerOptions";
import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { Control, Controller } from "react-hook-form";

interface ICustomInputProps {
  name1: string;
  name2: string;
  control: Control<any>;
}

const RelationshipDropdown = ({ name1, name2, control }: ICustomInputProps) => {
  const [selectedRelationship, setSelectedRelationship] = useState("");

  return (
    <>
      <Controller
        name={name1}
        control={control}
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
