import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        uname: "",
        pass: ""
    })
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/users/login`, {
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
                    passconf: ""
                })
                if (res.message === "Success") {
                    navigate('/crawl')
                } else {
                    alert("Error! Invalid login")
                }
            })
            .catch(err => console.error(err))

    }
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="form">
            <h2>Login to your account!</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="uname" className="form" required onChange={handleChange} value={formData.uname} />
                <label>Password</label>
                <input type="password" name="pass" className="form" required onChange={handleChange} value={formData.pass} />
                <input type="submit" />
            </form>
        </div>
    )

}

export default Login