import React from 'react'

function Subscription() {
    return (
        <div style={{ height: "90px", backgroundColor: "#ff6600" }}>
            <b style={{ color: "white" }}>Subscribe Now</b><input style={{ height: "50%", borderRadius: "20px", margin: "30px", width: "30%" }} type="text" placeholder="Email" />
            <button style={{ height: "50%", borderRadius: "20px", color: "white", background: "black" }} >Subscribe</button>
        </div>
    )
}

export default Subscription
