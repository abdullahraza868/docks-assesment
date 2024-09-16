import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const CreditedAlert = () => {
  return (
    <Card
      sx={{
        width: 350,
        position: "absolute",
        bottom: 50,
        left: 50,
        zIndex: 9999,
        background:
          "linear-gradient(241.25deg, rgba(41, 39, 85, 0.35) 4.4%, rgba(41, 39, 84, 0.78) 61.77%, rgba(27, 24, 66, 0.35) 119.94%)",
        color: "#6968A6",
        borderRadius: 3,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          textAlign="center"
          rowGap={2}
          display="flex"
          flexDirection="column"
        >
          <Box width="100%" display="flex" justifyContent="center">
            <img src="src/assets/icons/illustrationsIcon.png" />
          </Box>
          <Typography display="flex" gap={1} fontSize="small">
            You just earn{" "}
            <Typography color="#50E3C2" fontSize="small">
              0.02343,00
            </Typography>
            BTC
          </Typography>
          <Typography fontSize="small">See History</Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            backgroundColor: "#343261",
            color: "#9796CF",
            textTransform: "capitalize",
            fontSize: "small",
          }}
        >
          Dismiss
        </Button>
      </CardActions>
    </Card>
  );
};

export default CreditedAlert;
