import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const Success = () => {

    const { state } = useLocation();

    return (
        state ? <div className="parent-div-container">
            <div className="child-div-container">
                <header>
                    <h1 className="signUp-title-1 font-weight-400">Welcome</h1>
                    <h1 className="signUp-title-2">{state.firstName}!</h1>
                </header>
                <div className="txt">
                    <p>You have been registered for this awesome service.</p>
                    <p>Please check your email listed below for instructions.</p>
                </div>
                <div><p className="txt txt-bold">{state.email}</p></div>
                <button type="Button" value="Submit" className="btn btn-red btn-right" data-testid="signInButton">Sign In</button>
            </div>
        </div> : <Navigate to='/' />
    );
}

export default Success;