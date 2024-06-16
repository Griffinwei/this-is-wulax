import React from 'react';

const Donate = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",  // Adjusted to move content higher
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e3e3e3",
        margin: "24px",
        padding: "18px",
        textAlign: "center",
        paddingTop: "50px"  // Added padding to move content down slightly
      }}
    >
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
        You can donate to our club by entering the designation "WashU Men's Club Lacrosse" and providing a dollar amount in the form below. We greatly appreciate all donations, as it helps us keep our club running.
      </h2>
      <a
        href="https://wustl.advancementform.com/campaign/gifts-wustl-edu/give?sc=GB2024&_gl=1*y1bzn4*_ga*MTgzOTE3MDUwNy4xNzE3ODgzNzA1*_ga_YVW0WQRFV8*MTcxODU1MzI0MC4yLjEuMTcxODU1MzI2NS4wLjAuMA..*_ga_644M6QG3YF*MTcxODU1MzI0MC4yLjEuMTcxODU1MzI2NS4zNS4wLjA.*_ga_D6PN61M2D3*MTcxODU1MzI0MC4yLjEuMTcxODU1MzI2NS4zNS4wLjA.*_ga_97GKM0B0NF*MTcxODU1MzI0MC4yLjEuMTcxODU1MzI2NS4zNS4wLjA"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "20px"
        }}
      >
        Donate Here
      </a>
    </div>
  );
};

export default Donate;
