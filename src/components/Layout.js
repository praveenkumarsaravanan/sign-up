import React from 'react';

const Layout = ({ header, main, footer }) => {
    return (
        <div className="parent-div-container">
            <div className="child-div-container">
                <header>{header}</header>
                <main>{main}</main>
                <footer>{footer}</footer>
            </div>
        </div>
    );
}

export default Layout