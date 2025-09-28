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
                        <h3>Power Platform Developer</h3>
                        <b>
                            <p>November 2024 - January 2025</p>
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
                        <h1>K-F/X</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://kfxnyc.com/'}
                        >
                            <h4>www.kfxnyc.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Special Effects Technician</h3>
                        <b>
                            <p>Fall 2019, Summer 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Applied problem solving and technical skills to operate
                    large equipment such as rain machines, fog machines, small
                    explosives and general rigging with a professional crew of
                    50+ people.
                </p>
                <br />
                <h3 style={styles.indent}>Screen Credits:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Ray Donovan</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/ray-donovan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Ray Donovan: The Movie</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.sho.com/titles/3508117/ray-donovan-the-movie"
                                target="_blank"
                                rel="noreferrer"
                            >
                                SHOWTIME
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Hightown</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.starz.com/us/en/series/hightown/57463"
                                target="_blank"
                                rel="noreferrer"
                            >
                                STARZ
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• Bull</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.cbs.com/shows/bull/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CBS
                            </a>{' '}
                            ]
                        </p>
                    </li>
                    <li style={styles.row}>
                        <p>• At Home with Amy Sedaris</p>
                        <p>
                            [{' '}
                            <a
                                href="https://www.trutv.com/shows/at-home-with-amy-sedaris"
                                target="_blank"
                                rel="noreferrer"
                            >
                                truTV
                            </a>{' '}
                            ]
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
