import React from 'react'
import Layout from '../components/layout/layout'
import Nav from '../components/Nav'

const Transparency = () => {
return(
    <div>
        <Layout>
            <Nav/>
            <div className="container page-title">
                transparency report
            </div>
            <div className="legal-section-wrapper" style={{fontSize: "18px !important"}} >
                <div className="legal-section-container container">
                    <div className="legal-section" style={{fontSize: "18px", lineHeight: 1.6}}>
                        <p style={{paddingTop: "12px"}}>we may someday receive requests from governments or organizations to take action toward some of our users' accounts.</p>
                        <p>due to the nature of our end-to-end encryption protocols, we will forever be unable to see the encrypted data that our users store on our servers.</p>
                        <p>but we may still be asked to either provide the encrypted data (to aid in an ongoing investigation), to permanently retain the encrypted data (to prevent the destruction of evidence), or if we are provided with overwhelming evidence that
                            the account was violating our terms, to take-down the encrypted data.</p>
                        <p>so far we have received no such requests and we will keep this page updated as and when we start receiving any.</p>
                        <br/>
                        <hr/>
                        <br/>
                        <p style={{textAlign: "center"}}>if you have any questions, please write to us at &#160;
                            <a href="mailto:friends@ente.io ">friends@ente.io</a>.</p>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
    )
}

export default Transparency