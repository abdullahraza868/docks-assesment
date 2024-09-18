import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";

const StatsCard = ({ stats }) => {
  const isNegChange = stats.change?.includes("-");

  return (
    <Box
      p={2}
      sx={{
        background:
          "linear-gradient(180deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 57.44%, #17163B 100%)",
        borderRadius: 2,
      }}
      color="#FFFFFF"
    >
      <Grid container spacing={1.6}>
        <Grid item xs={3}>
          <Typography sx={{ opacity: 0.2 }} fontWeight="bold" fontSize="small">
            {stats.type1}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <img src="src/assets/icons/ArrowLeftRightIcon.png" width={13} />
        </Grid>
        <Grid item xs={3}>
          <Typography sx={{ opacity: 0.2 }} fontWeight="bold" fontSize="small">
            {stats.type2}
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          display="flex"
          columnGap={1}
          alignItems="center"
          ml={2}
          textAlign="right"
        >
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
        </Grid>
      </Grid>

      <Box mt={1}>
        <Typography sx={{ opacity: 0.8 }}>{stats.value}</Typography>

        <Box mt={1}>
          <img
            src={`src/assets/icons/${
              isNegChange ? "BigGraphUpIcon" : "BigGraphDownIcon"
            }.png`}
          />
        </Box>
      </Box>
    </Box>
  );
};

StatsCard.propTypes = {
  stats: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type1: PropTypes.string.isRequired,
    type2: PropTypes.string.isRequired,
    change: PropTypes.string.isRequired,
  }).isRequired,
};

export default StatsCard;
