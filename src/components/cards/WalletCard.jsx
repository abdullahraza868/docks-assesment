import PropTypes from "prop-types";
import { Card, Box, Typography } from "@mui/material";

const WalletCard = ({ stats }) => {
  const isNegChange = stats.change.includes("-");

  const getIcon = (type) => {
    switch (type) {
      case "BTC":
        return "src/assets/icons/Bitcoin.png";
      case "ETH":
        return "src/assets/icons/ETH.png";
      case "LTC":
        return "src/assets/icons/LiteCoin.png";
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        borderRadius: 3,
        textAlign: "center",
        background: "transparent",
        border: "1px solid #312F62",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      <Box>
        <img src={getIcon(stats.type)} width={35} height={35} />
      </Box>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          columnGap={2}
        >
          <Typography variant="h5" gutterBottom>
            {stats.value}
          </Typography>
          <Typography sx={{ opacity: 0.2 }} fontWeight="bold">
            {stats.type}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          color={isNegChange ? "#E3507A" : "#50E3C2"}
        >
          <Box>
            <img src="src/assets/icons/GraphLineUp.png" width={40} />
          </Box>
          <Typography>{stats.change}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

WalletCard.propTypes = {
  stats: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
  }).isRequired,
};

export default WalletCard;
