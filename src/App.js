import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import BasicTable from "./components/Table"
import "./styles.css"

export default function App() {
  return (
    <Grid
      container
      sx={{ justifyContent: "center", alignItems: "center", m: 5 }}
    >
      <img src="./possible-logo.png" alt="Possible Logo" width="285px" />
      <Typography variant="h1">Possible Scored Opportunities</Typography>
      <BasicTable></BasicTable>
    </Grid>
  )
}
