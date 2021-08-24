import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      },
    }
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  },
  spacing: [13, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 200]

});
