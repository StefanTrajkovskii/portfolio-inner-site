import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/cropped_stif_u_banjarka_na_laptop.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Stefan Trajkovski</h3>
            <br />
            <div className="text-block">
                <p>
                    I’m a software engineer currently in my final year at Brainster Next College, pursuing my Bachelor’s degree in Software Engineering.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:s.trajkovski23@gmail.com">
                        s.trajkovski23@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I was deeply interested in computers and had an obsession with building things. By the time I was 15, I built my first computer from individual components, and since then I’ve built three in total. That hands-on curiosity with technology naturally pushed me toward software engineering.
                </p>
                <br />
                {/* <div className="captioned-image">
                    <img src={meNow} style={styles.image} alt="" />
                </div> */}

                <p>
                    I started programming more seriously in college,
                    initially learning how to interact with websites.
                    I went on to do a ton of passion projects, including websites,
                    multiple game projects, apps, and more. All of these
                    projects are viewable on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                I started programming more seriously in college, where I quickly became passionate about web development and frontend technologies.
                Since then, I’ve worked on multiple projects, including an internship at EasySteps and a large-scale event calendar project for organizations like Taksirat, Macedonian Opera and Ballet, and Password Production.
                You can explore more of my work and experience on my{' '}
                <Link to="/experience">Experience</Link> page.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are Basketball
                            and playing guitar. Some other hobbies I
                            enjoy are working out, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I actively participated in different group projects and collaborations,
                            which helped me build both technical and teamwork skills. 
                            Through these experiences, 
                            I connected with a lot of great people and really enjoyed being part of a supportive community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Me, 2015
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                    Have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:s.trajkovski23@gmail.com">
                        s.trajkovski23@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
