import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        navigate('/success', {
            state: {
                firstName: firstName,
                email: email
            }
        });
    };

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
    }

    const handlefirstNameOnChange = (e) => {
        setFirstName(e.target.value);
    }

    return (
        <div className="parent-div-container">
            <div className="child-div-container">
                <header>
                    <h1 className="title-txt font-weight-400">Let's</h1>
                    <h1 className="title-txt">Sign Up</h1>
                </header>
                <div className="txt">
                    <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <fieldset>
                        <label>
                            <p className="txt txt-label txt-bold">First Name</p>
                            <input id="firstName" type="text" label="First Name" value={firstName} onChange={handlefirstNameOnChange} required aria-required data-testid="firstName" />
                        </label>
                        <label>
                            <p className="txt txt-label txt-bold">Email Address</p>
                            <input id="email" type="email" label="Email Address" value={email} onChange={handleEmailOnChange} required aria-required data-testid="email" />
                        </label>
                        <label>
                            <p className="txt txt-label txt-bold">Password</p>
                            <input id="password" type="password" label="Password" value={password} onChange={handlePasswordOnChange} required aria-required data-testid="password" />
                        </label>
                    </fieldset>
                    <button type="submit" value="Submit" className="btn btn-red btn-right" data-testid="signUpButton">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;