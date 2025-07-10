"use client";
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faBoxOpen,
  faUsers,
  faRobot,
  faBriefcase,
  faQuestionCircle,
  faBuilding,
  faChartBar,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: faTachometerAlt },
  { label: "Assets", path: "/assets", icon: faBoxOpen },
  { label: "Players", path: "/players", icon: faUsers },
  { label: "NPC", path: "/npc", icon: faRobot },
  { label: "Jobs", path: "/jobs", icon: faBriefcase },
  { label: "Q&A", path: "/qna", icon: faQuestionCircle },
  { label: "Properties", path: "/properties", icon: faBuilding },
  { label: "Reports", path: "/reports", icon: faChartBar },
  { label: "Avatar", path: "/avatar", icon: faUserCircle },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleNav = (path) => {
    if (pathname !== path) router.push(path);
  };
  return (
    <Box
      width={220}
      bgcolor="#222e3c"
      color="#fff"
      display="flex"
      flexDirection="column"
      py={2}
      minHeight="100vh"
    >
      <Typography variant="h6" align="center" fontWeight="bold" mb={4}>
        Logo
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.label}
            component={"div"}
            onClick={() => handleNav(item.path)}
            sx={{
              "&:hover": { bgcolor: "#1a2230" },
              bgcolor: pathname === item.path ? "#1a2230" : "inherit",
              cursor: "pointer",
            }}
          >
            <ListItemIcon sx={{ color: "#fff", minWidth: 36 }}>
              {item.label === "Avatar" ? (
                <Avatar
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: "#fff",
                    color: "#222e3c",
                    fontSize: 16,
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </Avatar>
              ) : (
                <FontAwesomeIcon icon={item.icon} />
              )}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
