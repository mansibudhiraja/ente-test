import React from 'react'
import hero from  '../images/hero.png'
import simple from '../images/simple.svg'
import privateImg from '../images/private.svg'
import permanent from '../images/permanent.svg'
import open from '../images/open.svg'
import social from '../images/social.svg'


const Features = () =>{
    return (
        <div>
            <div className="container hero-section">
                <div className="row align-items-center">
                <div className="col-lg align-self-center" style={{maxWidth: "600px", paddingBottom: "40px"}}>
                    <div className="hero-text">encrypted backups for your photos, videos and memories</div>
                    <div className="row container align-items-end sidekick-section" style={{paddingRight: "0px"}} >
                    <div className="col-auto sidekick-text align-self-center" style={{paddingRight: "0px"}} >
                        protect your
                    </div>
                    <div id="rotate" className="col-auto sidekick-main-text align-self-center">
                        <span className="sidekick-main-text-faces">faces</span>
                        <span>stories</span>
                        <span>family</span>
                        <span>privacy</span>
                    </div>
                    <div className="col-auto sidekick-text align-self-center">from algorithms</div>
                    <div style={{marginTop: "60px", marginBottom: "20px"}}>
                        <button id="download-button" className="download-button">download</button>
                    </div>
                    </div>
                </div>
                <div className="col-lg align-self-center order-lg-last order-first">
                    <img className="img-fluid hero-image" src={hero} alt="ente cross platform encrypted gallery" /> 
                </div>
                <img className="img-fluid hero-image-mobile" src={hero} alt="ente cross platform encrypted gallery" />
                </div>
            </div>

            <div id="features" className="container">
                <div className="row justify-content-md-center">
                    <div id="feature_0" className="col feature-item">
                        <div className="feature-item-title">simple</div>
                        <div className="feature-item-text">ente is so simple you already know how to use it.
                        </div>
                        <img className="feature-item-image" src={simple} alt="simple - ente is so simple you already know how to use it" />
                    </div>
                    <div id="feature_1" className="col feature-item">
                        <div className="feature-item-title">encrypted</div>
                        <div className="feature-item-text">your photos on ente are end-to-end encrypted and only you can access
                            them.
                        </div>
                        <img className="feature-item-image" src={privateImg} alt="private - your photos on ente are end-to-end encrypted and only you can access them" />
                    </div>
                    <div id="feature_2" className="col feature-item">
                        <div className="feature-item-title">reliable</div>
                        <div className="feature-item-text">ente preserves your data across locations, including an underground
                            fallout shelter.
                        </div>
                        <img className="feature-item-image" src={permanent} alt="permanent - preserve your data across locations" />
                    </div>
                    <div id="feature_3" class="col feature-item">
                        <div className="feature-item-title">trusted</div>
                        <div className="feature-item-text">ente's <a className="nostyle" href="https://github.com/ente-io"
                                target="_blank" rel="noopener" style={{textDecorationLine: "underline",
                            textDecorationStyle: "dashed"}}>apps</a> and <a className="nostyle" href="/architecture.html"
                            style={{textDecorationLine: "underline", textDecorationStyle: "dashed"}}>architecture</a> are
                            open-source
                            and peer reviewed.
                        </div>
                        <img className="feature-item-image" src={open} alt="open source and peer reviewed" />
                    </div>
                    <div id="feature_4" className="col feature-item feature-item-last">
                        <div className="feature-item-title">social</div>
                        <div className="feature-item-text">ente lets you share your albums with your loved ones, end-to-end
                            encrypted.
                        </div>
                        <img className="feature-item-image" src={social}
                            alt="social - share your albums, end-to-end encrypted" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features