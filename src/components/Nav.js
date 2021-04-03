import React from 'react';



export default function Nav() {

    function toggleNav(e) {
        var nav = document.querySelector('div.nav-toggler');
        var body = document.getElementsByTagName("BODY")[0];
        body.classList.toggle('nav-opened');
        nav.classList.toggle('toggle-nav');
    }


    return (
        <div className="nav">
            <div className="container-fluid">
                <div className="nav-wrap">
                    <div className="nav-toggler" onClick={toggleNav} >
                        <span></span>
                    </div>
                    <div className="logo">
                        <a href="/">movie<span>hub</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}