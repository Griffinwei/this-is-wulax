import React from 'react';
import teamPhotto from '../teamphotoBEWST.jpg';

const isMobile = window.innerWidth <= 768;
const Home = () => {
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
      <img src={teamPhotto} style={{ width: isMobile ? '90%' : '60%', height: 'auto' }} alt="WULAX" />
      <div
        style={{
          alignItems: "left",         // Center items horizontally
          margin: "18px",
          backgroundColor: "#D3D3D3",                   // Remove margin from the container
          textAlign: "left",
          padding: "8px",
          boxSizing: "border-box",
          width: isMobile ? '90%' : '60%', 
          height: 'auto'        // Include padding and border in the element's total width and height
        }}
      >
        <h1>THE FACE OF COLLEGE LACROSSE IN ST. LOUIS</h1>
        <h4>Washington University's Men's Lacrosse (or WULAX, for short) was founded in 1997 with the mission to bring a lacrosse team to WashU that emphasizes accessibility, community, and competition. We are proud members of the Men's Collegiate Lacrosse Association (
        <a href="https://mcla.us" target="_blank" rel="noopener noreferrer">
          MCLA
        </a>
        ) and compete in the Lone Star Alliance conference.</h4>
      </div>
    </div>
  );
};

export default Home;
