import React from 'react'
import '../components/layout/layout.css'
import {CSSTransitionGroup} from 'react-transition-group'

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
            <CSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
            <div id={props.id} className="price monthly-price">
                {props.price} / {props.duration}
            </div>  
            </CSSTransitionGroup>
        </div>
        {props.children}
    </>
    )
}

export default PriceDetails