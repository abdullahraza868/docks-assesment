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
  Popover,
  Typography,
} from "@mui/material";

const notifications = [
  {
    from: "Clifford Hale",
    title: "Sent you a message",
    description: "Hallo bro anak wes piro saiki? wes kuliah urung?…",
    recievedAt: "2 hours ago",
  },
  {
    from: "Jasmine Lee",
    title: "Liked your post",
    description: "Liked your recent post on the new project update! 😊",
    recievedAt: "1 hour ago",
  },
  {
    from: "Marcus Brown",
    title: "Commented on your photo: ",
    description: "Looking great!",
    recievedAt: "30 minutes ago",
  },
  {
    from: "Elena Smith",
    title: "Sent you a file",
    description: "Project_Proposal.pdf",
    recievedAt: "10 minutes ago",
  },
];

const NotificationsPopover = ({ anchorEl, setAnchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Popover
      id="notification-popover"
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{
        mt: 3,
      }}
      slotProps={{
        paper: {
          borderRadius: 30,
        },
        root: {
          boxShadow: "0px 48px 69px 0px rgba(23, 18, 43, 0.85)",
          borderRadius: 30,
        },
      }}
      width="1%"
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(1deg, rgba(38, 34, 80, 0.65) 0%, rgba(27, 25, 66, 0.85) 10%, #17163B 100%)",
          width: "100%",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5">
            Notifications
          </Typography>
          <List>
            {notifications?.map((notification, index) => {
              return (
                <ListItem
                  button
                  key={index}
                  sx={{
                    ":hover": {
                      background:
                        "radial-gradient(123.22% 129.67% at 100.89% -5.6%,#201d47 0%,#17153a 100%)",
                    },
                    cursor: "pointer",
                    color: "rgba(177, 175, 205, 1)",
                  }}
                >
                  <ListItemIcon>
                    <Avatar src="https://images.unsplash.com/photo-1535713875908-d5a14f213127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
                  </ListItemIcon>
                  <ListItemText
                    primary={notification.from}
                    secondary={notification.description}
                    sx={{
                      color: "textSecondary",
                    }}
                  />
                  <Typography variant="caption" sx={{ color: "#7D7CAF" }}>
                    {notification.recievedAt}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
          <Box sx={{ mt: 2 }}>
            <Button fullWidth sx={{ textTransform: "capitalize" }}>
              See All
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Popover>
  );
};

export default NotificationsPopover;
