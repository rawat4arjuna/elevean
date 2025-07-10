// GlobalSnackbar.jsx
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSnackbarStore, hideSnackbar  } from "@/store/snackbarStore";

export default function GlobalSnackbar() {
  const { open, message, type } = useSnackbarStore();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    hideSnackbar();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
