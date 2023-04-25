import React, { useState } from "react";
const Form2 = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [message, setMessage] = useState()
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,14}$/;
 
    const func = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:4001/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            }).then((res) => res.json())
                .then(data => {
                    if (data.status == true) {
                        alert(data.message)
                    }
                    else {
                        alert(data.message)
                    }
                })
                .catch(error => {
                    alert(error)
                })

        } catch (err) {
            alert(err.message)

        }
        setName("")
        setEmail("")
        setMessage("")
        setPhone("")
    }
    console.log(name,email,phone)
    return (
        <>
            {/* <h1 className="mb-3"><strong>Drop a Message</strong> </h1> */}
            <div className="col-12 col-lg-5 p-4 rounded formBtn"> {/*  style={{ backgroundColor: 'rgb(246, 246, 246)' }} */}
                <form action=" " className="mb-3">
                    <div className="row conatctForm">
                        <div className="col-12 p-2">

                            <input className="container-fluid" type="text" id="name" name="name" placeholder="Your Name*" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <p style={{ color: 'red', fontSize:15 }}>{name == '' ? "Name must be fullfilled" : '' || !nameRegex.test(name) ? "Name can only contain letters and spaces" : ''}</p>

                        <div className="col-12 p-2">

                            <input className="container-fluid" type="email" id="email" name="email" placeholder="Your Email Address*" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <p style={{ color: 'red', fontSize:15 }}>{email == '' ? "Email must be fullfilled" : '' || !emailRegex.test(email) ? "Email is required and should be a valid email address" : ''}</p>

                        <div className="col-12 p-2">

                            <input className="container-fluid" type="tel" id="phone" name="phone" placeholder="Your Phone*" required onChange={(e) => setPhone(e.target.value)} maxLength="15" minLength="10" />
                        </div>
                        <p style={{ color: 'red', fontSize:15 }}>{phone == '' ? "Phone Number must be fullfilled" : '' || !phoneRegex.test(phone) ? "Enter a valid phone number" : ''}</p>


                        <div className="col-12 mt-lg-0 p-2">

                            <textarea className="container-fluid" name="message" id="msg" cols="60" rows="5" placeholder="Type Message..." onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                </form>
                <button className="p-2" type="submit" value="Submit" onClick={func}>Submit</button>
            </div>
        </>
    )
}
export default Form2;