import React from 'react';
// @ts-ignore
// import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
// import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';
import Link from '../../general/Link';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Professional</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Gemak Games</h2>
                <br />
                <p>
                Developed and delivered three web projects using HTML, 
                CSS/Tailwind, React, TypeScript, and Next.js. 
                Collaborated with the company to implement responsive UI components, improve performance, 
                and ensure modern design practices. Focused on building scalable, user-friendly front-end solutions tailored to client requirements.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Gameplay showcase of the interactive web-based puzzle built with React and Tailwind.
                        </sub>
                    </p>
                </div>
                <p>
                A quick technical breakdown of the projects. 
                I developed three separate web applications — a navigation hub, 
                an interactive puzzle game, and a quiz game. 
                All three were built using React, TypeScript, Tailwind CSS, and Next.js, 
                focusing on responsive design, clean UI, and smooth user experience. 
                Each project demonstrates different aspects of front-end development — 
                from intuitive navigation layouts to interactive game logic and dynamic content handling.
                </p>
                <br />
                <br />
                
            </div>
            
            <div className="text-block">
                <h2>Additional Experience</h2>
                <p>
                    I've also completed internships at Skillboost and Johnson Matthey, 
                    where I worked on various projects that I can't showcase here due to 
                    confidentiality and proprietary restrictions. These experiences involved 
                    enterprise-level applications, internal tools, and client-specific solutions 
                    that demonstrate my ability to work with sensitive business requirements and 
                    deliver production-ready software.
                </p>
                <br />
                <p>
                    I have certificates from these experiences. {' '}<Link to="certificates" text="Click here to view my certificates" />.
                </p>
            </div>

        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
