import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const Success = () => {

    /* UseLocation hook is used to retrieve the state params from the signUp component */
    const { state } = useLocation();

    return (
        state ? <div className="parent-div-container">
            <div className="child-div-container">
                <h1><span className="font-weight-normal">Welcome</span><span className="header-title-block">{state.firstName}!</span></h1>
                <div className="txt">
                    <p>You have been registered for this awesome service.</p>
                    <p>Please check your email listed below for instructions.</p>
                </div>
                <div className="txt txt-bold"><p>{state.email}</p></div>
                <button type="Button" value="Submit" className="btn btn-red btn-right" data-testid="signInButton">Sign In</button>
            </div>
        </div> : <Navigate to='/' />
    );
}

export default Success;