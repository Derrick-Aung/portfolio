import React from "react";
import styles from "./Home.module.css";
import { Tag } from "../";
import cx from "classnames";

export default function Home() {
    // Home Page
    return (
        <div className={styles.padBottom}>
            <div className={styles.homeContainer}>
                <div className={styles.container}>
                    <h3 className={cx(styles.homeTitle, "text-left", "pl-3")}>
                        About Me
                    </h3>
                    <Tag text="Full Stack Dev" />
                    <Tag text="Designer" />
                    <Tag text="Curious Cat" />
                    <div className={styles.container}>
                        Hello there. I am Derrick, a Year 2 Computer Science
                        student from{" "}
                        <a
                            href="https://www.monash.edu/"
                            className={styles.textLink}
                        >
                            Monash
                        </a>{" "}
                        <br />
                        <br />
                        I am an aspiring full-stack web developer with a focus
                        on the MERN stack. Currently looking for formal work
                        experience
                        <br />
                        <br />
                        Dont be a stranger, shoot me a hi or an email with an
                        explanation of Dijkstra's correctness in extensive
                        detail, whatever works for you
                    </div>
                </div>
                <div>
                    <img
                        className={styles.homePortrait}
                        src={process.env.PUBLIC_URL + "/images/portrait.png"}
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.homeSecondary}>
                <div className={styles.container}>
                    <h3 className={styles.homeTitle}>Work Experience</h3>
                    <ul>
                        <li>
                            <h4>Aug 2019 – Nov 2019</h4>
                        </li>
                        <li>
                            <h5>Frontend Developer at ConceptX Myanmar</h5>
                        </li>
                        <li>
                            <a href="https://www.conceptxmm.com/">
                                Visit ConceptX Myanmar Page
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h4>Oct 2016 – Mar 2017</h4>
                        </li>
                        <li>
                            <h5>Freelance Tutor</h5>
                        </li>
                        <li>
                            <h6>
                                + Professional tutor for 3 highschool students
                            </h6>
                        </li>
                        <li>
                            <h6>+ Taught IT, Mathematics & Science</h6>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles.container, styles.education)}>
                    <h3 className={styles.homeTitle}>Education</h3>
                    <ul>
                        <li>
                            <h4>2018 - Present</h4>
                        </li>
                        <li>
                            <h5>Monash University, Clayton</h5>
                        </li>
                        <li>
                            <h6>+ Bachelor of Computer Science</h6>
                        </li>
                        <li>
                            <h6>+ 83.33 Weighted Average Mark</h6>
                        </li>
                        <li>
                            <h6>+ Higher Achiever Award</h6>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h4>2017 - 2018</h4>
                        </li>
                        <li>
                            <h5>Monash Uni Foundation Year, Sunway Uni</h5>
                        </li>
                        <li>
                            <h6>+ Jeffery Cheah Entrance Scholarship</h6>
                        </li>
                        <li>
                            <h6>
                                + Graduated with 90.38 Weighted Average Mark
                            </h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
