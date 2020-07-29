import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import cx from "classnames";
import { ProjectCard } from "../index";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Helmet } from "react-helmet";

const IMAGE_PATH = `${process.env.PUBLIC_URL}/images/`;

const projects = [
    {
        title: "WatchWhat",
        images: ["watch-what.JPG", "watch-what2.JPG", "watch-what3.JPG"],
        tags: ["React with Hooks", "Redux Thunk", "TMDB API", "Youtube API"],
        description:
            "If you love movies you will love WatchWhat - a web interface to explore trending and upcoming movies with a slick interface with features to browse trailers and movie cast crews",
        link: "https://watchwhat.derrick-aung.xyz/",
    },
    {
        title: "An Engineer's Portfolio",
        images: [
            "engineer1.JPG",
            "engineer2.JPG",
            "engineer3.JPG",
            "engineer4.JPG",
        ],
        tags: ["Javascript", "React Helmet", "Responsive Design"],
        description:
            "A personal website designed for a client to showcase his projects. The beauty is in its simplicity.",
        link: "https://www.david-zwelin.xyz/",
    },
    {
        title: "Mellowdy | Web App For Spotify",
        images: ["mellowdy1.png", "mellowdy2.png", "mellowdy3.png"],
        tags: ["React", "Redux", "Spotify API", "DESKTOP ONLY"],
        description:
            "Mellowdy is a front end application designed to explore new music efficiently in as short time span by taking advantage of the Spotify API. Each track is a short clip of roughly 30 seconds which you can add to your playlist or library directly from the website!",

        link: "https://github.com/Derrick-Aung/mellowdy",
    },
    {
        title: "Covid Track",
        images: ["corona-track1.JPG", "corona-track2.JPG"],
        tags: ["React", "Material UI", "ChartJS"],
        description:
            "Covid Track is a fully mobile responsive website where you receive the latest statistics on the novel coronavirus built with React and MaterialUI",
        link: "https://github.com/Derrick-Aung/covid-track",
    },
    {
        title: "Portfolio Design Concept",
        images: [
            "portfolio-design1.png",
            "portfolio-design2.png",
            "portfolio-design3.png",
            "portfolio-design4.png",
        ],
        tags: ["GITPAGES HOSTING", "CSS EFFECTS", "REACTJS"],
        description:
            "Everyone needs a cool portfolio and sometimes less is better. This is an experimental concept to sharpen my design skils",
        link: "https://derrick-aung.github.io/portfolio-design/",
    },
    {
        title: "This Website",
        images: ["this-site.JPG", "this-site2.JPG", "this-site3.JPG"],
        tags: ["Mobile First Approach", "Reactstrap", "AWS Amplify"],
        description: "The page you are looking at right now!",
    },
];

const projectImages = projects.map((project) => {
    let img;
    let images = [];
    for (img of project.images) {
        images.push(`${IMAGE_PATH}${img}`);
    }
    return images;
});

export default function Portfolio() {
    const [lightBox, setLightBox] = useState({
        isOpen: false,
        photoIndex: 0,
        projectIndex: 0,
    });

    const handleImgClick = (projectIndex) => {
        setLightBox({ ...lightBox, projectIndex, isOpen: true });
    };

    const projectCards = projects.map((project, index) => {
        return (
            <ProjectCard
                {...project}
                key={index}
                handleImgClick={() => handleImgClick(index)}
            />
        );
    });

    const images = projectImages[lightBox.projectIndex];
    const isOpen = lightBox.isOpen;
    const photoIndex = lightBox.photoIndex;

    return (
        <div className={styles.container}>
            <Helmet>
                <title>
                    Derrick Aung | Full Stack Web Developer Portfolio - React,
                    Node.js and more
                </title>
                <meta
                    name="description"
                    content="Derrick Aung (Aung Phone Khant) is a current Monash Computer Science student based in Melbourne, VIC aspiring to be a full-stack web developer specializing in React, NodeJS and AWS. Welcome to my developer portfolio, a place where I showcase my coding projects."
                />
            </Helmet>
            <h3 className={cx(styles.portfolioTitle, "my-4")}>What I Do</h3>
            <p className={styles.portfolioIntro}>
                To me websites are a form of art. It may not be a sculpture, a
                song or a painting but this is how I manifest my imagination
                into a visual form.
            </p>

            {projectCards}
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                    }
                    onCloseRequest={() =>
                        setLightBox({
                            ...lightBox,
                            isOpen: false,
                            photoIndex: 0,
                        })
                    }
                    onMovePrevRequest={() =>
                        setLightBox({
                            ...lightBox,
                            photoIndex:
                                (photoIndex + images.length - 1) %
                                images.length,
                        })
                    }
                    onMoveNextRequest={() =>
                        setLightBox({
                            ...lightBox,
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                    }
                />
            )}
        </div>
    );
}
