import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import { useState } from "react";
import NotificationsPopover from "./popovers/NotificationsPopover";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize="30px" fontWeight="bold" color="#FFFFFF">
          Dashboard
        </Typography>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <img src="src/assets/MagnifierIcon.png" />
            </Grid>
            <Grid item xs={2}>
              <img src="src/assets/MenuIcon.png" />
            </Grid>
            <Grid item xs={3}>
              <IconButton
                aria-describedby="notification-popover"
                display="flex"
                sx={{
                  background:
                    "linear-gradient(136.67deg, #FF409A 8.34%, #C438EF 95.26%)",
                  pt: 0.5,
                  pb: 0.5,
                  pl: 1.5,
                  pr: 1.5,
                  borderRadius: 6,
                  alignItems: "center",
                  justifyContent: "center",
                  columnGap: 0.5,
                }}
                onClick={handleClick}
              >
                <Box>
                  <img src="src/assets/BellIcon.png" />
                </Box>
                <Typography fontSize="small" color="#FFFFFF">
                  15
                </Typography>
              </IconButton>
            </Grid>
            <Grid
              item
              xs={5}
              display="flex"
              sx={{ alignItems: "center", columnGap: 1 }}
            >
              <Avatar sx={{ width: 30, height: 30 }} variant="rounded" />
              <Box display="flex">
                <Typography color="#5B5A99" fontSize="small">
                  Pixelz Warrios
                </Typography>
                <KeyboardArrowDownIcon color="#5B5A99" fontSize="small" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography color="#5B5A99" textAlign="start" fontSize="small">
        With all of the styling tool options available in today’s market
      </Typography>

      <NotificationsPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
};

export default Navbar;
