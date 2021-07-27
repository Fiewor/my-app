import React from "react";

let current = new Date();
let currentYear = current.getFullYear();

function Footer() {
    return(
        <footer className="footer"><p>&copy {currentYear}<p/><footer/>
    );
}

export default Footer;