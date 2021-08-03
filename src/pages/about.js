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

const About = () => {
    return (
    <div>
        <Layout>
        <div className="container page-title">
            about
        </div>
        <div className="about-section-wrapper">
            <div className="about-section-container container">
                <div className="about-section">
                    <div className="about-section-item" style={{paddingTop: "0px"}} >
                        <div className="about-section-heading" style={{paddingTop: "0px"}}>
                            prelude
                        </div>
                        <div className="about-section-contents">
                            <p style={{marginBottom: "4px"}}>we collectively take over a trillion photos every year.</p>
                            <p style={{marginBottom: "4px"}}>these pictures speak a thousand words to the algorithms that index them.</p>
                        </div>
                    </div>
                    <div className="about-section-item" >
                        <div className="about-section-heading">
                                our story
                        </div>
                        <div className="about-section-contents">
                                <p style={{marginBottom: "4px"}}>ente was born out of a need for a simple, reliable archival solution for personal photos and videos, that is end-to-end encrypted.</p>
                                <p style={{marginBottom: "4px"}}>there was nothing out there that ticked all the boxes, so we started building one.</p>
                        </div>
                    </div>
                    <div className="about-section-item" >
                        <div className="about-section-heading">
                                the present
                        </div>
                        <div className="about-section-contents">
                                <p style={{marginBottom: "4px"}}>we have built apps across platforms that leverage a&#160;
                                    <a className="nostyle" href="https://en.wikipedia.org/wiki/Salsa20#ChaCha20_adoption" target="_blank" rel="noopener noreferrer" style={{textDecorationLine: "underline"}}>widely adopted encryption scheme</a> to securely encrypt all your memories.
                                </p>
                                <p style={{marginBottom: "4px"}}>they are preserved at multiple storage locations, and only you can decrypt them.</p>
                                <p style={{marginBottom: "4px"}}>Our&#160;
                                    <Link className="nostyle" to="/architecture" style={{textDecorationLine: "underline"}}>architecture</Link> and&#160;
                                    <a className="nostyle" href="https://github.com/ente-io" target="_blank" rel="noopener noreferrer" style={{textDecorationLine: "underline"}}>apps</a> have been reviewed by engineers from Google, Facebook, Amazon, Microsoft, Uber, ...
                                </p>
                        </div>
                        <p style={{marginBottom: "4px"}}>we are self-funded and profitable.</p>
                    </div>
                    <div className="about-section-item" >
                        <div className="about-section-heading">
                                the future
                        </div>
                        <div className="about-section-contents">
                                we will continue to enrich the product to spread delight.
                        </div>

                        <div className="team-heading">team</div>
                        <TeamDetailsLeft src={vishnu} alt={"vishnu"} name={"vishnu"}
                            descriptiveLine1={"laid the first brick"} 
                            descriptiveLine2={"has engineered products at Google, Zeta, Flock and Ringo"} 
                            descriptiveLine3={"cares deeply about the sanctity of his personal memories"}/>

                            <TeamDetailsRight src={neeraj} alt={"neeraj"} name={"neeraj"}
                            descriptiveLine1={"full stack warrior"} 
                            descriptiveLine2={"has architected infrastructure at Uber, Zeta, Flock and Ringo"} 
                            descriptiveLine3={"overflows them stacks"}/>
                        
                        <TeamDetailsLeft src={abhinav} alt={"abhinav"} name={"abhinav"}
                            descriptiveLine1={"engineers much of our desktop apps and server"} 
                            descriptiveLine2={"left a cushy job because he identified with the mission"} 
                            descriptiveLine3={"mechanical engineer by discipline"}/>
                        
                        <TeamDetailsRight src={shanthy} alt={"shanthy"} name={"shanthy"}
                            descriptiveLine1={"constantly finds faults in our code"} 
                            descriptiveLine2={"loves her photos, averages around 10,000 clicks a year"} 
                            descriptiveLine3={"dermatologist by day, qa by night"}/>
                        <br></br>

                        <div className="about-section-title">contributors</div>
                        <TeamDetailsLeft src={rahul} alt={"rahul"} name={"rahul"}
                            descriptiveLine1={"nice guy who is emotionally blackmailed into designing everything pretty you see"} 
                            descriptiveLine2={"if something is ugly, blame one of the rest"} 
                            descriptiveLine3={"has the best dogs"}/>
                        
                        <TeamDetailsRight src={pushkar} alt={"pushkar"} name={"pushkar"}
                            descriptiveLine1={"understands css, attempting to understand women"} 
                            descriptiveLine2={"laid the foundation for our web app"} 
                            descriptiveLine3={"shames us when we write shitty js"}/>

                        <TeamDetailsLeft src={isneesh} alt={"isneesh"} name={"isneesh"}
                            descriptiveLine1={"the calming presence in our lives"} 
                            descriptiveLine2={"when not watering her plants, helps us design and verify our encryption protocols"} 
                            descriptiveLine3={"drinks green tea"}/>    

                        <TeamDetailsRight src={atul} alt={"atul"} name={"atul"}
                            descriptiveLine1={"soft spoken, wise"} 
                            descriptiveLine2={"has designed and built much of our resilient data-replication layer"} 
                            descriptiveLine3={"has architected many other impressive systems"}/>
                        
                        <TeamDetailsLeft src={dhiraj} alt={"dhiraj"} name={"dhiraj"}
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
                </div>
            </div>
        </div>
    </Layout>
    </div>
    )
}

export default About