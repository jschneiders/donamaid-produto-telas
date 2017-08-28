import React from "react";
import styles from "../styles/styles.css";


export class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="logo">
                    <img src="./app/images/logo_branco_donamaid.png" alt="Donamaid"/>
                </div>
            </nav>
        );
    }
}