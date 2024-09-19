import SideBar from "../../components/SideBar";
import Navbar from "../../components/Navbar";
import { Box, Typography } from "@mui/material";
import WalletCard from "../../components/cards/WalletCard";
import Grid from "@mui/material/Grid2";
import CreditedAlert from "../../components/alerts/CreditedAlert";
import CredAlert from "../../components/alerts/CredAlert";
import HistoryCard from "../../components/cards/HistoryCard";
import StatsCard from "../../components/cards/StatsCard";
import Chart from "../../components/charts/Chart";

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

const data = [
  {
    id: 1,
    value: "1.9678",
    type1: "BTC",
    type2: "USD",
    change: "-5.23",
  },
  {
    id: 2,
    value: "465,22",
    type1: "ETH",
    type2: "USD",
    change: "+132",
  },
  {
    id: 3,
    value: "104,23",
    type1: "LTC",
    type2: "USD",
    change: "+75",
  },
  {
    id: 4,
    value: "107.543,234",
    type1: "LTC",
    type2: "IDR",
    change: "+132",
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

          <Box mt={4}>
            <Chart />
          </Box>

          <Box spacing={1} mt={3} display="flex" width="100%">
            <Box width="70%">
              <Grid container spacing={1}>
                {data?.map((history) => (
                  <Grid item xs={6} sm={4} md={3} key={history.id}>
                    <StatsCard stats={history} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box width="30%">
              <HistoryCard />
            </Box>
          </Box>
        </Box>
      </Box>
      <CreditedAlert />
      <CredAlert />
    </>
  );
};

export default Dashboard;
