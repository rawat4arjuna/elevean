// Common Topbar component (moved from dashboard/components)
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        bgcolor: "#fff",
        color: "#222e3c",
        boxShadow: "0 2px 4px rgba(0,0,0,0.03)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={600}>
          Dashboard
        </Typography>
        <Box>
          {/* Add user avatar, notifications, etc. here */}
          <Typography>User</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
