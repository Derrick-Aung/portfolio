import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from "./AppNavbar.module.css";
import "./AppNavbar.css";

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className={styles.appNavbar} dark expand="md">
                <div>
                    <i className="fas fa-code fa-2x"></i>
                    <NavbarBrand className="mr-auto ml-3" href="/">
                        <span id={styles.name}>Aung Khant | </span> Derrick
                    </NavbarBrand>
                    <NavbarToggler
                        style={{ float: "right" }}
                        onClick={toggle}
                    />
                    <Collapse
                        isOpen={isOpen}
                        className={styles.collapseBar}
                        navbar
                    >
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink exact className="nav-link" to="/">
                                    <span>Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about">
                                    <span>About</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/skills">
                                    <span>Skills</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default AppNavbar;
