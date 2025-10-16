import React, { useState } from 'react';
// @ts-ignore
// import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
// import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
// import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
// @ts-ignore
import threeDProject from '../../../assets/pictures/projects/software/3D-project.mp4';
import { MusicPlayer } from '../../general';
import VideoAsset from '../../general/VideoAsset';
import Link from '../../general/Link';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Personal</h1>
            <h3>Projects</h3>
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
            <h2>My love for Drum & Bass</h2>
            <br />
            <p>
                I've always loved drum & bass, and over the years I feel like I
                always come back to it. My first song I ever made was a DnB
                track and as I've continued to make music over these last few
                years the way I produce DnB really reflects my specific taste at
                that time. It's very fun looking back at the various DnB styles
                I've taken stabs at over time and how my taste has evolved.
            </p>
            <br />
            <p>
                The track below is a snip-it from a DnB track I started work on
                back in 2019. I recently decided to pick it up again and work on
                it more because I loved the idea, bassline and especially the
                drums. Below is a short demo of the track including a small
                buildup and drop.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Henry Heffernan - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Like I said, I decided to come back to this track because I
                absolutely loved so much about it. When I picked up work on it
                again I decided to totally remix the drums and I'm super proud
                with how they turned out. So proud in fact, I wanted to show
                them off some more on their own! Below are the drums in the
                above track, but isolated. I have also included the sub bass
                because it is drum and bass after all!
            </p>
            <br />
            <br />
            <div className="captioned-image">
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
            <p>
                There are a lot of layers to DnB drums, and I honestly find them
                the hardest to mix and get right since the sound design of DnB
                so often wants to fight in the same frequency range as the
                drums. Because of this I use very aggressive sidechain to keep
                the drums clear while giving me the freedom to not have to
                overly eq the bass and general sound design. I also find that
                parallel compression on drums in DnB can be an absolute life
                saver to keep the drums controlled but still hard hitting.
            </p>
            <br />
            <h2>The Future of my music</h2>
            <br />
            <p>
                I love to make music and will continue to make music as long as
                I can. I think soon enough I will be releasing music publicly
                since I feel like my personal style has slowly developed into
                something I am proud of over these last few years. I also want
                to one day make an album, but that is a long ways away.
            </p>
            <br />
            <p>
                I am aware this section of my portfolio is rather short, but
                it's because I am very selective with what I want to show off to
                the world. I've been producing for over 6 years and have made
                hundreds maybe even a thousand tracks/loops in that time. I only
                recently have been feeling very content with the stuff I've made
                and I'm very excited to see what I can do for the future. Thanks
                for listening I hope you enjoyed!
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
