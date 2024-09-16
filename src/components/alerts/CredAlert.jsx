import { Alert, Box, Typography } from "@mui/material";

const CredAlert = () => {
  return (
    <Alert
      icon={
        <img
          src="src/assets/icons/LiteCoinRoundedIcon.png"
          width={25}
          height={25}
        />
      }
      severity="success"
      action={
        <Box display="flex" mr={1} columnGap={2}>
          <Typography color="#E3507A">-5.23%</Typography>
          <Typography color="#6F6EA4">08/26/2018</Typography>
        </Box>
      }
      sx={{
        color: "#6F6EA4",
        background:
          "linear-gradient(268.95deg, rgba(41, 37, 88, 0.536345) 4.06%, rgba(38, 35, 83, 0.866791) 42.35%, rgba(33, 30, 75, 0.50218) 99.53%)",
        width: "30%",
        position: "absolute",
        bottom: 50,
        right: 50,
        borderRadius: 2,
      }}
    >
      Buat beli susu anak
    </Alert>
  );
};

export default CredAlert;
