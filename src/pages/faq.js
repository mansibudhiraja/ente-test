import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'
import styled from 'styled-components'


const FaqSectionWrapper = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    font-size: 18px !important;
`;

const FaqSectionContainer = styled.div`
    font-size: 14px;
    padding: 0px;
    background: rgba(23, 23, 23, 0.6);
    border-radius: 16px;
`;

const FaqSection = styled.div`
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

const FaqSectionH2 = styled.h2` 
    padding-top: 20px;
    padding-bottom: 4px;
    color: rgb(238, 238, 238);
    font-size: 26px;
`;

// const FaqSectionH3 = styled.h3`
//     padding-top: 16px;
//     color: rgb(238, 238, 238);
//     font-size: 24px;
// `;

const FaqSectionP = styled.p`
    font-size: 18px;
    color: rgb(200, 200, 200);
    line-height: 1.6;
`;

const FaqSectionLink = styled.a`
    color: inherit;
    &:hover {
        color: #66FF91;
      }
`;

const FaqSectionGatsbyLink = styled(Link)`
    color: inherit;
    &:hover {
        color: #66FF91;
      }
`;

const FAQ = () => {
    return (
            <Layout>
            <div className="container page-title">
                frequently asked questions
            </div>
            <FaqSectionWrapper>
                <FaqSectionContainer className="container">
                    <FaqSection>
                        <FaqSectionH2>who can see my photos and videos?</FaqSectionH2>
                        <FaqSectionP>all your files and their metadata are encrypted with a key derived from your password.
                            <br />only you know this password.
                            <br />so only you can decrypt and view your photos and videos.
                        </FaqSectionP>

                        <FaqSectionH2>how is my data encrypted?</FaqSectionH2>
                        <FaqSectionP>
                            <FaqSectionLink href="https://libsodium.gitbook.io/doc/" target="_blank" rel="noopener noreferrer">libsodium</FaqSectionLink> implementation of <code>XChaCha20</code> is used to encrypt your data, along with
                            <code> Poly1305</code> MAC for authentication.
                            <br/>our <FaqSectionGatsbyLink to="/architecture">architecture</FaqSectionGatsbyLink> and <FaqSectionLink href="https://github.com/ente-io/" target="_blank" rel="noopener noreferrer">code</FaqSectionLink> are open and have been
                            reviewed by engineers from Google,
                            Facebook, Amazon, Microsoft, Uber, ...
                        </FaqSectionP>

                        <FaqSectionH2>where is my data stored?</FaqSectionH2>
                        <FaqSectionP>your data is replicated to multiple providers in different locations in the EU, including a fall out
                            shelter underground.</FaqSectionP>

                        <FaqSectionH2>how does sharing of albums work?</FaqSectionH2>
                        <FaqSectionP>the information required to decrypt albums is encrypted with the recipient's public key such that
                            only they can view them.<br /> you can read more about our architecture&#160;
                            <FaqSectionGatsbyLink to="/architecture">here</FaqSectionGatsbyLink>.
                            <br />please note that only users on the paid plan are allowed to share albums. the receiver just
                            needs an ente account, and can be on the free plan.
                        </FaqSectionP>

                        <FaqSectionH2>can I import my photos from else where?</FaqSectionH2>
                        <FaqSectionP>yes!
                            <br/>our web app at&#160;<FaqSectionLink href=" https://web.ente.io/ " target="_blank " rel="noopener noreferrer ">web.ente.io</FaqSectionLink>
                            &#160;supports resumable uploads.
                            <br/>you can just drag and drop your photos and videos and we'll encrypt and back them up forever.
                        </FaqSectionP>

                        <FaqSectionH2>what happens when I cancel the subscription?</FaqSectionH2>
                        <FaqSectionP>30 days after your subscription expires, all of your uploaded data is cleared from our servers.</FaqSectionP>

                        <FaqSectionH2>what payment methods do you support?</FaqSectionH2>
                        <FaqSectionP>on web stripe helps us process payments from all major credit card providers.
                            <br />on mobile we (have to) use billing platforms provided by respective app stores.
                        </FaqSectionP>

                        <FaqSectionH2>is there a forever-free plan?</FaqSectionH2>
                        <FaqSectionP>sorry, since we're building a business that does not involve monetization of user data, we have to
                            charge to remain sustainable.
                            <br/>we do offer a generous free trial for you to experience the product.
                        </FaqSectionP>

                        <FaqSectionH2>why should we trust you for long-term data-storage?</FaqSectionH2>
                        <FaqSectionP style={{marginBottom: "6px"}}>
                            unlike large companies, we have a focused mission, to help you archive your personal memories into a
                            safe space.
                        </FaqSectionP>

                        <FaqSectionP style={{marginBottom: "6px"}}>this is the only thing we want to do, and thanks to our business model,
                            we can profitably do it.</FaqSectionP>

                        <FaqSectionP style={{marginBottom: "6px"}}>and we have spent a lot of engineering effort into ensuring that your
                            data is reliably replicated to multiple storage providers, including one that keeps your data in an
                            underground fallout shelter.</FaqSectionP>

                        <FaqSectionP style={{color: "white", fontSize: "18px", paddingTop: "4px", lineHeight: 1.4}}>in short, we have no
                            reasons to be distracted, and we are as reliable as any one can be.</FaqSectionP>
                        
                        <br/>
                        <hr/>
                        <br/>
                        <FaqSectionP style={{textAlign: "center"}}>if you have more questions, please write to us at&#160;
                            <FaqSectionLink href="mailto:friends@ente.io ">friends@ente.io</FaqSectionLink>.
                        </FaqSectionP>
                    </FaqSection>
                </FaqSectionContainer>
            </FaqSectionWrapper>
            </Layout>
    )
}

export default FAQ