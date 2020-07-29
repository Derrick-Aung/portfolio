import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    const EMAIL = "derrick.aungkhant@gmail.com";
    const PHONE = "+61405438577";
    const GITHUB = "https://github.com/Derrick-Aung/";
    const LINKEDIN = "https://www.linkedin.com/in/aung-phone-khant-251a671b2/";

    useEffect(() => {
        const progressBar = document.getElementById("myBar");
        let scrolled = 0;
        let winScroll;
        let height;
        const handleScroll = () => {
            winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;
            height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            scrolled = (winScroll / height) * 100;

            if (scrolled > 95) {
                scrolled = 100;
            }
            progressBar.style.width = scrolled + "%";
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.footer}>
            <div className={styles.progressBarContainer}>
                <div className={styles.progressBar} id="myBar"></div>
            </div>
            <div className={styles.footerContent}>
                <a href={`mailto:${EMAIL}`}>
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href={`tel:${PHONE}`}>
                    <i className="fas fa-phone fa-2x"></i>
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </div>
    );
}
