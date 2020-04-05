import React from 'react'

function ContactUs() {
    return (
        <div class="container">
            <form style={{ color: "white" }}>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <br></br>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                <br></br>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                <br></br>
                <input type="submit" value="Submit" style={{ backgroundColor: "black" }} />
            </form>
        </div>

    )
}

export default ContactUs
