"use client";
import GlobalSnackbar from "@/global/GlobalSnackBar";
import theme from "@/theme/theme";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import React, { useMemo } from "react";
import Sidebar from "@/features/common/Sidebar";
import Topbar from "@/features/common/Topbar";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";

export default function Wrapper({ children }) {
  const pathname = usePathname();
  // List of public paths that should NOT show sidebar/topbar
  const publicPaths = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
  ];
  const isPublic = publicPaths.includes(pathname);

  // Check for access token in localStorage (client-side only)

  if (isPublic) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <GlobalSnackbar />
      </ThemeProvider>
    ); // No sidebar/topbar if not logged in or if on a public path
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" height="100vh">
        <Sidebar />
        <Box flex={1} display="flex" flexDirection="column">
          <Topbar />
          <Box flex={1} p={4} bgcolor="#f5f6fa">
            {children}
          </Box>
        </Box>
      </Box>
      <GlobalSnackbar />
    </ThemeProvider>
  );
}
