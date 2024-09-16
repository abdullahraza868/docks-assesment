import React from "react";

const HistoryCard = () => {
  return (
    <Grid item xs={12}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5">
            History
          </Typography>
          <List>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText
                primary="Akhirnya Joko bayar Utang"
                secondary="+0.025 08/26/2018"
                sx={{
                  color: "textSecondary",
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MoneyOffIcon />
              </ListItemIcon>
              <ListItemText
                primary="Cicilan mobil"
                secondary="-5.23% 08/26/2018"
                sx={{
                  color: "textSecondary",
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Buat beli susu anak"
                secondary="-5.23% 08/26/2018"
                sx={{
                  color: "textSecondary",
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText
                primary="Langganan odobe CC"
                secondary="-5.23% 08/26/2018"
                sx={{
                  color: "textSecondary",
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText
                primary="Hasil mining 3 mingguu"
                secondary="+0.025 08/26/2018"
                sx={{
                  color: "textSecondary",
                }}
              />
            </ListItem>
          </List>
          <Box sx={{ mt: 2 }}>
            <Button variant="outlined" fullWidth>
              See All
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HistoryCard;
