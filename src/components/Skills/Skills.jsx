import React from "react";
import styles from "./Skills.module.css";
import { SkillComponent } from "../index";

export default function Skills() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h3 className={styles.skillTitle}>Programming</h3>
                <SkillComponent skillImg="reactjs.png" skillName="React" />
                <SkillComponent skillImg="node.png" skillName="Node" />
                <SkillComponent skillImg="express.png" skillName="Express" />
                <SkillComponent skillImg="redux.png" skillName="Redux" />
                <SkillComponent
                    skillImg="bootstrap.png"
                    skillName="Bootstrap"
                />
            </div>
            <div className={styles.container}>
                <h3 className={styles.skillTitle}>Languages</h3>
                <SkillComponent
                    skillImg="javascript.png"
                    skillName="JavaScript"
                />
                <SkillComponent skillImg="html.png" skillName="HTML" />
                <SkillComponent skillImg="css.png" skillName="CSS" />
                <SkillComponent skillImg="python.png" skillName="Python" />
                <SkillComponent skillImg="java.png" skillName="Java" />
            </div>
            <div className={styles.container}>
                <h3 className={styles.skillTitle}>Other Skills</h3>
                <SkillComponent skillImg="aws.png" skillName="AWS" />
                <SkillComponent skillImg="git.png" skillName="Git" />
                <SkillComponent
                    skillImg="photoshop.png"
                    skillName="Adobe Photoshop"
                />
                <SkillComponent
                    skillImg="seo.png"
                    skillName="Search Engine Optimization"
                />
            </div>
        </div>
    );
}
