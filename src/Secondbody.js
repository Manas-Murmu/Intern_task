import React from "react";
import Container from "@material-ui/core/Container";
import image from "./asserts/3.png";
import "./App.css";

function SecondBody() {
  return (
    <div>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          background: "#ffffe6",
        }}
      >
        <p
          style={{
            fontSize: "12.5px",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt="image1"
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "80%",
            }}
          />

          <p
            style={{
              fontSize: "13px",
              alignItems: "center",
            }}
          >
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
          <hr color="red"></hr>
          <p style={{ fontSize: "15px", fontWeight: "bold" }}>
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </p>
          <p
            style={{
              fontSize: "12.5px",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            CHEMICALS & PROCESS<span className="verticalLine"></span>POWER
            <span className="verticalLine"></span> WATER & WASTE WATER
            <span className="verticalLine"></span>OILS & GAS
            <span className="verticalLine"></span>PHARMA{" "}
            <span className="verticalLine"></span>SUGARS & DISTILLERIES|PAPER &
            PULP<span className="verticalLine"></span>MARINE & DEFENCE
            <span className="verticalLine"></span>METAL & MINING{" "}
            <span className="verticalLine"></span>FOOD & BEVERAGE{" "}
            <span className="verticalLine"></span>PETROCHEMICAL & REFINERIES{" "}
            <span className="verticalLine"></span>SOLAR
            <span className="verticalLine"></span>BUILDING
            <span className="verticalLine"></span>HVAC
            <span className="verticalLine"></span>FIREFIGHTING
            <span className="verticalLine"></span>AGRICULTURE & RESIDENTIAL
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SecondBody;
