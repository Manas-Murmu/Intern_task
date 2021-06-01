import React from "react";
import Container from "@material-ui/core/Container";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          background: "lightyellow",
        }}
      >
        <div
          style={{
            width: 400,
            textAlign: "center",
            color: "white",
            background: "red",
            justifyContent: "center",
            padding: 5,
            // margin: 2,
            height: 70,
          }}
        >
          <CallIcon style={{ fontSize: 40 }} />
          Toll free 1800 200 1234
        </div>
        <div
          style={{
            width: 400,
            textAlign: "center",
            justifyContent: "center",
            background: "red",
            color: "white",
            padding: 5,

            height: 70,
          }}
        >
          <FacebookIcon style={{ fontSize: 40 }} />
          www.facebook.com/cripumps
        </div>
        <div
          style={{
            width: 400,
            textAlign: "center",
            justifyContent: "center",
            color: "white",
            background: "red",
            padding: 5,
            height: 70,
          }}
        >
          <LanguageIcon style={{ fontSize: 40 }} />
          www.crigroups.com
        </div>
      </Container>
    </div>
  );
}

export default Footer;
