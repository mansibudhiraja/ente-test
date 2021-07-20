import React from 'react'

const TeamDetailsLeft = (props) =>{
    return(
        <div>
            <div className="row align-items-center justify-content-center team-member team-member-left">
                <div className="col-auto">
                    <img className="img-fluid team-member-avatar" src={props.src} alt={props.alt} />
                </div>
                <div className="col-lg team-member-content-left">
                    <div className="team-member-name">{props.name}</div>
                    <div className="team-member-description">
                        <div className="team-member-description-line">{props.descriptiveLine1}</div>
                        <div className="team-member-description-line">{props.descriptiveLine2}</div>
                        <div className="team-member-description-line">{props.descriptiveLine3}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TeamDetailsRight = (props) =>{
    return(
        <div>
            <div className="row align-items-center justify-content-center team-member team-member-right">
                <div className="col-lg team-member-content-right">
                    <div className="team-member-name">{props.name}</div>
                    <div className="team-member-description">
                        <div className="team-member-description-line">{props.descriptiveLine1}</div>
                        <div className="team-member-description-line">{props.descriptiveLine2}</div>
                        <div className="team-member-description-line">{props.descriptiveLine3}</div>
                    </div>
                </div>
                <div className="col-auto order-lg-last order-first">
                    <img className="img-fluid team-member-avatar" src={props.src} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}
export {TeamDetailsLeft, TeamDetailsRight}