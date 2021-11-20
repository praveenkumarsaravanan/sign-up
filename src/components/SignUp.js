import React, { useState } from 'react';

const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleOnSubmit = (event) => {
        // Write Redirect Code to Success Page
        return; 
    };

    const handleEmailOnChange= (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordOnChange= (e) => {
        setPassword(e.target.value);
    }

    const handlefirstNameOnChange= (e) => {
        setFirstName(e.target.value);
    }

    return (

        <div className="signUpForm-div-container">
            <header>
                <h1 className="signUp-title-1">Let's</h1>
                <h1 className="signUp-title-2">Sign Up</h1>
            </header>
            <div>
                <p>Use the form below to sign up for this super awesome service. You're only a few steps away!
                </p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <fieldset>
                    <label>
                        <p>First Name</p>
                        <input id="firstName" type="text" value={firstName} onChange={handlefirstNameOnChange} required data-testid="firstName"/>
                    </label>
                    <label>
                        <p>Email Address</p>
                        <input id="email" type="email" value={email} onChange={handleEmailOnChange} required data-testid="email"/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input id="password" type="password" value={password} onChange={handlePasswordOnChange} required data-testid="password"/>
                    </label>
                </fieldset>

                <button type="submit" value="Submit" className="right" data-testid="signUpButton">Sign Up</button>

            </form>
        </div>
    );
}

export default SignUp;