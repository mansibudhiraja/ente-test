import React from 'react'
import PriceDetails from './PriceDetails'
import styled from "styled-components"

const FreeTrial = styled.div `
    padding-left: 32px;
    padding-right: 32px; 
    padding-top: 28px;
    color: rgb(120, 120, 120);
`;


class Price extends React.Component{
    constructor(props){
        super(props)
        this.state = ({
            plans: [],
            toggle: false})
        this.handleToggle = this.handleToggle.bind(this)
    }

    fetchPrice =  async () => {
        try {
            const response = await fetch("https://api.ente.io/billing/plans/v2")
            if(response.ok){
                const jsonResponse = await response.json()
                return jsonResponse.plans
            }
        } catch (error) {
            console.log(error)       
        }
    }

    convert = (storage) => {
                return Math.ceil(storage/(1024 * 1024 * 1024))
            }

    async loadMonthlyPrice() {
       const allPlans = await this.fetchPrice()
       const monthly = allPlans.filter(plan => plan.period=== "month")
       this.setState({plans: monthly})
    }
    
    handleToggle() {
        this.toggle = !this.toggle
        if(!this.toggle){
            this.fetchPrice().then(plans => {
                const monthly = plans.filter(plan => plan.period === "month")
                this.setState({plans: monthly})
            })
        }
        else{
            this.fetchPrice().then(plans => {
                const yearly = plans.filter(plan => plan.period === "year")
                this.setState({plans: yearly})
            })
        }
    }


    componentDidMount(){
        this.loadMonthlyPrice()
    }

    componentWillUnmount(){
        this.setState = (state,callback)=>{
            return;
        };
    }
    
    render() {
        return (
            <div>
                <div id="pricing" className="pricing-section container align-items-center">
                    <div className="pricing-wrapper">
                        <div className="pricing-plan-section">
                            <div className="pricing-heading">
                                pricing
                            </div>
                            <div className="container" style={{marginTop: "12px"}}>
                                <div id="pricing-plans-monthly" className="row">
                                    {this.state.plans.map(plan => (
                                    <PriceDetails key={plan.id} 
                                            storage={this.convert(plan.storage)} 
                                            price={plan.price} 
                                            duration={plan.period}>
                                         <div className="col-auto pricing-plan-separator align-self-center"/>  
                                    </PriceDetails>
                                    ))}
                                   
                                </div>
                            </div>
    
                            <div className="row justify-content-center pricing-plan-duration-toggle">
                                <div id="pricing-plan-duration-monthly" className="col-auto pricing-plan-duration pricing-plan-duration-selected">
                                    monthly
                                </div>
                                <div className="col-auto">
                                    <input id="pricing-plan-duration-toggle" type="checkbox" className="toggle" onChange={this.handleToggle} />
                                </div>
                                <div id="pricing-plan-duration-yearly" className="col-auto pricing-plan-duration">
                                    yearly
                                </div>
                            </div>
                            <FreeTrial>
                                we offer a free trial of <strong id="free_plan_storage">1 GB</strong> for <strong id="free_plan_duration">365 days</strong>
                            </FreeTrial>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}



export default Price