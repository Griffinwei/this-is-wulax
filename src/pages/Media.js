import React from "react";

const Media = () => {
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
            <h1>Coming soon...</h1>
        </div>
    );
};

export default Media;