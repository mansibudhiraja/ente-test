import React from 'react'

const FeatureDetails = (props) => {
    return(
        <div id={props.id} className={props.className} >
            <div className="feature-item-title">
                {props.title}
            </div>
            <div className="feature-item-text">
                {props.text}
            </div>
                <div className= "feature-item-image">{props.svg}</div>
        </div>
    )
}


export default FeatureDetails