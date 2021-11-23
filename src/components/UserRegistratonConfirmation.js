import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Trans } from 'react-i18next';

const UserRegistratonConfirmation = () => {

    /* UseLocation hook is used to retrieve the state params from the UserRegistration component */
    const { state } = useLocation();

    return (
        state ? <div className="parent-div-container">
            <div className="child-div-container">
                <h1>
                    <Trans i18nKey="userRegistrationConfirmation.heading">
                        <span className="font-weight-normal">Welcome</span><span className="header-title-block">{{ name: state.firstName }}!</span>
                    </Trans>
                </h1>
                <div className="txt">
                    <p><Trans i18nKey="userRegistrationConfirmation.helperText1" /></p>
                    <p><Trans i18nKey="userRegistrationConfirmation.helperText2" /></p>
                </div>
                <div className="txt"><strong>{state.email}</strong></div>
                <button type="Button" value="Submit" className="btn btn-red btn-right" data-testid="signInButton">
                    <Trans i18nKey="userRegistrationConfirmation.SignIn" />
                </button>
            </div>
        </div > : <Navigate to='/' />
    );
}

export default UserRegistratonConfirmation;