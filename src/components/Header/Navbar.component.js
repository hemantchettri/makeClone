import React from "react";

const Navbar = () => {
    return (
        <header className="header" id="header">
            <div className="header_toggle">
                <i
                    className="bx bx-menu"
                    id="header-toggle"
                    onClick={(e) => {
                        const nav = document.getElementById("nav-bar");
                        const bodypd = document.getElementById("body-pd");
                        const headerpd = document.getElementById("header");

                        // show navbar
                        nav.classList.toggle("show");
                        // // change icon
                        e.target.classList.toggle("bx-x");
                        // add padding to body
                        bodypd.classList.toggle("body-pd");
                        // add padding to header
                        headerpd.classList.toggle("body-pd");
                    }}
                ></i>
            </div>
            <div className="header_img">
                <img src="https://i.imgur.com/hczKIze.jpg" alt="" />
            </div>
        </header>
    );
};

export default Navbar;
