import React from 'react'

const PriceDetails = (props) => {
    return (
        <>
        <div className="col pricing-plan">
            <span id={props.id} className="pricing-plan-storage">
                {props.storage}
            </span>
            <span className="pricing-plan-storage-unit">
                GB
            </span>
            <div id={props.id} className="price monthly-price">
                {props.price} / {props.duration}
            </div>  
        </div>
        {props.children}
    </>
    )
}

export default PriceDetails