import React from 'react'
import Layout from '../components/layout/layout'
import styled from 'styled-components'

const LegalSectionWrapper = styled.div`
    padding-left: 24px;
    padding-right: 24px;
`;

const LegalSectionContainer = styled.div`
    font-size: 14px;
    padding: 0px;
    background: rgba(23, 23, 23, 0.6);
    border-radius: 16px;
`;

const LegalSection = styled.div`
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    line-height: 136%;
    letter-spacing: 0.07;
    color: rgb(220, 220, 220);
    font-size: 16px;
    @media only screen and (min-width: 768px) {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 40px;
        padding-right: 40px;
        line-height: 136%;
        letter-spacing: 0.07;
        color: rgb(220, 220, 220);
        font-size: 16px;
    }
`;

const LegalSectionLink = styled.a`
    color: white;
    &:hover {
        color: #66FF91;
      }
`;



const Transparency = () => {
return(
    <div>
        <Layout>
            <div className="container page-title">
                transparency report
            </div>
            <LegalSectionWrapper style={{fontSize: "18px !important"}} >
                <LegalSectionContainer className="container">
                    <LegalSection style={{fontSize: "18px", lineHeight: 1.6}}>
                        <p style={{paddingTop: "12px"}}>we may someday receive requests from governments or organizations to take action toward some of our users' accounts.</p>
                        <p>due to the nature of our end-to-end encryption protocols, we will forever be unable to see the encrypted data that our users store on our servers.</p>
                        <p>but we may still be asked to either provide the encrypted data (to aid in an ongoing investigation), to permanently retain the encrypted data (to prevent the destruction of evidence), or if we are provided with overwhelming evidence that
                            the account was violating our terms, to take-down the encrypted data.</p>
                        <p>so far we have received no such requests and we will keep this page updated as and when we start receiving any.</p>
                        <br/>
                        <hr/>
                        <br/>
                        <p style={{textAlign: "center"}}>if you have any questions, please write to us at &#160;
                            <LegalSectionLink href="mailto:friends@ente.io ">friends@ente.io</LegalSectionLink>.</p>
                    </LegalSection>
                </LegalSectionContainer>
            </LegalSectionWrapper>
        </Layout>
    </div>
    )
}

export default Transparency