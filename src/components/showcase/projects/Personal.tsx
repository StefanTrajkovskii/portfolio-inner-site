import React from 'react';
// @ts-ignore
// import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
// import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
// import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
// import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
// @ts-ignore
import threeDProject from '../../../assets/pictures/projects/software/3D-project.mp4';
// @ts-ignore
import financeTrackerVideo from '../../../assets/pictures/projects/software/finance-tracker.mp4';
// @ts-ignore
import guitarLearningAppVideo from '../../../assets/pictures/projects/software/guitar-learning-app.mp4';
import VideoAsset from '../../general/VideoAsset';
import Link from '../../general/Link';
import ResumeDownload from '../ResumeDownload';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Personal</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <br />
            <h2>3D Project</h2>
            <br />
            <p>
                I've been learning 3D modeling and animation as a way to expand my creative skills. 
                This project represents my journey into the world of 3D graphics, where I've been 
                exploring different techniques and tools to bring ideas to life in three dimensions.
            </p>
            <br />
            <p>
                Through trial and error, I've been developing my understanding of 3D workflows, 
                from modeling and texturing to lighting and rendering. This project showcases 
                some of the work I've created during this learning process.
            </p>
            <br />
            <br />
            <div className="captioned-image">
                <VideoAsset src={threeDProject} />
                <p>
                    <sub>
                        <b>Figure 1:</b> Showcase of my 3D learning project demonstrating 
                        modeling, texturing, and animation techniques.
                    </sub>
                </p>
            </div>
            <h3>Links:</h3>
            <ul>
                <li>
                    <Link to="" outsideTo="https://3d-project-umber.vercel.app/" text="[ 3D Site ] - Website project" containerStyle={{display: 'inline'}} />
                </li>
                <li>
                    <Link to="" outsideTo="https://github.com/StefanTrajkovskii/3d-project" text="[ GitHub ] - Repository" containerStyle={{display: 'inline'}} />
                </li>
            </ul>
            <br />
            <br />
            <h2>Finance Tracker App</h2>
            <br />
            <p>
                I made the finance tracker app so it will be easier for me and my friend 
                to track our transactions while we were in America on work and travel. 
                This project was born out of necessity during our time abroad, where we 
                needed a simple and efficient way to manage our shared expenses and 
                individual spending. The app helped us stay organized and transparent 
                about our financial activities during our work and travel experience.
            </p>
            <br />
            <div className="captioned-image">
                <VideoAsset src={financeTrackerVideo} />
                <p>
                    <sub>
                        <b>Figure 2:</b> Demo of the finance tracker app showing 
                        adding a transaction.
                    </sub>
                </p>
            </div>
            <br />
            <p>
                The app was built with React and TypeScript, designed to be mobile-friendly 
                so we could easily add transactions on the go from our phones. This mobile-first 
                approach was crucial during our travels, as we often needed to quickly log 
                expenses while we were out and about. The responsive design ensured we could 
                access and update our financial data seamlessly across different devices.
            </p>
            <br />
            <h3>Links:</h3>
            <ul>
                <li>
                    <Link to="" outsideTo="https://finance-tracker-zeta-seven.vercel.app/" text="[ Finance Tracker ] - Website project" containerStyle={{display: 'inline'}} />
                </li>
                <li>
                    <Link to="" outsideTo="https://github.com/StefanTrajkovskii/transactions-tracking" text="[ GitHub ] - Repository" containerStyle={{display: 'inline'}} />
                </li>
            </ul>

            <br />
            <br />
            <h2>Guitar Learning App</h2>
            <br />
            <p>
                This project was born out of helping a friend of mine who was interested in learning guitar but didn't know where to start and it was also a good way to practice my react skills.
                The app provides a centralized hub and is mobile friendly with all the essential resources and 
                learning materials he needs to begin his guitar journey.
            </p>.
            <br />
            <div className="captioned-image">
                <VideoAsset src={guitarLearningAppVideo} />
                <p>
                    <sub>
                        <b>Figure 3:</b> Demo of the guitar learning app showing some of the features.
                    </sub>
                </p>
            </div>
            <h3>Links:</h3>
            <ul>
                <li>
                    <Link to="" outsideTo="https://guitar-app-alpha.vercel.app/" text="[ Guitar Learning App ] - Website project" containerStyle={{display: 'inline'}} />
                </li>
            </ul>
            <ResumeDownload />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
