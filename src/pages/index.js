import React from 'react';
import teamPhotto from '../teamphoto.JPG';

const Home = () => {
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "flex-start", // Align items to the start (top) of the container
        alignItems: "center",         // Center items horizontally
        minHeight: "100vh",           // Ensure the container takes at least the full viewport height
        backgroundColor: "#e3e3e3",
        margin: "24px",                    // Remove margin from the container
        textAlign: "center",
        padding: "18px",
        boxSizing: "border-box"       // Include padding and border in the element's total width and height
      }}
    >
      <img src={teamPhotto} style={{ width: '100%', height: 'auto'}} alt="Photo" />
      <h1 style={{ margin: '20px 0 0 0' }}> {/* Margin top: 20px, bottom: 0 */}
        Welcome to the official website of WashU Lacrosse!
      </h1>
      <h2 style={{ margin: '0' }}> {/* Remove margin */}
        2012 GRLC Champions | 2011 & 2014 GRLC Runner-up
      </h2>
      <h2 style={{ margin: '0' }}>
        <br/>We are proud members of the Men's Collegiate Lacrosse Association (
        <a href="https://mcla.us" target="_blank" rel="noopener noreferrer">
          MCLA
        </a>
        ) and compete in the Lone Star Alliance conference.
      </h2>
      <br/>
      <br/>
      <h2>
        For prospective players:
          <br/>1. Come see us at the activity fair on August 30th from 3-5PM @ Mudd Field!
          <br/>2. Register yourself as a member of the team <a href="https://wustl.presence.io/organization/sports-club-mens-lacrosse/join" target="_blank" rel="noopener noreferrer">here</a>.
          <br/>3. If you have gear at home, try and get it shipped to school (otherwise we have extra gear in our locker room).
      </h2>
    </div>
  );
};

export default Home;
