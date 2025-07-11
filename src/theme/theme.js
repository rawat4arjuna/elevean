import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Vibrant blue
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9800", // Orange accent
      contrastText: "#fff",
    },
    background: {
      default: "#f5f6fa",
      paper: "#fff",
      main: "#f5f5f5",
    },
    error: {
      main: "#e53935",
    },
    warning: {
      main: "#ffa726",
    },
    info: {
      main: "#29b6f6",
    },
    success: {
      main: "#43a047",
    },
    text: {
      primary: "#222e3c",
      secondary: "#6b7280",
      disabled: "#b0b8c1",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: "Geist, Roboto, Arial, sans-serif",
    h1: { fontWeight: 700, fontSize: "2.5rem", color: "#222e3c" },
    h2: { fontWeight: 700, fontSize: "2rem", color: "#222e3c" },
    h3: { fontWeight: 600, fontSize: "1.5rem", color: "#222e3c" },
    h4: { fontWeight: 600, fontSize: "1.25rem", color: "#222e3c" },
    h5: { fontWeight: 600, fontSize: "1.1rem", color: "#222e3c" },
    h6: { fontWeight: 500, fontSize: "1rem", color: "#222e3c" },
    body1: { color: "#222e3c" },
    body2: { color: "#6b7280" },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          boxShadow: "none",
        },
        containedPrimary: {
          background: "linear-gradient(90deg, #1976d2 0%, #29b6f6 100%)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 2px 12px 0 rgba(25, 118, 210, 0.08)",
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       // background: "linear-gradient(90deg, #1976d2 0%, #29b6f6 100%)",
    //       color: "#fff",
    //       borderRadius: 0, // Remove border radius for AppBar
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 4,
          color: "#fff", // Ensure sidebar text is white
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#fff", // Ensure sidebar text is white
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;
