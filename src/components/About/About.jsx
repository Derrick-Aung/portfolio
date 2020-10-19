import React from "react";
import styles from "./About.module.css";
import { Tag } from "..";
import { Helmet } from "react-helmet";
import cx from "classnames";

export default function About() {
	// Home Page
	return (
		<div className={styles.padBottom}>
			<Helmet>
				<title>
					About Derrick Aung | Work Experience and Education - React,
					Node.js and more
				</title>
				<meta
					name="description"
					content="Derrick Aung (Aung Phone Khant) is a full stack web developer from Myanmar, Burma specializing in React, NodeJS and AWS. Trained in the presitigious Group of Eight Monash University, he is ready to tackle any project that comes his way."
				/>
			</Helmet>
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
						I am a full-stack developer with a focus on the MERN
						stack. Especially interested in building large scalable
						systems and the architecture behind them
						<br />
						<br />
						Dont be a stranger, shoot me a hi or an email for a chat
						=)
					</div>
				</div>
				<div className={styles.portraitContainer}>
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
							<h4>Aug 2020 – Present</h4>
						</li>
						<li>
							<h5>Software Engineer at ConceptX Myanmar</h5>
						</li>
						<li>
							<a href="https://www.novarover.space/">
								Visit Monash Nova Rover
							</a>
						</li>
					</ul>
					<ul>
						<li>
							<h4>Aug 2019 – Nov 2019</h4>
						</li>
						<li>
							<h5>Web Developer Intern at ConceptX Myanmar</h5>
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
								+ Professional Tutor for 3 highschool students
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
							<h6>
								+{" "}
								<span style={{ color: "#04ca83" }}>83.94</span>{" "}
								Weighted Average Mark
							</h6>
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
								+ Graduated with{" "}
								<span style={{ color: "#04ca83" }}>90.38</span>{" "}
								Weighted Average Mark
							</h6>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
