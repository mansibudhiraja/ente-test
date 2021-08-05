import React from "react"
import Layout from "../components/layout/layout"
import styled from 'styled-components'

const ArchitectureSectionWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  font-size: "18px !important";
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const ArchitectureSectionContainer = styled.div`
  font-size: 14px;
  padding: 24px;
  background: rgba(23, 23, 23, 0.6);
  border-radius: 16px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding: 40px;
    background: rgba(23, 23, 23, 0.6);
    border-radius: 16px;
  }
`;

const ArchitectureSection = styled.div`
  letter-spacing: 0.07;
  color: rgb(220, 220, 220);
  font-size: 18px;
  line-height: 1.4;
  @media only screen and (min-width: 768px) {
    padding-top: 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    letter-spacing: 0.07;
    color: rgb(220, 220, 220);
    font-size: 18px;
    line-height: 1.4;
  }
`;

const ArchitectureSectionLink = styled.a`
  color: rgb(240, 240, 240);
  &:hover {
    color: #66FF91;
  }
  @media only screen and (min-width: 768px) {}
`;


const ArchitectureSectionCode = styled.code`
  background-color: #2f2f2f;
  color: rgb(225, 225, 225);
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  @media only screen and (min-width: 768px) {}
`;

const ArchitectureSectionH1 = styled.h1`
  padding-top: 20px;
  padding-bottom: 8px;
  font-size: 28px;
  @media only screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 0px;
    font-size: 32px;
  }
`;

const ArchitectureSectionH2= styled.h2`
  padding-top: 8px;
  padding-bottom: 6px;
  font-size: 24px;
  @media only screen and (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 0px;
    font-size: 28px;
  }
`;

const ArchitectureSectionH3= styled.h3`
  padding-top: 4px;
  font-size: 20px;
  font-weight: 900;
  @media only screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 2px;
    font-size: 20px;
    font-weight: 900;
  }
`;

const ArchitectureSectionPara= styled.p`
  margin-bottom: 12px;
  @media only screen and (min-width: 768px) {}
`;

const ArchitectureSectionList= styled.li`
  margin-bottom: 6px;
  @media only screen and (min-width: 768px) {}
`;



const Architecture = () => {
  return (
    <div>
      <Layout>
      <div className="container page-title">architecture</div>
      <ArchitectureSectionWrapper>
        <ArchitectureSectionContainer className="container">
          <ArchitectureSection>
            <ArchitectureSectionPara style={{ paddingTop: "12px" }}>
              Your data is end-to-end encrypted with ente. Meaning, they are
              encrypted with your <ArchitectureSectionCode>keys</ArchitectureSectionCode>
              before they leave your device.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              These <ArchitectureSectionCode>keys</ArchitectureSectionCode> are available only to you. Meaning only
              you can access your data else where.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>What follows is an explanation of how we do what we do.</ArchitectureSectionPara>
            <ArchitectureSectionH1 id="key-encryption">Key Encryption</ArchitectureSectionH1>
            <ArchitectureSectionH2>Fundamentals</ArchitectureSectionH2>
            <ArchitectureSectionH3>Master Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you sign up for ente, your client generates a{" "}
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> for you. This never leaves your device
              unencrypted.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3>Key Encryption Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Once you choose a password, a <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode> is
              derived from it. This never leaves your device.
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Flows</ArchitectureSectionH2>
            <ArchitectureSectionH3>Primary Device</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              During registration, your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> is encrypted with
              your
              <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode>, and the resultant{" "}
              <ArchitectureSectionCode>encryptedMasterKey</ArchitectureSectionCode> is then sent to our servers for
              storage.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="key-encryption-flows-secondary-device">Secondary Device</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you sign in on a secondary device, after you successfully
              verify your email, our servers give you back your{" "}
              <ArchitectureSectionCode>encryptedMasterKey</ArchitectureSectionCode> that was sent to us by your
              primary device.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              You are then prompted to enter your password. Once entered, your{" "}
              <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode> is derived, and the client decrypts
              your <ArchitectureSectionCode>encryptedMasterKey</ArchitectureSectionCode> with this, to yield your
              original <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              If the decryption fails, the client will know that the derived{" "}
              <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode> was wrong, indicating an incorrect
              password, and will surface this information to you.
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Privacy</ArchitectureSectionH2>
            <ul>
              <ArchitectureSectionList>
                Since only you know your password, only you can derive your{" "}
                <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only you can derive your <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode>,
                only you have access to your
                <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
            </ul>
            <br />
            <ArchitectureSectionPara style={{ color: "grey" }}>
              <em>
                Keep reading to learn about how this <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> is
                used to encrypt your data.
              </em>
            </ArchitectureSectionPara>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="file-encryption">File Encryption</ArchitectureSectionH1>
            <ArchitectureSectionH2>Fundamentals</ArchitectureSectionH2>
            <ArchitectureSectionH3 id="collection-key">Collection Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Each of your files in ente belong to what we call a{" "}
              <ArchitectureSectionCode>collection</ArchitectureSectionCode>. A<ArchitectureSectionCode>collection</ArchitectureSectionCode> can be either a
              folder (like &quot;Camera&quot; or &quot;Screenshots&quot;) or an
              album (like &quot;Awkward Team Lunch&quot;).
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              Each <ArchitectureSectionCode>collection</ArchitectureSectionCode> has a <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>.
              These never leave your device unencrypted.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="file-key">File Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Each of your files have a <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>. These never leave
              your device unencrypted.
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Flows</ArchitectureSectionH2>
            <ArchitectureSectionH3>Upload</ArchitectureSectionH3>
            <ul>
              <ArchitectureSectionList>
                Each file and associated metadata is encrypted with randomly
                generated
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Each <ArchitectureSectionCode>fileKey</ArchitectureSectionCode> is encrypted with the{" "}
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> of the
                <ArchitectureSectionCode>collection</ArchitectureSectionCode> (folder/album) the <ArchitectureSectionCode>file</ArchitectureSectionCode>{" "}
                belongs to. In case such a<ArchitectureSectionCode>collection</ArchitectureSectionCode> does not
                exist, one is created with a randomly generated
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>. All <ArchitectureSectionCode>collection</ArchitectureSectionCode> metadata
                (like name, folder-path, etc) are encrypted with this{" "}
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Each <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> is then encrypted with your{" "}
                <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                All of the above mentioned encrypted data is then pushed to the
                server for storage.
              </ArchitectureSectionList>
            </ul>
            <ArchitectureSectionH3>Download</ArchitectureSectionH3>
            <ul>
              <ArchitectureSectionList>
                All of the above mentioned encrypted data is pulled from the
                server.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                You first decrypt each file’s <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> with
                your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                You then decrypt each file’s <ArchitectureSectionCode>fileKey</ArchitectureSectionCode> with their
                respective
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Finally, you decrypt each file and associated metadata with the
                respective
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
            </ul>
            <ArchitectureSectionH2>Privacy</ArchitectureSectionH2>
            <ul>
              <ArchitectureSectionList>
                As explained in the previous section, only you have access to
                your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only you have access to your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, only
                you can decrypt the
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only you have access to the <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>s,
                only you can decrypt the
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only you have access to the <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s, only
                you can decrypt the files and their associated metadata.
              </ArchitectureSectionList>
            </ul>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="sharing">Sharing</ArchitectureSectionH1>
            <ArchitectureSectionH2>Fundamentals</ArchitectureSectionH2>
            <ArchitectureSectionH3 id="public-key">Public Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you sign up for ente, your app generates a{" "}
              <ArchitectureSectionCode>publicKey</ArchitectureSectionCode> for you. This is public, and is stored at
              our servers in plain text.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="private-key">Private Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Along with the <ArchitectureSectionCode>publicKey</ArchitectureSectionCode>, your app also generates a
              corresponding
              <ArchitectureSectionCode>privateKey</ArchitectureSectionCode> for you. This never leaves your device
              unencrypted.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              The <ArchitectureSectionCode>privateKey</ArchitectureSectionCode> is encrypted with your{" "}
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> that only you have access to. This{" "}
              <ArchitectureSectionCode>encryptedPrivateKey</ArchitectureSectionCode> is stored at our servers
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Flow</ArchitectureSectionH2>
            <ArchitectureSectionPara>
              Sharing is similar to the previous section, except that the{" "}
              <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> of a<ArchitectureSectionCode>collection</ArchitectureSectionCode> is shared
              with a receiver after encrypting it with the receiver&#39;s
              <ArchitectureSectionCode>publicKey</ArchitectureSectionCode>. To elaborate,
            </ArchitectureSectionPara>
            <ArchitectureSectionH3>Sender</ArchitectureSectionH3>
            <ul>
              <ArchitectureSectionList>
                Each file and associated metadata was already encrypted with
                randomly generated
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Each of these <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s were also encrypted with the{" "}
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>
                of the <ArchitectureSectionCode>collection</ArchitectureSectionCode> (folder/album) that is now being
                shared.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                The <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> is now encrypted with the{" "}
                <ArchitectureSectionCode>publicKey</ArchitectureSectionCode> of the receiver.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                All of the above mentioned encrypted data is then pushed to the
                server for storage.
              </ArchitectureSectionList>
            </ul>
            <ArchitectureSectionH3>Receiver</ArchitectureSectionH3>
            <ul>
              <ArchitectureSectionList>
                All of the above mentioned encrypted data is pulled from the
                server.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                The receiver first decrypts the <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> with
                their
                <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                They then decrypt each file’s <ArchitectureSectionCode>fileKey</ArchitectureSectionCode> with their
                respective
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Finally, they decrypt each file and associated metadata with the
                respective
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              </ArchitectureSectionList>
            </ul>
            <ArchitectureSectionH2>Privacy</ArchitectureSectionH2>
            <ul>
              <ArchitectureSectionList>
                Since only the receiver has access to their{" "}
                <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, only they can decrypt their
                <ArchitectureSectionCode>encryptedPrivateKey</ArchitectureSectionCode> to access their{" "}
                <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only the receiver has access to their{" "}
                <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>, only they can decrypt the
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> that was sent to them.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only the receiver has access to the{" "}
                <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>, only they can decrypt the
                <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s of files belonging to that album/folder.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only the receiver has access to the <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s
                of files belonging to that album/folder, only they can decrypt
                the files and associated metadata.
              </ArchitectureSectionList>
            </ul>
            <div style={{ padding: "20px", backgroundColor: "#242424" }}>
              Currently you have to trust our servers to give you the correct
              <ArchitectureSectionCode>publicKey</ArchitectureSectionCode>. It&#39;s technically possible for the
              receiver to share this information with you on a separate channel.
              This feature (to export and import public keys) is currently not
              available, and will be added if necessary. If you care about this,
              please upvote this feature within the &quot;roadmap&quot; section
              of the app, or email{" "}
              <ArchitectureSectionLink href="mailto:roadmap@ente.io">roadmap@ente.io</ArchitectureSectionLink>. It will be
              prioritized.
            </div>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="key-recovery">Key Recovery</ArchitectureSectionH1>
            <ArchitectureSectionH2>Fundamentals</ArchitectureSectionH2>
            <ArchitectureSectionH3 id="recovery-key">Recovery Key</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you sign up for <strong>ente</strong>, your app generates a{" "}
              <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode> for you. This never leaves your device
              unencrypted.
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Flow</ArchitectureSectionH2>
            <ArchitectureSectionH3 id="storage">Storage</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Your <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode> and <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> are
              encrypted with each other and stored on the server.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="access">Access</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              This encrypted <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode> is downloaded when you
              sign in on a new device. This is decrypted with your{" "}
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> and surfaced to you whenever you request
              for it.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="recovery">Recovery</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              Post email verification, if you’re unable to unlock your account
              because you have forgotten your password, the client will prompt
              you to enter your <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              The client then pulls the <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> that was earlier
              encrypted and pushed to the server (as discussed in{" "}
              <ArchitectureSectionLink href="#key-encryption">Key Encryption</ArchitectureSectionLink>), and decrypts it
              with the entered <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>. If the decryption
              succeeds, the client will know that you have entered the correct{" "}
              <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              Now that you have your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, the client will
              prompt you to set a new password, using which it will derive a new{" "}
              <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode>. This is then used to encrypt your
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> and this new{" "}
              <ArchitectureSectionCode>encryptedMasterKey</ArchitectureSectionCode> is uploaded to our servers,
              similar to what was earlier discussed in{" "}
              <ArchitectureSectionLink href="#key-encryption">Key Encryption</ArchitectureSectionLink>.
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Privacy</ArchitectureSectionH2>
            <ul>
              <ArchitectureSectionList>
                Since only you have access to your <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, only
                you can access your
                <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Since only you can access your <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>, only
                you can reset your password.
              </ArchitectureSectionList>
            </ul>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="authentication">Authentication</ArchitectureSectionH1>
            <ArchitectureSectionH2>Fundamentals</ArchitectureSectionH2>
            <ArchitectureSectionH3>One Time Token</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you attempt to verify ownership of an email address, our
              server generates a<ArchitectureSectionCode>oneTimeToken</ArchitectureSectionCode>, that if presented
              confirms your access to the said email address. This token is
              valid for a short time and can only be used once.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3>Authentication Token</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              When you successfully authenticate yourself against our server by
              proving ownership of your email (and in future any other
              configured vectors), the server generates an
              <ArchitectureSectionCode>authToken</ArchitectureSectionCode>, that can from there on be used to
              authenticate against our private APIs.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3>Encrypted Authentication Token</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              A generated <ArchitectureSectionCode>authToken</ArchitectureSectionCode> is returned to your client
              after being encrypted with your
              <ArchitectureSectionCode>publicKey</ArchitectureSectionCode>. This <ArchitectureSectionCode>encryptedAuthToken</ArchitectureSectionCode> can
              only be decrypted with the your
              <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>
            </ArchitectureSectionPara>
            <ArchitectureSectionH2>Flow</ArchitectureSectionH2>
            <ul>
              <ArchitectureSectionList>
                You are asked for an email address, to which a{" "}
                <ArchitectureSectionCode>oneTimeToken</ArchitectureSectionCode> is sent.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Once you present this information correctly to our server, an{" "}
                <ArchitectureSectionCode>authToken</ArchitectureSectionCode> is generated and an{" "}
                <ArchitectureSectionCode>encryptedAuthToken</ArchitectureSectionCode> is returned to you, along with
                your other encrypted keys.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                You are then prompted to enter your password, using which your{" "}
                <ArchitectureSectionCode>masterKey</ArchitectureSectionCode> is derived (as discussed{" "}
                <ArchitectureSectionLink href="#key-encryption-flows-secondary-device">here</ArchitectureSectionLink>).
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Using this <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, the rest of your keys,
                including your <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>
                is decrypted (as discussed <ArchitectureSectionCode href="#private-key">here</ArchitectureSectionCode>).
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Using your <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>, the client will then decrypt
                the
                <ArchitectureSectionCode>encryptedAuthToken</ArchitectureSectionCode> that was encrypted by our server
                with your
                <ArchitectureSectionCode>publicKey</ArchitectureSectionCode>.
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                This decrypted <ArchitectureSectionCode>authToken</ArchitectureSectionCode> can then from there on be
                used to authenticate all API calls against our servers.
              </ArchitectureSectionList>
            </ul>
            <ArchitectureSectionH2>Security</ArchitectureSectionH2>
            <ArchitectureSectionPara>
              Only by verifying access to your email and knowing your password
              can you obtain an
              <ArchitectureSectionCode>authToken</ArchitectureSectionCode> that can be used to authenticate yourself
              against our servers.
            </ArchitectureSectionPara>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="implementation-details">Implementation Details</ArchitectureSectionH1>
            <ArchitectureSectionPara>
              We rely on the high level APIs exposed by this wonderful library
              called{" "}
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                libsodium
              </ArchitectureSectionLink>
              .{" "}
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="key-generation">Key Generation</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_secretbox_keygen</ArchitectureSectionCode>
              </ArchitectureSectionLink>
              is used to generate all random keys within the application. Your
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>, <ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>,{" "}
              <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>, <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>
              are all 256-bit keys generated using this API.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="key-pair-generation">Key Pair Generation</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/authenticated_encryption#key-pair-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_box_keypair</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              is used to generate your
              <ArchitectureSectionCode>publicKey</ArchitectureSectionCode> and
              <ArchitectureSectionCode>privateKey</ArchitectureSectionCode> pairs.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="key-derivation">Key Derivation</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/password_hashing/default_phf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_pwhash</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              is used to derive your
              <ArchitectureSectionCode>keyEncryptionKey</ArchitectureSectionCode> from your password.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              <ArchitectureSectionCode>crypto_pwhash_OPSLIMIT_SENSITIVE</ArchitectureSectionCode> and{" "}
              <ArchitectureSectionCode>crypto_pwhash_MEMLIMIT_SENSITIVE</ArchitectureSectionCode> are used as the
              limits for computation and memory respectively. If the operation
              fails due to insufficient memory, the former is doubled and the
              latter is halved progressively, until a key can be derived. If
              during this process the memory limit is reduced to a value less
              than
              <ArchitectureSectionCode>crypto_pwhash_MEMLIMIT_MIN</ArchitectureSectionCode>, the client will not let
              you register from that device.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              Internally, this uses{" "}
              <ArchitectureSectionLink
                href="https://github.com/P-H-C/phc-winner-argon2/raw/master/argon2-specs.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Argon2 v1.3
              </ArchitectureSectionLink>
              , which is regarded as{" "}
              <ArchitectureSectionLink
                href="https://en.wikipedia.org/wiki/Argon2"
                target="_blank"
                rel="noopener noreferrer"
              >
                one of the best hashing algorithms
              </ArchitectureSectionLink>
              currently available.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="symmetric-encryption">Symmetric Encryption</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_secretbox_easy</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              is used to encrypt your
              <ArchitectureSectionCode>masterKey</ArchitectureSectionCode>,<ArchitectureSectionCode>recoveryKey</ArchitectureSectionCode>,{" "}
              <ArchitectureSectionCode>privateKey</ArchitectureSectionCode>, <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode> s and
              <ArchitectureSectionCode>fileKey</ArchitectureSectionCode>s.
              <br style={{ marginBottom: "0px" }} />
              Internally, this uses{" "}
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xsalsa20"
                target="_blank"
                rel="noopener noreferrer"
              >
                XSalsa20
              </ArchitectureSectionLink>{" "}
              stream cipher with{" "}
              <ArchitectureSectionLink
                href="https://datatracker.ietf.org/doc/html/rfc8439#section-2.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poly1305 MAC
              </ArchitectureSectionLink>{" "}
              for authentication.
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretstream"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_secretstream_*</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              APIs are used to encrypt your file data in chunks.
              <br style={{ marginBottom: "0px" }} />
              Internally, this uses{" "}
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xchacha20"
                target="_blank"
                rel="noopener noreferrer"
              >
                XChaCha20
              </ArchitectureSectionLink>{" "}
              stream cipher with{" "}
              <ArchitectureSectionLink
                href="https://datatracker.ietf.org/doc/html/rfc8439#section-2.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poly1305 MAC
              </ArchitectureSectionLink>{" "}
              for authentication.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="asymmetric-encryption">Asymmetric Encryption</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>crypto_box_seal</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              is used to encrypt <ArchitectureSectionCode>collectionKey</ArchitectureSectionCode>
              along with the receiver&#39;s <ArchitectureSectionCode>publicKey</ArchitectureSectionCode> for a
              folder/album that is to be shared with them.
            </ArchitectureSectionPara>
            <ArchitectureSectionH3 id="salt-nonce-generation">Salt &amp; Nonce Generation</ArchitectureSectionH3>
            <ArchitectureSectionPara>
              <ArchitectureSectionLink
                href="https://libsodium.gitbook.io/doc/generating_random_data"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArchitectureSectionCode>randombytes_buf</ArchitectureSectionCode>
              </ArchitectureSectionLink>{" "}
              is used to generate a new salt/nonce every time data needs to be
              hashed/encrypted.
            </ArchitectureSectionPara>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="further-details">Further Details</ArchitectureSectionH1>
            <ArchitectureSectionPara>
              Thank you for reading so far! For deeper implementation details,
              we request you to kindly checkout{" "}
              <ArchitectureSectionLink
                href="https://github.com/ente-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                our ArchitectureSectionCode
              </ArchitectureSectionLink>
              .
            </ArchitectureSectionPara>
            <ArchitectureSectionPara>
              If you have any questions or concerns, or if you&#39;d like to add
              yourself to the list of reviewers below, please drop an email to{" "}
              <ArchitectureSectionLink href="mailto:engineering@ente.io">engineering@ente.io</ArchitectureSectionLink>.
            </ArchitectureSectionPara>
            <hr style={{ marginTop: "48px" }} />
            <ArchitectureSectionH1 id="reviewers">Reviewers</ArchitectureSectionH1>
            <ul>
              <ArchitectureSectionList>
                Atul Aggarwal [
                <ArchitectureSectionLink
                  href="https://www.linkedin.com/in/atulaggarwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ArchitectureSectionLink>
                ]
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Chaitanya Gupta [
                <ArchitectureSectionLink href="https://lisper.in/" target="_blank" rel="noopener noreferrer">
                  Website
                </ArchitectureSectionLink>{" "}
                |{" "}
                <ArchitectureSectionLink
                  href="https://www.linkedin.com/in/chaitanyagupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ArchitectureSectionLink>{" "}
                |{" "}
                <ArchitectureSectionLink
                  href="https://twitter.com/chaitanya_gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </ArchitectureSectionLink>
                ]
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Chandra Sekar S [
                <ArchitectureSectionLink href="https://cskr.dev" target="_blank" rel="noopener noreferrer">
                  Website
                </ArchitectureSectionLink>{" "}
                |{" "}
                <ArchitectureSectionLink
                  href="https://www.linkedin.com/in/cskrdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ArchitectureSectionLink>{" "}
                |{" "}
                <ArchitectureSectionLink
                  href="https://twitter.com/cskrdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </ArchitectureSectionLink>
                ]
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Isneesh Marwah [
                <ArchitectureSectionLink
                  href="https://www.linkedin.com/in/isneesh-marwah-89529b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ArchitectureSectionLink>{" "}
                |{" "}
                <ArchitectureSectionLink
                  href="https://twitter.com/isneesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </ArchitectureSectionLink>
                ]
              </ArchitectureSectionList>
              <ArchitectureSectionList>
                Neeraj Gupta [
                <ArchitectureSectionLink
                  href="https://www.linkedin.com/in/ua741/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </ArchitectureSectionLink>{" "}
                | <ArchitectureSectionLink href="https://twitter.com/ua741" 
                target="_blank"
                rel="noopener noreferrer">
                  Twitter</ArchitectureSectionLink>]
              </ArchitectureSectionList>
            </ul>
          </ArchitectureSection>
        </ArchitectureSectionContainer>
      </ArchitectureSectionWrapper>
      </Layout>
    </div>
  )
}

export default Architecture

