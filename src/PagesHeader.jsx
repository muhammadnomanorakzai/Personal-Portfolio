import React from "react";
import "./assets/pagesHeader.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

const PagesHeader = ({pageTitle}) => {
    return (
        <div className="pages-container">
            {/* Page Content */}
            <div className="content">
                <h1 className="pages-title">{pageTitle}</h1>
                <nav className="breadcrumb">
                    <Link to='/'>Home</Link>
                    <span className="separator">&gt;</span>
                    <span className="active">{pageTitle}</span>
                </nav>
            </div>
        </div>
    );
};

export default PagesHeader;
