import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const ConfirmationSave = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={'center'} gap={3}>
      <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
        ¡Your Form was successfully saved!
      </Typography>
      <Link href={"/"}>
        <Button variant="contained">Return Home</Button>
      </Link>
    </Box>
  );
};

export default ConfirmationSave;
