import React, { useState } from "react";

const Sidebar = () => {
    const [activeNav, setActiveNav] = useState("/#");
    return (
        <div className="l-navbar" id="nav-bar">
            <nav className="nav">
                <div>
                    <a href="/#" className="nav_logo">
                        <i className="bx bx-layer nav_logo-icon"></i>
                        <span className="nav_logo-name">BBBootstrap</span>
                    </a>
                    <div className="nav_list">
                        <a
                            href="/#"
                            className={
                                activeNav === "dashboard" ? "nav_link active" : "nav_link"
                            }
                            onClick={() => setActiveNav("dashboard")}
                        >
                            <i className="bx bx-grid-alt nav_icon"></i>
                            <span className="nav_name">Home</span>
                        </a>
                        <a
                            href="/#"
                            className={activeNav === "users" ? "nav_link active" : "nav_link"}
                            onClick={() => setActiveNav("users")}
                        >
                            <i className="bx bx-envelope nav_icon"></i>
                            <span className="nav_name">Single Email</span>
                        </a>
                        <a
                            href="/#"
                            className={
                                activeNav === "messages" ? "nav_link active" : "nav_link"
                            }
                            onClick={() => setActiveNav("messages")}
                        >
                            <i className="bx bx-cloud-upload nav_icon"></i>
                            <span className="nav_name">Verify List</span>
                        </a>
                        <a
                            href="/#"
                            className={
                                activeNav === "bookmark" ? "nav_link active" : "nav_link"
                            }
                            onClick={() => setActiveNav("bookmark")}
                        >
                            <i className="bx bx-info-square nav_icon"></i>
                            <span className="nav_name">Terminology</span>
                        </a>
                    </div>
                </div>
                <a href="/#" className="nav_link">
                    <i className="bx bx-log-out nav_icon"></i>
                    <span className="nav_name">SignOut</span>
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
