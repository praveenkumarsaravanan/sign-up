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
                <h1 className="font-weight-400">Let's<span className="txt-bold header-span-title" >Sign Up</span></h1>
                <div className="txt">
                    <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <fieldset>
                        <div className="form-field">
                            <label>
                                First Name
                                <input id="firstName" type="text" label="First Name" value={firstName} onChange={handlefirstNameOnChange} required aria-required data-testid="firstName" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Email Address
                                <input id="email" type="email" label="Email Address" value={email} onChange={handleEmailOnChange} required aria-required data-testid="email" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Password
                                <input id="password" type="password" label="Password" value={password} onChange={handlePasswordOnChange} required aria-required data-testid="password" />
                            </label>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-red btn-right" data-testid="signUpButton">Sign Up</button>
                    </fieldset>

                </form>
            </div>
        </div>
    );
}

export default SignUp;