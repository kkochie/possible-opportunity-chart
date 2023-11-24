import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Box from "@mui/material/Box"
import BarChart from "./BarChart"
import "../styles.css"

export default function OppCard({ closePopup, cardData }) {
  const {
    oppName,
    salesRepName,
    amount,
    product,
    stage,
    repProbability,
    possibleTier,
    possibleProbability,
    probabilityHistory,
    possibleFactorsIncreasingWin,
    possibleFactorsDecreasingWin,
  } = cardData

  function numberOfStars() {
    const stars = parseInt(possibleTier.charAt(0))
    return Array(stars).fill(" ★ ").join("")
  }

  const increaseWins = () => {
    if (!possibleFactorsIncreasingWin) {
      return "Currently no factors"
    } else {
      return Object.entries(possibleFactorsIncreasingWin)
        .sort((x, y) => y[1].weight.value - x[1].weight.value)
        .map((each) => (
          <li>
            <span>{each[1].name}:</span> {each[1].message}
          </li>
        ))
    }
  }

  const decreaseWins = () => {
    if (!possibleFactorsDecreasingWin) {
      return "Currently no factors"
    } else {
      return Object.entries(possibleFactorsDecreasingWin)
        .sort((x, y) => y[1].weight.value - x[1].weight.value)
        .map((each) => (
          <li>
            <span>{each[1].name}:</span> {each[1].message}
          </li>
        ))
    }
  }

  return (
    <Box className="popup-body" sx={{ mx: "auto" }}>
      <Grid sx={{ m: 4, justifyContent: "center" }}>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid>
            <img src="./logo.png" alt="logo" width="200px" />
          </Grid>
          <Grid>
            <Button onClick={closePopup}>Close X</Button>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 4 }}>
          <Typography
            component="div"
            variant="h1"
            fontWeight="600"
            sx={{ fontSize: 22, color: "#0a193f" }}
            gutterBottom
          >
            {oppName}
          </Typography>
        </Grid>
        <Grid container sx={{ justifyContent: "flex-start" }}>
          <Grid>
            <Typography variant="body1">
              <span>Sales Rep:</span> {salesRepName}
            </Typography>
            <Typography variant="body1">
              <span>Stage:</span> {stage}
            </Typography>
            <Typography variant="body1">
              <span>Product:</span> {product}
            </Typography>
            <Typography variant="body1">
              <span>Amount:</span> ${amount.toFixed(2)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#4BDDB5" }}>
              <span>PX Tier:</span> {numberOfStars()}
            </Typography>
            <Grid container spacing={2} x={{ justifyContent: "flex-start" }}>
              <Grid>
                <Typography variant="body2">
                  <span>Rep Probability: </span>
                  {(repProbability * 100).toFixed(0)}%
                </Typography>
              </Grid>
              <Grid>
                <Typography variant="body2">
                  <span>PX Probability: </span>
                  {(possibleProbability * 100).toFixed(0)}%
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h2">Probability History</Typography>
              {!probabilityHistory ? (
                "No Probability History Available"
              ) : (
                <BarChart probabilityHistory={probabilityHistory} />
              )}
            </Grid>
            <Grid>
              <Typography variant="h2">
                Factors Increasing Chance to Win
              </Typography>
              <Grid>
                <Typography variant="body2" className="increase">
                  {increaseWins()}
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h2">
                Factors Decreasing Chance to Win
              </Typography>
              <Grid>
                <Typography variant="body2" sx={{}} className="decrease">
                  {decreaseWins()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
