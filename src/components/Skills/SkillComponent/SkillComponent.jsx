import React from "react";
import styles from "./SkillComponent.module.css";

export default function SkillComponent(props) {
    const BASE_PATH_TO_IMAGE = `${process.env.PUBLIC_URL}/images/`;

    return (
        <div className={styles.skillContainer}>
            <img
                src={BASE_PATH_TO_IMAGE + props.skillImg}
                className={styles.logo}
                alt={props.skillName + " logo"}
            />
            <p>{props.skillName}</p>
        </div>
    );
}
