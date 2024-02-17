import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={5}
    >
      <BottomNavigation sx={{ width: "100%" }}>
        <h3 className="font-bold text-3xl text-blue-600">
          Shopping Cart From KZH
        </h3>
      </BottomNavigation>
    </Paper>
  );
}
