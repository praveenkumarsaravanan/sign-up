import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Trans } from 'react-i18next';
import Layout from './Layout';
import Header from './Header';
import HelperText from './HelperText';

const SignUpConfirmation = () => {

    /* UseLocation hook is used to retrieve the state params from the SignUp component */
    const { state } = useLocation();

    return (
        state ?
            <Layout
                header={
                    <Header i18nKey="signUpConfirmation.heading" heading1="Welcome" heading2={{ name: state.firstName }} />
                }
                main={
                    <div>
                        <HelperText helperText1="signUpConfirmation.helperText1" helperText2="signUpConfirmation.helperText2" />
                        <div className="txt"><strong>{state.email}</strong></div>
                        <button type="Button" value="Submit" className="btn btn-red btn-right" data-testid="signInButton">
                            <Trans i18nKey="signUpConfirmation.SignIn" />
                        </button>
                    </div>
                }
                />
             : <Navigate to='/' />
    );
}

export default SignUpConfirmation;