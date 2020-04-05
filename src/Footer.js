import React from 'react';

var style = {
    backgroundColor: "#ff6600",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    fontSize: "30px",
    color: "white",
    marginRight: "10px"
}

var phantom = {
    display: 'block',
    //padding: '20px',
    marginRight: '30px',
    height: '60px',
    width: '100%',
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
            </div>
        </div>
    )
}

export default Footer