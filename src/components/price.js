import React from 'react'

const Price = () => {
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
                                    <span id="storage_0" className="pricing-plan-storage"></span>
                                    <span className="pricing-plan-storage-unit">GB</span>
                                    <div id="pricing_0" className="price monthly-price"></div>
                                    <div id="pricing_3" className="price yearly-price" style={{display:"none"}}></div>
                                </div>
                                <div className="col-auto pricing-plan-separator align-self-center"></div>
                                <div className="col pricing-plan">
                                    <span id="storage_1" className="pricing-plan-storage"></span>
                                    <span className="pricing-plan-storage-unit">GB</span>
                                    <div id="pricing_1" className="price monthly-price"></div>
                                    <div id="pricing_4" className="price yearly-price" style={{display:"none"}}></div>
                                </div>
                                <div className="col-auto pricing-plan-separator align-self-center"></div>
                                <div className="col pricing-plan">
                                    <span id="storage_2" className="pricing-plan-storage"></span>
                                    <span className="pricing-plan-storage-unit">GB</span>
                                    <div id="pricing_2" className="price monthly-price"></div>
                                    <div id="pricing_5" className="price yearly-price" style={{display:"none"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center pricing-plan-duration-toggle">
                            <div id="pricing-plan-duration-monthly"
                                className="col-auto pricing-plan-duration pricing-plan-duration-selected">
                                monthly
                            </div>
                            <div className="col-auto">
                                <input id="pricing-plan-duration-toggle" type="checkbox" className="toggle" />
                            </div>
                            <div id="pricing-plan-duration-yearly" className="col-auto pricing-plan-duration">yearly</div>
                        </div>
                        <div style={{paddingLeft: "32px", paddingRight: "32px", paddingTop: "28px", color: "rgb(120, 120, 120)"}}>
                            we offer a free trial of
                            <strong id="free_plan_storage">1 GB</strong> for <strong id="free_plan_duration">365 days</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Price