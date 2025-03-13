import React from 'react';
import goalies from "../grantcookethan.jpeg";

const Donate = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start", // Align items to the start (top) of the container
        alignItems: "center",         // Center items horizontally
        minHeight: "100vh",           // Ensure the container takes at least the full viewport height
        margin: "18px",                    // Remove margin from the container
        textAlign: "center",
        padding: "18px",
        boxSizing: "border-box"       // Include padding and border in the element's total width and height
      }}
    >
      <img src={goalies} style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", margin: "18px"}} alt="Grant Schwartz, David Cook, Ethan Weilheimer"/>
      <div
        style={{
          padding: "8px",
          margin: "18px",
          backgroundColor: "#D3D3D3",
          height: "auto",
          width: "100%",
          maxWidth: "600px"
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>
          You can donate to our club by entering the designation "WashU Men's Club Lacrosse" and providing a dollar amount in the form below. We greatly appreciate all donations, as it helps us keep our club running.
        </h2>
        <br/>
        <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>
          Note: you can consult <a href="https://financialservices.wustl.edu/wfin-topic/tax-topics/contributions/#:~:text=As%20a%20501(c)(,deductibility%20of%20a%20charitable%20contribution." target="_blank" rel="noopener noreferrer">this</a> link for more information on the tax deductibility of your donation.
        </h3>

      </div>
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
