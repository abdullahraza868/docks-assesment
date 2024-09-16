import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Box, Typography } from "@mui/material";
import WalletCard from "../../components/cards/WalletCard";
import Grid from "@mui/material/Grid2";
import CreditedAlert from "../../components/alerts/CreditedAlert";
import CredAlert from "../../components/alerts/CredAlert";

const statsData = [
  {
    id: 1,
    value: "1.9678",
    type: "BTC",
    change: "+12.5",
  },
  {
    id: 2,
    value: "23.234",
    type: "ETH",
    change: "-5.23",
  },
  {
    id: 3,
    value: "380.234",
    type: "LTC",
    change: "+39.69",
  },
];

const Dashboard = () => {
  return (
    <>
      <Box display="flex" textAlign="start" height="100%">
        <SideBar />
        <Box flex={1} p={2}>
          <Navbar />
          <Box mt={4}>
            <Typography color="#B1AFCD" fontWeight="bold" fontSize="small">
              WALLETS
            </Typography>
            <Grid container spacing={3} width="100%" mt={2}>
              {statsData?.map((stats) => (
                <Grid item xs={4} key={stats.id}>
                  <WalletCard stats={stats} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <CreditedAlert />
      <CredAlert />
    </>
  );
};

export default Dashboard;
