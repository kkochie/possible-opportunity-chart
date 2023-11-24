import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { red } from "@mui/material/colors"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

const theme = createTheme({
  palette: {
    primary: {
      light: '#f3e8f9',
      main: '#6a3790',
      dark: '#3b1e4d',
      contrastText: '#d92c61',
    },
    action: {
      hover: red[500],
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: "#DB2222",
    h1: {
      fontSize: 36,
      fontWeight: 500,
    },
    h2: {
      fontSize: 22,
      fontWeight: 500,
      textAlign: "center",
      marginTop: 40,
      color: "#6a3790",
    },
    body1: {
      color: "#6a3790",
    },
    body2: {
      color: "#6a3790",
    },
  },
})

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
