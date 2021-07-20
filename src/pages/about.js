import React from 'react'
import Nav from './Nav'
import '../components/layout/layout.css'

const About = () => {
    return(
        <div>
            <Nav/>
             
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
                                    <p style={{marginBottom: "4px"}}>we have built apps across platforms that leverage a
                                        <a className="nostyle" href="https://en.wikipedia.org/wiki/Salsa20#ChaCha20_adoption" target="_blank" rel="noopener" style={{textDecorationLine: "underline"}}>widely adopted encryption scheme</a> to securely encrypt all your memories.
                                    </p>
                                    <p style={{marginBottom: "4px"}}>they are preserved at multiple storage locations, and only you can decrypt them.</p>
                                    <p style={{marginBottom: "4px"}}>Our&#160;
                                        <a className="nostyle" href="https://ente.io/encryption" target="_blank" rel="noopener" style={{textDecorationLine: "underline"}}>architecture</a> and&#160;
                                        <a className="nostyle" href="https://github.com/ente-io" target="_blank" rel="noopener" style={{textDecorationLine: "underline"}}>apps</a> have been reviewed by engineers from Google, Facebook, Amazon, Microsoft, Uber, ...
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About