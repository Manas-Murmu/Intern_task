import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import trophy from "./asserts/1.png";
import trophy2 from "./asserts/2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Body() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          backgroundColor: "#ffffe6",
        }}
      >
        <Grid item xs={12} lg={4}>
          <div className={classes.paper}>
            <img
              src={trophy}
              alt="image1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div>
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time. the 4th time.
            </p>
            <ul style={{ fontSize: "13px" }}>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
            <img
              src={trophy2}
              alt="image1"
              style={{ width: "100%", height: "auto" }}
            />
            <p style={{ fontSize: "15px" }}>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Body;
