import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface IConfirmationProps {
  ButtonColor1: string;
  ButtonColor2: string;
}

const ConfirmationSave = ({ButtonColor1, ButtonColor2}: IConfirmationProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={'center'}
      alignItems={"center"}
      gap={3}
      height={'100%'}
    >
      <Typography variant="h6" fontWeight={"bold"} textAlign={"center"}>
        ¡Your Form was successfully saved!
      </Typography>
      <Link href={"/"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: ButtonColor1,
            color: "white",
            ":hover": {
              bgcolor: ButtonColor2,
            },
          }}
        >
          Return Home
        </Button>
      </Link>
    </Box>
  );
};

export default ConfirmationSave;
