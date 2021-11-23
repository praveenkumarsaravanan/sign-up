import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans } from 'react-i18next';

const UserRegistraton = () => {

    const [user, setUser] = useState({
        firstName: '',
        password: '',
        email: '',
    });

    /* Navigate hook used to redirect to the UserRegistrationConfirmation component */
    const navigate = useNavigate();

    /*
        Handles Redirect to the /success page and pass firstName & email address to the UserRegistrationConfirmation component
    */
    const handleOnSubmit = event => {
        /* Tests throw console Error if preventDefault is called */
        event.preventDefault();
        navigate('/success', {
            state: {
                firstName: user.firstName,
                email: user.email
            }
        });

    };

    /* Assign the User Entered Value to the State and the field */
    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="parent-div-container">
            <div className="child-div-container">
                <h1>
                    <Trans i18nKey="userRegistration.heading">
                        <span className="font-weight-normal">Let's</span><span className="header-title-block">Sign Up</span>
                    </Trans>
                </h1>
                <div className="txt">
                    <p><Trans i18nKey="userRegistration.helperText" /></p>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <fieldset>
                        <div className="form-field">
                            <label>
                                <strong><Trans i18nKey="userRegistration.firstName" /></strong>
                                <input autoFocus id="firstName" type="text" label="First Name" name="firstName" value={user.firstName} onChange={handleChange} required aria-required data-testid="firstName" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                <strong><Trans i18nKey="userRegistration.emailAddress" /></strong>
                                <input id="email" type="email" label="Email Address" name="email" value={user.email} onChange={handleChange} required aria-required data-testid="email" />
                            </label>
                        </div>
                        <div className="form-field">
                            <label>
                                <strong><Trans i18nKey="userRegistration.password" /></strong>
                                <input id="password" type="password" label="Password" name="password" value={user.password} onChange={handleChange} required aria-required data-testid="password" />
                            </label>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-red btn-right" data-testid="signUpButton"><Trans i18nKey="userRegistration.SignUp" /></button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default UserRegistraton;