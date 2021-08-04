import React from 'react'
import '../components/layout/layout.css'
import {TeamDetailsLeft, TeamDetailsRight} from '../components/TeamDetails'
import vishnu from '../images/team/vishnu.png'
import neeraj from '../images/team/neeraj.png'
import abhinav from '../images/team/abhinav.png'
import atul from '../images/team/atul.png'
import isneesh from '../images/team/isneesh.png'
import pushkar from '../images/team/pushkar.png'
import shanthy from '../images/team/shanthy.png'
import rahul from '../images/team/rahul.png'
import dhiraj from '../images/team/dhiraj.png'
import Layout from '../components/layout/layout'
import {Link} from 'gatsby'
import styled from 'styled-components'

const AboutSectionwWrapper = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    @media only screen and (min-width: 768px) {
        padding: 0px;
    }
`;

const AboutSectionContainer = styled.div`
    font-size: 14px;
    padding: 0px;
    background: rgba(23, 23, 23, 0.6);
    border-radius: 16px;
    @media only screen and (min-width: 768px) {
        font-size: 18px;
        padding: 0px;
        background: rgba(23, 23, 23, 0.6);
        border-radius: 16px;
    }
`;

const AboutSection = styled.div`
    padding: 20px;
    line-height: 136%;
    letter-spacing: 0.07;
    @media only screen and (min-width: 768px) {
        padding: 60px;
        line-height: 140%;
        letter-spacing: 0.07;
    }
`;



const AboutSectionHeading = styled.div`
    font-size: 18px;
    padding-bottom: 6px;
    padding-top: 22px;
    @media only screen and (min-width: 768px) {
        font-size: 26px;
        padding-bottom: 12px;
        padding-top: 16px;
    }
`;

const AboutSectionContents = styled.div`
    color: rgb(210, 210, 210);
    margin-bottom: 4px;
    @media only screen and (min-width: 768px) {}
`;

const AboutMarginBottom = styled.p`
    margin-bottom: 4px;
`;

const About = () => {
    return (
        <Layout>
        <div className="container page-title">
            about
        </div>
        <AboutSectionwWrapper>
            <AboutSectionContainer className="container">
                <AboutSection>
                    <div className="about-section-item" style={{paddingTop: "0px"}} >
                        <AboutSectionHeading style={{paddingTop: "0px"}}>
                            prelude
                        </AboutSectionHeading>
                        <AboutSectionContents>
                            <AboutMarginBottom>we collectively take over a trillion photos every year.</AboutMarginBottom>
                            <AboutMarginBottom>these pictures speak a thousand words to the algorithms that index them.</AboutMarginBottom>
                        </AboutSectionContents>
                    </div>
                    <div className="about-section-item" >
                        <AboutSectionHeading>
                                our story
                        </AboutSectionHeading>
                        <AboutSectionContents>
                                <AboutMarginBottom>ente was born out of a need for a simple, reliable archival solution for personal photos and videos, that is end-to-end encrypted.</AboutMarginBottom>
                                <AboutMarginBottom>there was nothing out there that ticked all the boxes, so we started building one.</AboutMarginBottom>
                        </AboutSectionContents>
                    </div>
                    <div className="about-section-item" >
                        <AboutSectionHeading>
                                the present
                        </AboutSectionHeading>
                        <AboutSectionContents>
                                <AboutMarginBottom>we have built apps across platforms that leverage a&#160;
                                    <a className="nostyle" href="https://en.wikipedia.org/wiki/Salsa20#ChaCha20_adoption" target="_blank" rel="noopener noreferrer" style={{textDecorationLine: "underline"}}>widely adopted encryption scheme</a> to securely encrypt all your memories.
                                </AboutMarginBottom>
                                <AboutMarginBottom>they are preserved at multiple storage locations, and only you can decrypt them.</AboutMarginBottom>
                                <AboutMarginBottom>Our&#160;
                                    <Link className="nostyle" to="/architecture" style={{textDecorationLine: "underline"}}>architecture</Link> and&#160;
                                    <a className="nostyle" href="https://github.com/ente-io" target="_blank" rel="noopener noreferrer" style={{textDecorationLine: "underline"}}>apps</a> have been reviewed by engineers from Google, Facebook, Amazon, Microsoft, Uber, ...
                                </AboutMarginBottom>
                                <AboutMarginBottom>we are self-funded and profitable.</AboutMarginBottom>
                        </AboutSectionContents>   
                    </div>
                    <div className="about-section-item" >
                        <AboutSectionHeading>
                                the future
                        </AboutSectionHeading>
                        <AboutSectionContents>
                                we will continue to enrich the product to spread delight.
                        </AboutSectionContents>

                        <div className="team-heading">team</div>
                        <TeamDetailsLeft src={vishnu} name={"vishnu"}
                            descriptiveLine1={"laid the first brick"} 
                            descriptiveLine2={"has engineered products at Google, Zeta, Flock and Ringo"} 
                            descriptiveLine3={"cares deeply about the sanctity of his personal memories"}/>

                            <TeamDetailsRight src={neeraj}  name={"neeraj"}
                            descriptiveLine1={"full stack warrior"} 
                            descriptiveLine2={"has architected infrastructure at Uber, Zeta, Flock and Ringo"} 
                            descriptiveLine3={"overflows them stacks"}/>
                        
                        <TeamDetailsLeft src={abhinav} name={"abhinav"}
                            descriptiveLine1={"engineers much of our desktop apps and server"} 
                            descriptiveLine2={"left a cushy job because he identified with the mission"} 
                            descriptiveLine3={"mechanical engineer by discipline"}/>
                        
                        <TeamDetailsRight src={shanthy} name={"shanthy"}
                            descriptiveLine1={"constantly finds faults in our code"} 
                            descriptiveLine2={"loves her photos, averages around 10,000 clicks a year"} 
                            descriptiveLine3={"dermatologist by day, qa by night"}/>
                        <br></br>

                        <div className="about-section-title">contributors</div>
                        <TeamDetailsLeft src={rahul} name={"rahul"}
                            descriptiveLine1={"nice guy who is emotionally blackmailed into designing everything pretty you see"} 
                            descriptiveLine2={"if something is ugly, blame one of the rest"} 
                            descriptiveLine3={"has the best dogs"}/>
                        
                        <TeamDetailsRight src={pushkar} name={"pushkar"}
                            descriptiveLine1={"understands css, attempting to understand women"} 
                            descriptiveLine2={"laid the foundation for our web app"} 
                            descriptiveLine3={"shames us when we write shitty js"}/>

                        <TeamDetailsLeft src={isneesh} name={"isneesh"}
                            descriptiveLine1={"the calming presence in our lives"} 
                            descriptiveLine2={"when not watering her plants, helps us design and verify our encryption protocols"} 
                            descriptiveLine3={"drinks green tea"}/>    

                        <TeamDetailsRight src={atul} name={"atul"}
                            descriptiveLine1={"soft spoken, wise"} 
                            descriptiveLine2={"has designed and built much of our resilient data-replication layer"} 
                            descriptiveLine3={"has architected many other impressive systems"}/>
                        
                        <TeamDetailsLeft src={dhiraj} name={"dhiraj"}
                            descriptiveLine1={"good with numbers, helps us stay profitable"} 
                            descriptiveLine2={"also finds bugs and is merciless with his feedback"} 
                            descriptiveLine3={"investment banker, all about hodl"}/> 
                        
                        <h3 class="about-section-title">others</h3>
                        <div style={{textAlign: "center", color: "rgb(210, 210, 210)", lineHeight: "1"}}>
                            <p>there are many others, who have guided and helped this project come to life</p>
                            <p>friends, family, internet strangers, ...</p>
                            <p>and the thousands of open source contributors who built the wheels we roll on</p>
                            <p>we are most grateful for everyone’s kindness</p>
                            <p>❤️</p>
                        </div>
                    </div>
                </AboutSection>
            </AboutSectionContainer>
        </AboutSectionwWrapper>
    </Layout>
    )
}

export default About