"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Sun icon
import NightsStayIcon from "@mui/icons-material/NightsStay"; // Moon icon
import { RoundaboutRight } from "@mui/icons-material";

const Header = ({ toggleTheme, mode }) => {
  return (
    <AppBar position="static" color="background" elevation={0}>
      <Toolbar sx={{ padding: { xs: "10px", md: "20px" } }}>
        {/* Text Link to GitHub */}
        <Typography
          variant="h4"
          component="a"
          href="https://github.com/Abdur-Rehman-Rehan/pantry-tracker"
          target="_blank"
          sx={{
            color: "primary.main",
            marginRight: { xs: 1, md: 2 },
            textDecoration: "none",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          R.
        </Typography>

        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Pantry App
        </Typography>

        {/* Theme Toggle Button */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="theme-toggle"
          onClick={toggleTheme}
          sx={{
            padding: "8px",
            paddingRight: { xs: "12px", md: "12px" },
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          {mode === "light" ? (
            <NightsStayIcon fontSize="large" /> // Moon icon for light mode
          ) : (
            <WbSunnyIcon fontSize="large" sx={{ color: "yellow" }} /> // Sun icon for dark mode
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
