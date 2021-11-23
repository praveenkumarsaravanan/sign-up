import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Layout from './Layout';
import Header from './Header';
import HelperText from './HelperText';

const UserRegistratonConfirmation = () => {

    /* UseLocation hook is used to retrieve the state params from the UserRegistration component */
    const { state } = useLocation();

    return (
        state ?
            <Layout
                header={
                    <Header i18nKey="userRegistrationConfirmation.heading" heading1="Welcome" heading2={{ name: state.firstName }} />
                }
                main={
                    <div>
                        <HelperText helperText1="userRegistrationConfirmation.helperText1" helperText2="userRegistrationConfirmation.helperText2" />
                        <div className="txt"><strong>{state.email}</strong></div>
                        <button type="Button" value="Submit" className="btn btn-red btn-right" data-testid="signInButton">
                            <Trans i18nKey="userRegistrationConfirmation.SignIn" />
                        </button>
                    </div>
                }
                />
             : <Navigate to='/' />
    );
}

export default UserRegistratonConfirmation;