import React from 'react'

const Image = (props) => {
    return (
    <img className="img-fluid team-member-avatar" src={props.src} alt={props.name} />
    )
}

const TeamDescription = (props) => { 
    return (
    <>
        <div className="team-member-name">{props.name}</div>
        <div className="team-member-description">
            <div className="team-member-description-line">{props.descriptiveLine1}</div>
            <div className="team-member-description-line">{props.descriptiveLine2}</div>
            <div className="team-member-description-line">{props.descriptiveLine3}</div>
        </div>
    </>
    )
}

const TeamDetails = (props) => {
    if(props.direction === "left"){
        return (
        <div className={"row align-items-center justify-content-center team-member team-member-"+ props.direction} > 
            <div className="col-auto">
                <Image src={props.src} name={props.name}/>
            </div>
            <div className={"col-lg team-member-content-"+props.direction}>
                <TeamDescription name= {props.name} 
                    descriptiveLine1={props.descriptiveLine1} 
                    descriptiveLine2 = {props.descriptiveLine2}
                    descriptiveLine3 = {props.descriptiveLine3} />
            </div>
        </div>
        )
    }
    else{
        return (
        <div className={"row align-items-center justify-content-center team-member team-member-"+ props.direction} > 
            <div className="col-lg team-member-content-right">
            <TeamDescription name= {props.name} 
                descriptiveLine1={props.descriptiveLine1} 
                descriptiveLine2 = {props.descriptiveLine2}
                descriptiveLine3 = {props.descriptiveLine3} />
            </div>
            <div className="col-auto order-lg-last order-first">
                <Image src={props.src} name={props.name}/>
            </div>
        </div>
        )
    }
}


export default TeamDetails