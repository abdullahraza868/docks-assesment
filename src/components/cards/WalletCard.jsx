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
        border: "1px solid #312F62",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#FFFFFF",
        width: 250,
        background:
          stats.id === 1
            ? "linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%)"
            : "transparent",
      }}
    >
      <Box>
        <img src={getIcon(stats.type)} width={35} height={35} />
      </Box>
      <Box pr={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          columnGap={2}
        >
          <Typography gutterBottom>{stats.value}</Typography>
          <Typography sx={{ opacity: 0.2 }} fontWeight="bold" fontSize="small">
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
            <img
              src={`src/assets/icons/${
                isNegChange ? "GraphLineDown" : "GraphLineUp"
              }.png`}
              width={40}
            />
          </Box>
          <Box display="flex" columnGap={1} alignItems="center" ml={2}>
            <Box>
              <img
                src={`src/assets/icons/${
                  isNegChange ? "DownArrowIcon" : "UpArrowIcon"
                }.png`}
              />
            </Box>
            <Typography
              color={isNegChange ? "#E3507A" : "#50E3C2"}
              fontSize="small"
            >
              {stats.change}%
            </Typography>
          </Box>
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
