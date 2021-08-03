import React from 'react'

const FeatureDetails = (props) => {
    return(
        <div id={props.id} className="col feature-item">
            <div className="feature-item-title">
                {props.title}
            </div>
            <div className="feature-item-text">
                {props.text}
            </div>
            <img className="feature-item-image" src={props.src} alt={props.alt} />
        </div>
    )
}


export default FeatureDetails