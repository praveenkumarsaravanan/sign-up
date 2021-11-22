import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        password: '',
        email: '',
    });

    /* Navigate hook used to redirect to the successs component */
    const navigate = useNavigate();

    /*
        Handles Redirect to the /success page and pass firstName & email address to the success component
    */
    const handleOnSubmit = () => {
        navigate('/success', {
            state: {
                firstName: signUpForm.firstName,
                email: signUpForm.email
            }
        });
        return;
    };

    /* Assign the User Entered Value to the State and the field */
    const handleChange = event => {
        setSignUpForm({
            ...signUpForm,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="parent-div-container">
            <div className="child-div-container">
                <h1><span className="font-weight-normal">Let's</span><span className="header-title-block">Sign Up</span></h1>
                <div className="txt">
                    <p>Use the form below to sign up for this super awesome service. You're only a few steps away!</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <fieldset>
                        <div className="form-field">
                            <label>
                                First Name
                                <input id="firstName" type="text" label="First Name" name="firstName" value={signUpForm.firstName} onChange={handleChange} required aria-required data-testid="firstName" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Email Address
                                <input id="email" type="email" label="Email Address" name="email" value={signUpForm.email} onChange={handleChange} required aria-required data-testid="email" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                Password
                                <input id="password" type="password" label="Password" name="password" value={signUpForm.password} onChange={handleChange} required aria-required data-testid="password" />
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