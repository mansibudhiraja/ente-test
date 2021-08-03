import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/layout'

const FAQ = () => {
    return (
            <Layout>
            <div className="container page-title">
                frequently asked questions
            </div>
            <div className="faq-section-wrapper" style={{fontSize: "18px !important"}}>
                <div className="faq-section-container container">
                    <div className="faq-section">
                        <h2>who can see my photos and videos?</h2>
                        <p>all your files and their metadata are encrypted with a key derived from your password.
                            <br />only you know this password.
                            <br />so only you can decrypt and view your photos and videos.
                        </p>

                        <h2>how is my data encrypted?</h2>
                        <p>
                            <a href="https://libsodium.gitbook.io/doc/" target="_blank" rel="noopener noreferrer">libsodium</a> implementation of <code>XChaCha20</code> is used to encrypt your data, along with
                            <code> Poly1305</code> MAC for authentication.
                            <br/>our <Link to="/architecture">architecture</Link> and <a href="https://github.com/ente-io/" target="_blank" rel="noopener noreferrer">code</a> are open and have been
                            reviewed by engineers from Google,
                            Facebook, Amazon, Microsoft, Uber, ...
                        </p>

                        <h2>where is my data stored?</h2>
                        <p>your data is replicated to multiple providers in different locations in the EU, including a fall out
                            shelter underground.</p>

                        <h2>how does sharing of albums work?</h2>
                        <p>the information required to decrypt albums is encrypted with the recipient's public key such that
                            only they can view them.<br /> you can read more about our architecture&#160;
                            <Link to="/architecture">here</Link>.
                            <br />please note that only users on the paid plan are allowed to share albums. the receiver just
                            needs an ente account, and can be on the free plan.
                        </p>

                        <h2>can I import my photos from else where?</h2>
                        <p>yes!
                            <br/>our web app at&#160;<a href=" https://web.ente.io/ " target="_blank " rel="noopener noreferrer ">web.ente.io</a>
                            &#160;supports resumable uploads.
                            <br/>you can just drag and drop your photos and videos and we'll encrypt and back them up forever.
                        </p>

                        <h2>what happens when I cancel the subscription?</h2>
                        <p>30 days after your subscription expires, all of your uploaded data is cleared from our servers.</p>

                        <h2>what payment methods do you support?</h2>
                        <p>on web stripe helps us process payments from all major credit card providers.
                            <br />on mobile we (have to) use billing platforms provided by respective app stores.
                        </p>

                        <h2>is there a forever-free plan?</h2>
                        <p>sorry, since we're building a business that does not involve monetization of user data, we have to
                            charge to remain sustainable.
                            <br/>we do offer a generous free trial for you to experience the product.
                        </p>

                        <h2>why should we trust you for long-term data-storage?</h2>
                        <p style={{marginBottom: "6px"}}>
                            unlike large companies, we have a focused mission, to help you archive your personal memories into a
                            safe space.
                        </p>

                        <p style={{marginBottom: "6px"}}>this is the only thing we want to do, and thanks to our business model,
                            we can profitably do it.</p>

                        <p style={{marginBottom: "6px"}}>and we have spent a lot of engineering effort into ensuring that your
                            data is reliably replicated to multiple storage providers, including one that keeps your data in an
                            underground fallout shelter.</p>

                        <p style={{color: "white", fontSize: "18px", paddingTop: "4px", lineHeight: 1.4}}>in short, we have no
                            reasons to be distracted, and we are as reliable as any one can be.</p>
                        
                        <br/>
                        <hr/>
                        <br/>
                        <p style={{textAlign: "center"}}>if you have more questions, please write to us at&#160;
                            <a href="mailto:friends@ente.io ">friends@ente.io</a>.
                        </p>
                    </div>
                </div>
            </div>
            </Layout>
    )
}

export default FAQ