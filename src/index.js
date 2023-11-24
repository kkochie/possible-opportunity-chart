import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import App from "./App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

const theme = createTheme({
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
      color: "#0A193F",
    },
    body1: {
      color: "#0A193F",
    },
    body2: {
      color: "#0A193F",
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
