import React from "react";
import styles from "./ProjectCard.module.css";
import { Tag } from "../../index";

const IMAGE_PATH = `${process.env.PUBLIC_URL}/images/`;

export default function ProjectCard(props) {
    const tags = props.tags.map((tag, index) => {
        return <Tag text={tag} key={index} />;
    });

    return (
        <div className={styles.projectContainer}>
            <img
                onClick={() => props.handleImgClick()}
                src={`${IMAGE_PATH}${props.images[0]}`}
                alt=""
            />
            <a
                href={props.link ? props.link : null}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.projectSubContainer}>
                    <h3>{props.title}</h3>
                    <div>{tags}</div>
                    <p>{props.description}</p>
                </div>
            </a>
        </div>
    );
}
