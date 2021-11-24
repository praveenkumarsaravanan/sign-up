import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Layout from './Layout';
import Header from './Header';
import HelperText from './HelperText';
import TextBox from '../hoc/TextBox';

const UserRegistraton = () => {

    const [user, setUser] = useState({
        firstName: '',
        password: '',
        email: '',
    });

    /* Navigate hook used to redirect to the SignUpConfirmation component */
    const navigate = useNavigate();

    /*
        Handles Redirect to the /success page and pass firstName & email address to the SignUpConfirmation component
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
        <Layout
            header={
                <Header i18nKey="signUp.heading" heading1="Let's" heading2="Sign Up" />
            }
            main={
                <div>
                    <HelperText helperText1="signUp.helperText" />
                    <form onSubmit={handleOnSubmit}>
                        <fieldset>
                            <legend><Trans i18nKey="signUp.registrationFormLegend" /></legend>
                            <TextBox autoFocus i18nKey="signUp.firstName" label  id="firstName" type="text" name="firstName" value={user.firstName} onChange={handleChange} required aria-required data-testid="firstName" />
                            <TextBox i18nKey="signUp.emailAddress" label id="email" type="email" name="email" value={user.email} onChange={handleChange} required aria-required data-testid="email" />
                            <TextBox i18nKey="signUp.password" label id="password" type="password" name="password" value={user.password} onChange={handleChange} required aria-required data-testid="password" />
                        </fieldset>
                        <button type="submit" value="Submit" className="btn btn-red btn-right" data-testid="signUpButton"><Trans i18nKey="signUp.SignUp" /></button>
                    </form>
                </div>
            }
        />
    );
}

export default UserRegistraton;