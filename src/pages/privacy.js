import React from 'react'
import Layout from '../components/layout/layout'
import {Link} from 'gatsby'
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

const LegalSectionH2 = styled.h2`
    padding-top: 20px;
    color: rgb(238, 238, 238);
    font-size: 26px;
`;

const LegalSectionH3 = styled.h3`
    padding-top: 16px;
    color: rgb(238, 238, 238);
    font-size: 24px;
`;

const LegalSectionLink = styled.a`
    color: white;
    &:hover {
        color: #66FF91;
      }
`;

const LegalSectionGatsbyLink = styled(Link)`
    color: white;
    &:hover {
        color: #66FF91;
      }
`;

const Privacy = () => {
    return (
        <Layout>
            <div className="container page-title">
                privacy and data policy
            </div>
            <LegalSectionWrapper>
                <LegalSectionContainer className="container">
                    <LegalSection>
                        <LegalSectionH2 id="introduction">Introduction</LegalSectionH2>
                        <ol>
                            <li>
                                <p>This Policy governs our processing of your &quot;personal data&quot; (as defined in the European Union’s General Data Protection Regulation EU2016/679 (“GDPR”)) and the way in which we deal with other data that is not personal
                                    information. The term “processing” is used as defined in the GDPR. It includes collection, storage, and all of the ways we use, and allow you to use, personal information, when we provide our services. You are the data controller
                                    under the GDPR of the personal information you provide to us as part of your Account Data (see below). Drizzle Technologies Private Limited (CIN U72900KA2020PTC133651) (&quot;ente&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;)
                                    of Flat 301, Purvi Pride Apartments, Varthur, Bangalore, Karnataka, India, 560087 is the data controller under the GDPR of all other personal information.</p>
                            </li>
                            <li>
                                <p>This Policy is divided into five sections to make it easier for you to see which provisions apply to different types of data. Words and phrases which are defined in our <LegalSectionGatsbyLink to='/terms'>Terms of Service</LegalSectionGatsbyLink> (“ToS”)
                                    have the same meanings when they are used in this Policy.</p>
                            </li>
                            <li>
                                <p>The sections of this Policy are:</p>
                            </li>
                        </ol>
                        <p>3.1 This Introduction section.</p>
                        <p>3.2 The “Your Files” section. This covers the actual encrypted files that you upload, access and share using our services.</p>
                        <p>3.3 The “Account Data” section. This covers the metadata that is collected and generated by our systems when you use our services, and the information that you provide to us when you register and communicate with us.</p>
                        <p>3.4 The “Website Usage Data” section. This covers the data that is collected and generated by our systems when anyone browses our website.</p>
                        <p>3.5 The “General Terms” section, which applies to all our services and all types of data.</p>
                        <ol start="4">
                            <li>The GDPR provides rights to European users, but, as a leading privacy company, we make the GDPR protections and rights available to all our users globally in respect of their personal data wherever you may live.</li>
                        </ol>
                        <LegalSectionH2 id="your-files">Your Files</LegalSectionH2>
                        <ol start="5">
                            <li>This is the section of this Policy that covers the actual encrypted files that you upload, access and share using our services (“Your Files”). The following specific terms apply:</li>
                        </ol>
                        <p>5.1 When you upload a file, it is already encrypted at your device, so we do not know whether it is personal to you or someone else, relates to a business or some other organisation, or what it contains. We also generate and store encrypted
                            previews of images, videos and certain other types of file. We gather a small amount of metadata about the type of file, but that does not disclose the content or information that the file contains. In relation to metadata, see the
                            section of this Policy specifically covering Account Data.</p>
                        <p>5.2 All Your Files remain encrypted at all times while they are on our system. They are never received, stored or otherwise dealt with by us in unencrypted form because any decryption takes place only on your device or that of another
                            user to whom you have provided the file/album/folder/collection keys or links that are created when you give them access.</p>
                        <p>5.3 We collect Your Files because that is necessary for us to provide our end-to-end encrypted cloud storage and collaboration services that you contract for when you agree to our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>.</p>
                        <p>5.4 Although Your Files are not personal information within our system because you have encrypted them, you should know that we store Your Files and make them available from servers in secure facilities in Europe or in countries that the
                            European Commission has determined to have an adequate level of protection under Article 45 of the GDPR, depending where you are based.</p>
                        <p>5.5 We keep Your Files while you are subscribed to our services but this is subject to our suspension and termination rights set out in our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>. You should download Your Files prior to termination of
                            services.
                        </p>
                        <p>5.6 If you forget your password you will lose access to all Your Files.</p>
                        <p>5.7 When you delete one of Your Files it will be made inaccessible, marked for deletion and removed when the next appropriate file purging process is run, subject to any retention specifically allowed under this Policy or our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>.
                            After account termination, all Your Files will be marked for deletion and removed when the next appropriate file purging process is run, subject to any retention specifically allowed under this Policy or our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>.</p>
                        <p>5.8 The deletion process specified in 5.7 will not apply to a de-duplicated file that is associated with another user (see our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>). </p>
                        <p>5.9 We may, but shall not be obliged to, keep Your Files after your account has been suspended or terminated. In particular, we may, but shall not be obliged to, keep Your Files where we consider it necessary for evidential purposes relating
                            to a breach of our <LegalSectionLink href="https://mega.nz/terms" target="_blank" rel="noreferrer noopener">ToS</LegalSectionLink> or with respect to current or anticipated action by any competent enforcement authority or other third party. With respect to release of Your Files to competent enforcement
                            authorities and third parties, see our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink>.</p>
                        <p>5.10 See also the General Terms section of this Policy which applies to all types of data, including Your Files.</p>
    
                        <LegalSectionH2 id="account-data">Account Data</LegalSectionH2>
                        <ol start="6">
                            <li>This is the section of this Policy that covers account information you give us, and metadata that we generate in relation to Your Files, and your account. The following specific terms apply:</li>
                        </ol>
                        <p>6.1 When you sign up for particular services on our website you will need to give us the details required in our registration form and will need to keep that information up to date.</p>
                        <p>6.2 When you use our services, our systems may retain the following metadata in unencrypted form:</p>
                        <ul>
                            <li>Your email address for acting as the primary key for your account.</li>
                            <li>Your name for notifying users when you invite/share files with them.</li>
                            <li>Creation timestamp of your account for monitoring user growth metrics.</li>
                            <li>Updation timestamp of your files to power our differential fetching APIs.</li>
                            <li>Deletion status of your files to remove deleted files from clients who might have already downloaded them.</li>
                            <li>Storage consumed by your encrypted files and thumbnails.</li>
                            <li>Owner, sharee relationships to control access permissions for files and folders/albums/collections.</li>
                            <li>Your public key.</li>
                            <li>Payment invoices provided to us by our third-party Payment Processor for verifying the validity of your subscription plan.</li>
                            <li>Details of referrers and people your have referred, together with the storage balance accrued, for the purposes of ente&#39;s referral programme.</li>
                            <li>Our communications with you.</li>
                            <li>Your personal account settings.</li>
                            <li>The email addresses you may choose to share an album with.</li>
                            <li>Takedowns and account suspensions.</li>
                        </ul>
                        <p>6.3 When you use our services, our systems may retain the following metadata in unencrypted form:</p>
                        <ul>
                            <li>IP address with each API call to determine the data center closest to you and to detect patterns within possible DDoS attacks.</li>
                            <li>User agent information with each API call to understand which of our versions of our apps are being used and on what devices.</li>
                        </ul>
                        <p>6.4 From time to time we may need to communicate with each other directly. We will use the email address you have verified in your account. You can communicate with us using the appropriate address on our <LegalSectionLink href="https://ente.io/contact" target="_blank" rel="noreferrer noopener">contacts page</LegalSectionLink>.
                            Examples of direct communications include invoices, copyright or other enforcement emails, notifications under our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink>, system update information, data breach notifications,
                            notification of major changes to our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink> or this Policy.</p>
                        <p>6.5 Access to your account and files is by way of nominated email address and password. It is your responsibility to keep these safe and secure as ente stores the email address but does not store the password. If you forget your password
                            you will lose access to all your data.</p>
                        <p>6.6 We will collect, store, use and otherwise process Account Data so that we can provide the services you have contracted to obtain from us under our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>. We also have a legitimate interest in processing
                            Account Data so that we can maintain and improve our systems and services and communicate with you as referenced in this Policy.</p>
                        <p>6.7 We retain Account Data as long as your account is active. After account suspension or termination we may, but shall not be obliged to, retain all Account Data if enforcement action is likely or commenced under our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>
                            &#160;or <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink> or for 1 month, whichever is longer. Where there is no enforcement action likely or commenced and the 1 month period has expired, Account Data that identifies you will
                            be anonymised, but where you are a contact of, have had a data shared with you by another ente user, those details will continue to be retained to allow services to continue for those other users. See also the General Terms of this
                            Policy with regard to retention.</p>
                        <p>6.8 You can request to download your Account Data by reaching out to you <LegalSectionLink href="mailto:privacy@ente.io">privacy@ente.io</LegalSectionLink> from your registered email address. You can also request correction of Account Data if it is considered incorrect,
                            in accordance with the GDPR. The information will be provided or updated promptly, and at least within one month, without charge unless the request is manifestly unfounded or excessive. Corrections will be promptly considered and actioned
                            if appropriate.</p>
                        <p>6.9 If we have disclosed the Account Data to any third party (such as a compliance authority), we will inform them of any correction where possible and will also inform the individuals about the third parties to whom the data has been
                            disclosed where lawful and appropriate.</p>
                        <p>6.10 See also the General Terms section of this Policy which applies to all types of data, including Account Data.</p>
                        <LegalSectionH2 id="website-usage-data">Website Usage Data</LegalSectionH2>
                        <p>7. This is the section of this Policy that covers activity on our website (“Website Usage Data”). The following specific terms apply:</p>
                        <p>7.1 We use a privacy focussed third-party analytics service to monitor the metrics of our website. You can read their privacy policy here: <LegalSectionLink href="https://simpleanalytics.com/privacy" target="_blank" rel="noreferrer noopener">https://simpleanalytics.com/privacy</LegalSectionLink></p>
                        <p>7.2 See also the General Terms section of this Policy which applies to all types of data, including Website Usage Data.</p>
                        <LegalSectionH2 id="general-terms">General Terms</LegalSectionH2>
                        <ol start="8">
                            <li>This is the section of this Policy that covers all types of data.</li>
                        </ol>
                        <LegalSectionH3 id="basis-of-processing-and-dealing-with-data">Basis of processing and dealing with data</LegalSectionH3>
                        <ol start="9">
                            <li>As noted above, we process your personal information because we have contracted with you to do so under our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>, this Policy, and our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink>.
                                We cannot provide our services without that data. Other data that is not personal information is also dealt with by us in accordance with our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>, this Policy, and our x.</li>
                        </ol>
                        <LegalSectionH3 id="giving-access-to-other-users">Giving access to other users</LegalSectionH3>
                        <ol start="10">
                            <li>You must ensure that anyone who has access to any of Your Files or your Account Data complies with our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>, this Policy, and our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink>. You
                                are responsible for their compliance.</li>
                        </ol>
                        <LegalSectionH3 id="your-own-security-practices-are-critical">Your own security practices are critical</LegalSectionH3>
                        <ol start="11">
                            <li>We strongly urge you to use best practices for ensuring the safety of your systems and devices (e.g. via unique passwords, security upgrades, firewall protection, anti-virus software, securing devices). ente will never send an email
                                asking for your password, so do not be fooled by any such email since it will not be from us. We cannot guarantee the security of computers or devices nor of transmission from and to your device over the Internet and thus cannot
                                guarantee there will be no unauthorised access. Also, if you lose or otherwise allow access to your password or encryption keys, you will lose the security of all your data. If you forget your password you will lose access to all
                                your data. Using the same password for ente as you have used at other sites can lead to others accessing and taking control of your ente account if one of those other sites is breached or hacked.</li>
                        </ol>
                        <LegalSectionH3 id="disclosure-for-civil-or-criminal-enforcement">Disclosure for civil or criminal enforcement</LegalSectionH3>
                        <ol start="12">
                            <li>If we think it is necessary or we have to by law in any jurisdiction, then we are entitled to give Your Files, any Account Data and any Website Usage Data to competent authorities. We reserve the right to assist any law enforcement
                                agency with investigations, including disclosure of information to them or their agents. We also reserve the right to comply with any legal processes, including but not limited to subpoenas, search warrants and court orders initiated
                                by enforcement authorities or other third parties. We may disclose Your Files, any Account Data and any Website Usage Data to enforce or apply our ToS or any other agreement we have with you, or to protect the rights, property,
                                or safety of us or our other users, third parties or the operation of our services. For more detail on disclosure to competent enforcement authorities and other third parties, see our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink>.</li>
                        </ol>
                        <LegalSectionH3 id="third-party-services">Third-party services</LegalSectionH3>
                        <ol start="13">
                            <li>We use the following third-party services to deliver specific services to you.</li>
                        </ol>
                        <p>13.1. <strong>Payment Processors</strong></p>
                        <p>We use third-party services to process your payments. We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed
                            by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council that help ensure the secure handling of payment information.</p>
                        <p>The Privacy Policies of the payment processors we work with can be accessed below:</p>
                        <ul>
                            <li>Apple: <LegalSectionLink href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer noopener">https://www.apple.com/legal/privacy</LegalSectionLink></li>
                            <li>Google: <LegalSectionLink href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">https://policies.google.com/privacy</LegalSectionLink></li>
                            <li>Stripe: <LegalSectionLink href="https://stripe.com/privacy" target="_blank" rel="noreferrer noopener">https://stripe.com/privacy</LegalSectionLink></li>
                        </ul>
                        <p>13.2. <strong>Support Chat</strong></p>
                        <p>We use Crisp to power our support chat interface. You can find their privacy policy here: <LegalSectionLink href="https://crisp.chat/privacy" target="_blank" rel="noreferrer noopener">https://crisp.chat/privacy</LegalSectionLink>.</p>
                        <p>13.3. <strong>Feedback Collection</strong></p>
                        <p>We use FeatureMonkey to collect feedback from users and to decide what features we should be working on. You can find their privacy policy here: <LegalSectionLink href="https://www.featuremonkey.com/privacy/" target="_blank" rel="noreferrer noopener">https://www.featuremonkey.com/privacy</LegalSectionLink>.</p>
                        <p>13.4. <strong>Website Analytics</strong></p>
                        <p>We use a privacy focused third-party analytics service to monitor the metrics of our website. You can read their privacy policy here: <LegalSectionLink href="https://simpleanalytics.com/privacy" target="_blank" rel="noreferrer noopener">https://simpleanalytics.com/privacy</LegalSectionLink></p>
                        <p>13.5. <strong>Backend Analytics</strong></p>
                        <p>We use Amplitude for analyzing API access patterns. The data that is pushed to them is obfuscated and does not include a user's personal information (like name or email). You can read their privacy policy here: <LegalSectionLink href="https://amplitude.com/privacy" target="_blank" rel="noreferrer noopener">https://amplitude.com/privacy</LegalSectionLink>.
                        </p>
                        <p>13.6. <strong>Transactional Emails</strong></p>
                        <p>We use Zoho for sending out emails like login tokens, billing reminders, notification when an album is shared with you, etc. You can read their privacy policy here: <LegalSectionLink href="https://zoho.com/privacy" target="_blank" rel="noreferrer noopener">https://zoho.com/privacy</LegalSectionLink>.
                        </p>
                        <LegalSectionH3 id="no-ads">No Ads</LegalSectionH3>
                        <ol start="14">
                            <li>We will never serve you ads. Neither will we use your data for ad targeting or other commercial purposes.</li>
                        </ol>
                        <LegalSectionH3 id="no-commercial-sale-of-data">No commercial sale of data</LegalSectionH3>
                        <ol start="15">
                            <li>We will never sell Your Files, any Account Data or any Website Usage Data. We will not disclose or otherwise provide Your Files, any Account Data or any Website Usage Data to a third party, or make any other use of Your Files, any
                                Account Data or any Website Usage Data, for any purpose which is not specifically allowed under this Policy, our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink> or our <LegalSectionGatsbyLink to="/takedown">Takedown Guidance Policy</LegalSectionGatsbyLink> or
                                is not incidental to the normal use of our services.</li>
                        </ol>
                        <LegalSectionH3 id="data-security">Data security</LegalSectionH3>
                        <ol start="16">
                            <li>Data security is very important to ente, whether that is your personal information or any other data. That is why we publish our client-side browser and mobile app software and why we have provided information in this Policy on collection
                                and storage of all data whether or not it is personal information. For more information on our security practices, see our <LegalSectionGatsbyLink href="/blog">blog</LegalSectionGatsbyLink>.</li>
                        </ol>
                        <LegalSectionH3 id="communications">Communications</LegalSectionH3>
                        <ol start="17">
                            <li>
                                <p>We may send invoices, security or service updates and various other notices by email to the email address listed in your account or using any of our messaging systems. They will be deemed to be received in accordance with our&#160;
                                <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink>.</p>
                            </li>
                            <li>
                                <p>If appropriate, some of those notices will contain unsubscribe information so you can opt out of further receipt. We will abide by any email unsubscription request (other than those we need to send for invoicing, security or service
                                    updates and other service provider purposes).</p>
                            </li>
                            <li>
                                <p>In some cases a person may receive an email from us asking the person to confirm their new ente account email address, but in fact they haven&#39;t tried to open an account - someone else has started the process and used their
                                    email address either maliciously or by mistake. In these cases, ente has an ephemeral/incomplete account that might be used to upload files. On request, and after proving ownership of the email address, we will arrange for
                                    the account to be deleted.</p>
                            </li>
                        </ol>
                        <LegalSectionH3 id="children-s-privacy">Children&#39;s Privacy</LegalSectionH3>
                        <ol start="20">
                            <li>Our service does not address anyone under the age of 18 (&quot;Children&quot;). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or a guardian and you are aware that
                                your Child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we will take steps to remove that information from
                                our servers.</li>
                        </ol>
                        <LegalSectionH3 id="law">Law</LegalSectionH3>
                        <ol start="21">
                            <li>Subject to the rights that those in the European Union have under the GDPR, this Policy and its interpretation and operation are governed solely by Indian law. Subject to the rights that those in the European Union have under the GDPR,
                                you, us and all users, submit to the exclusive jurisdiction of the Indian arbitral tribunals and courts as further described in our <LegalSectionGatsbyLink to='/terms'>ToS</LegalSectionGatsbyLink> and you agree not to raise any jurisdictional issue if
                                we need to enforce an arbitral award or judgment in India or another country.</li>
                        </ol>
                        <LegalSectionH3 id="contact-and-complaints">Contact and complaints</LegalSectionH3>
                        <ol start="22">
                            <li>
                                <p>Questions and comments regarding this Policy are welcomed and should be addressed to the Privacy Officer at privacy@ente.io. For a comprehensive list of contact details for Drizzle Technologies Private Limited, and each of our
                                    related or affiliated entities and payment processors, together with details of how to contact our privacy officer and data protection officer, see our <LegalSectionLink href="https://ente.io/contact" target="_blank" rel="noreferrer noopener">contacts</LegalSectionLink> page.</p>
                            </li>
                            <li>
                                <p>If you are in Europe or otherwise have the right to lodge a complaint with a supervisory authority, you can find contact details for our European Representative and European supervisory authority on our <LegalSectionLink href="https://ente.io/contact" target="_blank" rel="noreferrer noopener">contacts</LegalSectionLink>                            page.</p>
                            </li>
                        </ol>
                        <LegalSectionH3 id="changes-to-our-policy">Changes to our Policy</LegalSectionH3>
                        <ol start="24">
                            <li>We may make changes to this Policy in the future. Any changes will be notified to all users.</li>
                        </ol>
                        <br/>
                        <hr/>
                        <br/>
                        <p style={{textAlign: "center"}}>Last updated 24 November 2020, effective 24 November 2020.</p>
                        <p style={{textAlign: "center"}}>If you have a concern about any of these terms, please write to us at &#160;
                            <LegalSectionLink href="mailto:friends@ente.io">friends@ente.io</LegalSectionLink>.</p>
                    </LegalSection>
                </LegalSectionContainer>
            </LegalSectionWrapper>
        </Layout>
    )
    }
    
    export default Privacy