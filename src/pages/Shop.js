import React from "react";

const Shop = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
                backgroundColor: "#e3e3e3",
                margin: "24px",
                padding: "18px"
            }}
        >
            <iframe 
                src="https://teamlocker.squadlocker.com/#/lockers/washu-lacrosse" 
                width="100%" 
                height="800px" 
                style={{ border: 'none' }}
                title="External Content"
            />
        </div>
    );
};

export default Shop;