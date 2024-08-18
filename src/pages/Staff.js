import React from "react";
import Carousel from '../components/Carousel.js';

const Staff = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",  // Stack items vertically
                justifyContent: "center",  // Center the items vertically
                alignItems: "center",      // Center the items horizontally
                height: "75vh",
                backgroundColor: "#e3e3e3",
                margin: "24px",
                padding: "18px"
            }}
        >
            <Carousel />
            <h3>If you are interested in joining our staff please email g.t.wei@wustl.edu. We are looking for a coach, as well as student managers and videographers for games.</h3>
        </div>
    );
};

export default Staff;
