import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const history = [
  {
    type: "BTC",
    name: "Akhirnya Joko bayar Utang",
    change: "+0.025",
    date: "08/26/2018",
  },
  {
    type: "ETH",
    name: "Cicilan mobil",
    change: "-5.23",
    date: "08/26/2018",
  },
  {
    type: "LTC",
    name: "Langganan odobe CC",
    change: "-5.23",
    date: "08/26/2018",
  },
];

const HistoryCard = () => {
  const getIcon = (type) => {
    switch (type) {
      case "BTC":
        return "src/assets/icons/BitcoinRoundedIcon.png";
      case "ETH":
        return "src/assets/icons/EthRoundedIcon.png";
      case "LTC":
        return "src/assets/icons/LiteRoundedIcon.png";
    }
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(1deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 10%, #17163B 100%)",
        width: "100%",
        color: "#B1AFCD",
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography fontSize="small">HISTORY</Typography>
          <Button sx={{ textTransform: "capitalize" }} size="small">
            See All
          </Button>
        </Box>
        <Box>
          {history?.map((hist, index) => {
            const isNegChange = hist.change.includes("-");

            return (
              <Box
                key={index}
                sx={{
                  ":hover": {
                    background:
                      "radial-gradient(123.22% 129.67% at 100.89% -5.6%,#201d47 0%,#17153a 100%)",
                  },
                  cursor: "pointer",
                  color: "rgba(177, 175, 205, 1)",
                }}
                display="flex"
                justifyContent="space-between"
                pt={1}
                pb={1}
              >
                <Box display="flex" columnGap={1}>
                  <Box>
                    <img src={getIcon(hist.type)} />
                  </Box>
                  <Typography variant="caption">{hist.name}</Typography>
                </Box>

                <Box display="flex" columnGap={1}>
                  <Typography
                    variant="caption"
                    color={isNegChange ? "#E3507A" : "#50E3C2"}
                  >
                    {hist.change}%
                  </Typography>

                  <Typography variant="caption" sx={{ color: "#7D7CAF" }}>
                    {hist.date}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button fullWidth sx={{ textTransform: "capitalize" }}>
            See All
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HistoryCard;
