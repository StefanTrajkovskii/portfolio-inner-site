import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Gemak Trade</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://gemak.mk/home-en/'}
                        >
                            <h4>www.gemak.mk</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Engineer | Freelance</h3>
                        <b>
                            <p>May 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Developed and delivered 3 web applications utilizing
                    HTML5, CSS, Tailwind CSS, React, TypeScript, and Next.js.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Engineered responsive UI components to enhance cross-device compatibility and user experience. 
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented modern design practices and performance optimization techniques to improve application speed and efficiency 
                        </p>
                    </li>
                    <li>
                        <p>
                            Provided ongoing maintenance and updates for web applications based on client feedback.
                        </p>
                    </li>
                    <li>
                        <p>
                            Participated in weekly sprint planning and review meetings, providing accurate time estimates and progress updates.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Johnson Matthey</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://matthey.com/'}
                        >
                            <h4>www.matthey.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Power Platform Dev | Project</h3>
                        <b>
                            <p>Nov 2024 - Jan 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                Completed a 3-month academic project as part of a team of 4,
                focused on developing solutions with Microsoft Power Platform. 
                Designed and delivered custom apps, automated workflows, 
                and interactive dashboards to simulate real-world business use cases. 
                Strengthened skills in problem-solving and collaborative teamwork within an agile environment.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Engineered responsive UI components to enhance cross-device compatibility
                            and user experience.  
                        </p>
                    </li>
                    <li>
                        <p>
                            Designed and delivered custom applications, automated workflows, 
                            and interactive dashboards to  address simulated business use cases.  
                        </p>
                    </li>
                    <li>
                        <p>
                            Strengthened expertise in problem-solving 
                            and collaborative teamwork within a deadline-driven environment. 
                        </p>
                    </li>
                    <li>
                        <p>
                            Applied problem-solving skills to debug and optimize flows and apps, 
                            ensuring reliability and performance under deadline constraints.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Skillboost</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.linkedin.com/company/skillboostofficial/'}
                        >
                            <h4>linkedin/skillboostofficial</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer</h3>
                        <b>
                            <p>Jun 2024 - Sep 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked on full-stack web projects using Vue.js and Laravel, 
                    building responsive interfaces and scalable back-end solutions. 
                    Collaborated in an Agile team to implement features, optimize performance, 
                    and enhance overall user experience.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Collaborated within an Agile team environment to implement new features, 
                            optimize performance, and enhance user experience (UX).
                        </p>
                    </li>
                    <li>
                        <p>
                            Utilized Vue.js to build responsive and user-friendly interfaces, 
                            ensuring optimal performance across all devices.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented scalable back-end solutions using Laravel, 
                            ensuring efficient data handling and improved application performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed and maintained RESTful APIs to support dynamic front-end features 
                            and data synchronization.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
