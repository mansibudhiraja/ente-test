import React from 'react'


class Price extends React.Component{
    constructor(props){
        super(props)
        this.state = ({ storage0: "",
            storage1: "",
            storage2: "",
            price0: "",
            price1: "",
            price2: "",
            duration: "",
            toggle: false})
        this.handleToggle = this.handleToggle.bind(this)
    }

    fetchPrice =  async () => {
        try {
            const response = await fetch("https://api.ente.io/billing/plans")
            if(response.ok){
                const jsonResponse = await response.json();
                return jsonResponse.plans.map(plan => ({
                    id: plan.id,
                    storage: plan.storage,
                    price: plan.price,
                    period: plan.period
                }));
            }
        } catch (error) {
            console.log(error)       
        }
    }

    convert = (storage) => {
                return Math.ceil(storage/(1024 * 1024 * 1024))
            }

    loadMonthlyPrice() {
        this.fetchPrice().then(response => {
            this.setState({
                storage0: this.convert(response[0].storage),
                storage1: this.convert(response[2].storage),
                storage2: this.convert(response[4].storage),
                price0: response[0].price,
                price1: response[2].price,
                price2: response[4].price,
                duration:response[0].period, 
                toggle: false 
            })
        })
    }
    
    handleToggle() {
        this.toggle = !this.toggle
        if(!this.toggle){
        this.fetchPrice().then(response => {
            this.setState({
                storage0: this.convert(response[0].storage),
                storage1: this.convert(response[2].storage),
                storage2: this.convert(response[4].storage),
                price0: response[0].price,
                price1: response[2].price,
                price2: response[4].price,
                duration:response[0].period, 
            })
        })
    }
    else{
        this.fetchPrice().then(response => {
            this.setState({
                storage0: this.convert(response[1].storage),
                storage1: this.convert(response[3].storage),
                storage2: this.convert(response[5].storage),
                price0: response[1].price,
                price1: response[3].price,
                price2: response[5].price,
                duration:response[3].period, 
            })
        })
    }
    }


    componentDidMount(){
        this.loadMonthlyPrice()
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
                                    <div className="col pricing-plan">
                                        <span id="storage_0" className="pricing-plan-storage">{this.state.storage0}</span>
                                        <span className="pricing-plan-storage-unit">GB</span>
                                        <div id="pricing_0" className="price monthly-price">{this.state.price0} / {this.state.duration}</div>
                                        {/* <div id="pricing_3" className="price yearly-price" style={{display:"none"}}></div> */}
                                    </div>
                                    <div className="col-auto pricing-plan-separator align-self-center"></div>
                                    <div className="col pricing-plan">
                                        <span id="storage_1" className="pricing-plan-storage">{this.state.storage1}</span>
                                        <span className="pricing-plan-storage-unit">GB</span>
                                        <div id="pricing_1" className="price monthly-price">{this.state.price1} / {this.state.duration}</div>
                                        {/* <div id="pricing_4" className="price yearly-price" style={{display:"none"}}></div> */}
                                    </div>
                                    <div className="col-auto pricing-plan-separator align-self-center"></div>
                                    <div className="col pricing-plan">
                                        <span id="storage_2" className="pricing-plan-storage">{this.state.storage2}</span>
                                        <span className="pricing-plan-storage-unit">GB</span>
                                        <div id="pricing_2" className="price monthly-price">{this.state.price2} / {this.state.duration}</div>
                                        {/* <div id="pricing_5" className="price yearly-price" style={{display:"none"}}></div> */}
                                    </div>
                                </div>
                            </div>
    
                            <div className="row justify-content-center pricing-plan-duration-toggle">
                                <div id="pricing-plan-duration-monthly"
                                    className="col-auto pricing-plan-duration pricing-plan-duration-selected">
                                    monthly
                                </div>
                                <div className="col-auto">
                                    <input id="pricing-plan-duration-toggle" type="checkbox" className="toggle" onChange={this.handleToggle} />
                                </div>
                                <div id="pricing-plan-duration-yearly" className="col-auto pricing-plan-duration">yearly</div>
                            </div>
                            <div style={{paddingLeft: "32px", paddingRight: "32px", paddingTop: "28px", color: "rgb(120, 120, 120)"}}>
                                we offer a free trial of <strong id="free_plan_storage">1 GB</strong> for <strong id="free_plan_duration">365 days</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}



export default Price