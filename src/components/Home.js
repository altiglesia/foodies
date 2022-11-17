import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Home() {
    const [formData, setFormData] = useState({
        uname: "",
        email: "",
        pass: "",
        // passconf: ""
    })
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/users/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setFormData({
                    uname: "",
                    email: "",
                    pass: "",
                    // passconf: ""
                })
                navigate('/login');
            })
            .catch(err => console.error(err))
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="account">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="uname" className="form" required onChange={handleChange} value={formData.uname} />
                <label>Email</label>
                <input type="text" name="email" className="form" required onChange={handleChange} value={formData.email} />
                <label>Password</label>
                <input type="password" name="pass" className="form" required onChange={handleChange} value={formData.pass} />
                {/* <label>Password Confirm </label> */}
                {/* <input type="password" name="passconf" className="form" required onChange={handleChange} value={formData.passconf} /> */}
                <input type="submit" id="submit-btn" value="Create Account" />
            </form>
        </div>
    )
}

export default Home;