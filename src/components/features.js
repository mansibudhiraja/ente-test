import React from 'react'
import hero from  '../images/hero.png'
import SimpleSvg from '../components/icons/SimpleSvg'
import PrivateSvg from '../components/icons/PrivateSvg'
import PermanentSvg from '../components/icons/PermanentSvg'
import OpenSvg from '../components/icons/OpenSvg'
import SocialSvg from '../components/icons/SocialSvg'
import ReactTextRotator from "react-text-rotator"
import '../components/layout/layout.css'
import {Link} from 'gatsby'
import FeatureDetails from './featureDetails'


const Features = () =>{

    const getMobileOperatingSystem = () =>{
        var userAgent = navigator.userAgent || navigator.vendor || window.opera

        if (/windows phone/i.test(userAgent)) {
            return "wp";
        }

        if (/android/i.test(userAgent)) {
            return "android";
        }

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "ios";
        }

        return "unknown";
    }

    const handleClick = () => {
        const os = getMobileOperatingSystem();
        if (os === "android") {
            window.location.href = "https://play.google.com/store/apps/details?id=io.ente.photos";
        } else if (os === "ios") {
            window.location.href = "https://apps.apple.com/in/app/ente-photos/id1542026904";
        } else {
            window.location.href = "#download";
        }
    }   

    const content = [
        {text: 'faces', className: "sidekick-main-text-faces", animation: "fade"},
        {text: 'stories', className: "sidekick-main-text-faces", animation: "fade"},
        {text: 'family', className: "sidekick-main-text-faces", animation: "fade"},
        {text: 'privacy', className: "sidekick-main-text-faces", animation: "fade"}]
    
    const fragment = <>
        ente's <a className="nostyle" href="https://github.com/ente-io" target="_blank" rel="noopener noreferrer" style={{textDecorationLine: "underline",
            textDecorationStyle: "dashed"}}>apps</a> and <Link className="nostyle" to="/architecture"
            style={{textDecorationLine: "underline", textDecorationStyle: "dashed"}}>architecture</Link> are open-source and peer reviewed.
     </>;

    return (
        <div>
            <div className="container hero-section">
                <div className="row align-items-center">
                    <div className="col-lg align-self-center" style={{maxWidth: "600px", paddingBottom: "40px"}}>
                        <div className="hero-text">encrypted backups for your photos, videos and memories</div>
                        <div className="row container align-items-end sidekick-section" style={{paddingRight: "0px"}} >
                        <div className="col-auto sidekick-text align-self-center" style={{paddingRight: "0px"}} >
                            protect your &#160;
                        </div>
                        <div id="rotate" className="col-auto sidekick-main-text align-self-center">
                            <ReactTextRotator content={content} time={1500} startDelay={100} transitionTime={500} />
                        </div>
                        <div className="col-auto sidekick-text align-self-center">&#160; from algorithms</div>
                    </div>
                    <div style={{marginTop: "60px", marginBottom: "20px"}}>
                        <button onClick={handleClick} id="download-button" className="download-button" >download</button>
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
                    <FeatureDetails id="feature_0" 
                            className={"col feature-item"}
                            title={"simple"}
                            text={"ente is so simple you already know how to use it."}
                            svg = {<SimpleSvg width={"50"} height={"50"} alt={"simple - ente is so simple you already know how to use it" }/> } >
                    </FeatureDetails>

                    <FeatureDetails id="feature_1" 
                            className={"col feature-item"}
                            title={"encrypted"}
                            text={"your photos on ente are end-to-end encrypted and only you can access them."}
                            svg = {<PrivateSvg width={"50"} height={"50"} alt={"private - your photos on ente are end-to-end encrypted and only you can access them" } />} >
                    </FeatureDetails>

                    <FeatureDetails id="feature_2" 
                            className={"col feature-item"}
                            title={"reliable"}
                            text={"ente preserves your data across locations, including an underground fallout shelter."}
                            svg = {<PermanentSvg width={"50"} height={"50"} alt={"permanent - preserve your data across locations"}/>} >
                    </FeatureDetails>

                    <FeatureDetails id="feature_3" 
                            className={"col feature-item"}
                            title={"open"}
                            text={fragment}
                            svg = {<OpenSvg width={"50"} height={"50"} alt={"open source and peer reviewed"}/>} >
                    </FeatureDetails>

                    <FeatureDetails id="feature_4"
                            className={"col feature-item feature-item-last"} 
                            title={"social"}
                            text={"ente lets you share your albums with your loved ones, end-to-end encrypted."}
                            svg = {<SocialSvg width={"50"} height={"50"} alt={"social - share your albums, end-to-end encrypted"}/>}>
                    </FeatureDetails>
                </div>
            </div>
        </div>
    )
}

export default Features