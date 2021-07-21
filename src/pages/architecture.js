import React from "react"
import Nav from '../components/Nav'
import "../css/architecture.css"
import Layout from "../components/layout/layout"

const Architecture = () => {
  return (
    <div>
      <Layout>
        <Nav />
      <div className="container page-title">architecture</div>
      <div
        className="architecture-section-wrapper"
        style={{ fontSize: "18px !important" }}
      >
        <div className="architecture-section-container container">
          <div className="architecture-section">
            <p style={{ paddingTop: "12px" }}>
              Your data is end-to-end encrypted with ente. Meaning, they are
              encrypted with your <code>keys</code>
              before they leave your device.
            </p>
            <p>
              These <code>keys</code> are available only to you. Meaning only
              you can access your data else where.
            </p>
            <p>What follows is an explanation of how we do what we do.</p>
            <h1 id="key-encryption">Key Encryption</h1>
            <h2>Fundamentals</h2>
            <h3>Master Key</h3>
            <p>
              When you sign up for ente, your client generates a{" "}
              <code>masterKey</code> for you. This never leaves your device
              unencrypted.
            </p>
            <h3>Key Encryption Key</h3>
            <p>
              Once you choose a password, a <code>keyEncryptionKey</code> is
              derived from it. This never leaves your device.
            </p>
            <h2>Flows</h2>
            <h3>Primary Device</h3>
            <p>
              During registration, your <code>masterKey</code> is encrypted with
              your
              <code>keyEncryptionKey</code>, and the resultant{" "}
              <code>encryptedMasterKey</code> is then sent to our servers for
              storage.
            </p>
            <h3 id="key-encryption-flows-secondary-device">Secondary Device</h3>
            <p>
              When you sign in on a secondary device, after you successfully
              verify your email, our servers give you back your{" "}
              <code>encryptedMasterKey</code> that was sent to us by your
              primary device.
            </p>
            <p>
              You are then prompted to enter your password. Once entered, your{" "}
              <code>keyEncryptionKey</code> is derived, and the client decrypts
              your <code>encryptedMasterKey</code> with this, to yield your
              original <code>masterKey</code>.
            </p>
            <p>
              If the decryption fails, the client will know that the derived{" "}
              <code>keyEncryptionKey</code> was wrong, indicating an incorrect
              password, and will surface this information to you.
            </p>
            <h2>Privacy</h2>
            <ul>
              <li>
                Since only you know your password, only you can derive your{" "}
                <code>keyEncryptionKey</code>.
              </li>
              <li>
                Since only you can derive your <code>keyEncryptionKey</code>,
                only you have access to your
                <code>masterKey</code>.
              </li>
            </ul>
            <br />
            <p style={{ color: "grey" }}>
              <em>
                Keep reading to learn about how this <code>masterKey</code> is
                used to encrypt your data.
              </em>
            </p>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="file-encryption">File Encryption</h1>
            <h2>Fundamentals</h2>
            <h3 id="collection-key">Collection Key</h3>
            <p>
              Each of your files in ente belong to what we call a{" "}
              <code>collection</code>. A<code>collection</code> can be either a
              folder (like &quot;Camera&quot; or &quot;Screenshots&quot;) or an
              album (like &quot;Awkward Team Lunch&quot;).
            </p>
            <p>
              Each <code>collection</code> has a <code>collectionKey</code>.
              These never leave your device unencrypted.
            </p>
            <h3 id="file-key">File Key</h3>
            <p>
              Each of your files have a <code>fileKey</code>. These never leave
              your device unencrypted.
            </p>
            <h2>Flows</h2>
            <h3>Upload</h3>
            <ul>
              <li>
                Each file and associated metadata is encrypted with randomly
                generated
                <code>fileKey</code>s.
              </li>
              <li>
                Each <code>fileKey</code> is encrypted with the{" "}
                <code>collectionKey</code> of the
                <code>collection</code> (folder/album) the <code>file</code>{" "}
                belongs to. In case such a<code>collection</code> does not
                exist, one is created with a randomly generated
                <code>collectionKey</code>. All <code>collection</code> metadata
                (like name, folder-path, etc) are encrypted with this{" "}
                <code>collectionKey</code>.
              </li>
              <li>
                Each <code>collectionKey</code> is then encrypted with your{" "}
                <code>masterKey</code>.
              </li>
              <li>
                All of the above mentioned encrypted data is then pushed to the
                server for storage.
              </li>
            </ul>
            <h3>Download</h3>
            <ul>
              <li>
                All of the above mentioned encrypted data is pulled from the
                server.
              </li>
              <li>
                You first decrypt each file’s <code>collectionKey</code> with
                your <code>masterKey</code>.
              </li>
              <li>
                You then decrypt each file’s <code>fileKey</code> with their
                respective
                <code>collectionKey</code>s.
              </li>
              <li>
                Finally, you decrypt each file and associated metadata with the
                respective
                <code>fileKey</code>s.
              </li>
            </ul>
            <h2>Privacy</h2>
            <ul>
              <li>
                As explained in the previous section, only you have access to
                your <code>masterKey</code>.
              </li>
              <li>
                Since only you have access to your <code>masterKey</code>, only
                you can decrypt the
                <code>collectionKey</code>s.
              </li>
              <li>
                Since only you have access to the <code>collectionKey</code>s,
                only you can decrypt the
                <code>fileKey</code>s.
              </li>
              <li>
                Since only you have access to the <code>fileKey</code>s, only
                you can decrypt the files and their associated metadata.
              </li>
            </ul>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="sharing">Sharing</h1>
            <h2>Fundamentals</h2>
            <h3 id="public-key">Public Key</h3>
            <p>
              When you sign up for ente, your app generates a{" "}
              <code>publicKey</code> for you. This is public, and is stored at
              our servers in plain text.
            </p>
            <h3 id="private-key">Private Key</h3>
            <p>
              Along with the <code>publicKey</code>, your app also generates a
              corresponding
              <code>privateKey</code> for you. This never leaves your device
              unencrypted.
            </p>
            <p>
              The <code>privateKey</code> is encrypted with your{" "}
              <code>masterKey</code> that only you have access to. This{" "}
              <code>encryptedPrivateKey</code> is stored at our servers
            </p>
            <h2>Flow</h2>
            <p>
              Sharing is similar to the previous section, except that the{" "}
              <code>collectionKey</code> of a<code>collection</code> is shared
              with a receiver after encrypting it with the receiver&#39;s
              <code>publicKey</code>. To elaborate,
            </p>
            <h3>Sender</h3>
            <ul>
              <li>
                Each file and associated metadata was already encrypted with
                randomly generated
                <code>fileKey</code>s.
              </li>
              <li>
                Each of these <code>fileKey</code>s were also encrypted with the{" "}
                <code>collectionKey</code>
                of the <code>collection</code> (folder/album) that is now being
                shared.
              </li>
              <li>
                The <code>collectionKey</code> is now encrypted with the{" "}
                <code>publicKey</code> of the receiver.
              </li>
              <li>
                All of the above mentioned encrypted data is then pushed to the
                server for storage.
              </li>
            </ul>
            <h3>Receiver</h3>
            <ul>
              <li>
                All of the above mentioned encrypted data is pulled from the
                server.
              </li>
              <li>
                The receiver first decrypts the <code>collectionKey</code> with
                their
                <code>privateKey</code>.
              </li>
              <li>
                They then decrypt each file’s <code>fileKey</code> with their
                respective
                <code>collectionKey</code>s.
              </li>
              <li>
                Finally, they decrypt each file and associated metadata with the
                respective
                <code>fileKey</code>s.
              </li>
            </ul>
            <h2>Privacy</h2>
            <ul>
              <li>
                Since only the receiver has access to their{" "}
                <code>masterKey</code>, only they can decrypt their
                <code>encryptedPrivateKey</code> to access their{" "}
                <code>privateKey</code>.
              </li>
              <li>
                Since only the receiver has access to their{" "}
                <code>privateKey</code>, only they can decrypt the
                <code>collectionKey</code> that was sent to them.
              </li>
              <li>
                Since only the receiver has access to the{" "}
                <code>collectionKey</code>, only they can decrypt the
                <code>fileKey</code>s of files belonging to that album/folder.
              </li>
              <li>
                Since only the receiver has access to the <code>fileKey</code>s
                of files belonging to that album/folder, only they can decrypt
                the files and associated metadata.
              </li>
            </ul>
            <div style={{ padding: "20px", backgroundColor: "#242424" }}>
              Currently you have to trust our servers to give you the correct
              <code>publicKey</code>. It&#39;s technically possible for the
              receiver to share this information with you on a separate channel.
              This feature (to export and import public keys) is currently not
              available, and will be added if necessary. If you care about this,
              please upvote this feature within the &quot;roadmap&quot; section
              of the app, or email{" "}
              <a href="mailto:roadmap@ente.io">roadmap@ente.io</a>. It will be
              prioritized.
            </div>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="key-recovery">Key Recovery</h1>
            <h2>Fundamentals</h2>
            <h3 id="recovery-key">Recovery Key</h3>
            <p>
              When you sign up for <strong>ente</strong>, your app generates a{" "}
              <code>recoveryKey</code> for you. This never leaves your device
              unencrypted.
            </p>
            <h2>Flow</h2>
            <h3 id="storage">Storage</h3>
            <p>
              Your <code>recoveryKey</code> and <code>masterKey</code> are
              encrypted with each other and stored on the server.
            </p>
            <h3 id="access">Access</h3>
            <p>
              This encrypted <code>recoveryKey</code> is downloaded when you
              sign in on a new device. This is decrypted with your{" "}
              <code>masterKey</code> and surfaced to you whenever you request
              for it.
            </p>
            <h3 id="recovery">Recovery</h3>
            <p>
              Post email verification, if you’re unable to unlock your account
              because you have forgotten your password, the client will prompt
              you to enter your <code>recoveryKey</code>.
            </p>
            <p>
              The client then pulls the <code>masterKey</code> that was earlier
              encrypted and pushed to the server (as discussed in{" "}
              <a href="#key-encryption">Key Encryption</a>), and decrypts it
              with the entered <code>recoveryKey</code>. If the decryption
              succeeds, the client will know that you have entered the correct{" "}
              <code>recoveryKey</code>.
            </p>
            <p>
              Now that you have your <code>masterKey</code>, the client will
              prompt you to set a new password, using which it will derive a new{" "}
              <code>keyEncryptionKey</code>. This is then used to encrypt your
              <code>masterKey</code> and this new{" "}
              <code>encryptedMasterKey</code> is uploaded to our servers,
              similar to what was earlier discussed in{" "}
              <a href="#key-encryption">Key Encryption</a>.
            </p>
            <h2>Privacy</h2>
            <ul>
              <li>
                Since only you have access to your <code>masterKey</code>, only
                you can access your
                <code>recoveryKey</code>.
              </li>
              <li>
                Since only you can access your <code>recoveryKey</code>, only
                you can reset your password.
              </li>
            </ul>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="authentication">Authentication</h1>
            <h2>Fundamentals</h2>
            <h3>One Time Token</h3>
            <p>
              When you attempt to verify ownership of an email address, our
              server generates a<code>oneTimeToken</code>, that if presented
              confirms your access to the said email address. This token is
              valid for a short time and can only be used once.
            </p>
            <h3>Authentication Token</h3>
            <p>
              When you successfully authenticate yourself against our server by
              proving ownership of your email (and in future any other
              configured vectors), the server generates an
              <code>authToken</code>, that can from there on be used to
              authenticate against our private APIs.
            </p>
            <h3>Encrypted Authentication Token</h3>
            <p>
              A generated <code>authToken</code> is returned to your client
              after being encrypted with your
              <code>publicKey</code>. This <code>encryptedAuthToken</code> can
              only be decrypted with the your
              <code>privateKey</code>
            </p>
            <h2>Flow</h2>
            <ul>
              <li>
                You are asked for an email address, to which a{" "}
                <code>oneTimeToken</code> is sent.
              </li>
              <li>
                Once you present this information correctly to our server, an{" "}
                <code>authToken</code> is generated and an{" "}
                <code>encryptedAuthToken</code> is returned to you, along with
                your other encrypted keys.
              </li>
              <li>
                You are then prompted to enter your password, using which your{" "}
                <code>masterKey</code> is derived (as discussed{" "}
                <a href="#key-encryption-flows-secondary-device">here</a>).
              </li>
              <li>
                Using this <code>masterKey</code>, the rest of your keys,
                including your <code>privateKey</code>
                is decrypted (as discussed <a href="#private-key">here</a>).
              </li>
              <li>
                Using your <code>privateKey</code>, the client will then decrypt
                the
                <code>encryptedAuthToken</code> that was encrypted by our server
                with your
                <code>publicKey</code>.
              </li>
              <li>
                This decrypted <code>authToken</code> can then from there on be
                used to authenticate all API calls against our servers.
              </li>
            </ul>
            <h2>Security</h2>
            <p>
              Only by verifying access to your email and knowing your password
              can you obtain an
              <code>authToken</code> that can be used to authenticate yourself
              against our servers.
            </p>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="implementation-details">Implementation Details</h1>
            <p>
              We rely on the high level APIs exposed by this wonderful library
              called{" "}
              <a
                href="https://libsodium.gitbook.io/doc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                libsodium
              </a>
              .{" "}
            </p>
            <h3 id="key-generation">Key Generation</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_secretbox_keygen</code>
              </a>
              is used to generate all random keys within the application. Your
              <code>masterKey</code>, <code>recoveryKey</code>,{" "}
              <code>collectionKey</code>, <code>fileKey</code>
              are all 256-bit keys generated using this API.
            </p>
            <h3 id="key-pair-generation">Key Pair Generation</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/authenticated_encryption#key-pair-generation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_box_keypair</code>
              </a>{" "}
              is used to generate your
              <code>publicKey</code> and
              <code>privateKey</code> pairs.
            </p>
            <h3 id="key-derivation">Key Derivation</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/password_hashing/default_phf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_pwhash</code>
              </a>{" "}
              is used to derive your
              <code>keyEncryptionKey</code> from your password.
            </p>
            <p>
              <code>crypto_pwhash_OPSLIMIT_SENSITIVE</code> and{" "}
              <code>crypto_pwhash_MEMLIMIT_SENSITIVE</code> are used as the
              limits for computation and memory respectively. If the operation
              fails due to insufficient memory, the former is doubled and the
              latter is halved progressively, until a key can be derived. If
              during this process the memory limit is reduced to a value less
              than
              <code>crypto_pwhash_MEMLIMIT_MIN</code>, the client will not let
              you register from that device.
            </p>
            <p>
              Internally, this uses{" "}
              <a
                href="https://github.com/P-H-C/phc-winner-argon2/raw/master/argon2-specs.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Argon2 v1.3
              </a>
              , which is regarded as{" "}
              <a
                href="https://en.wikipedia.org/wiki/Argon2"
                target="_blank"
                rel="noopener noreferrer"
              >
                one of the best hashing algorithms
              </a>
              currently available.
            </p>
            <h3 id="symmetric-encryption">Symmetric Encryption</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_secretbox_easy</code>
              </a>{" "}
              is used to encrypt your
              <code>masterKey</code>,<code>recoveryKey</code>,{" "}
              <code>privateKey</code>, <code>collectionKey</code> s and
              <code>fileKey</code>s.
              <br style={{ marginBottom: "0px" }} />
              Internally, this uses{" "}
              <a
                href="https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xsalsa20"
                target="_blank"
                rel="noopener noreferrer"
              >
                XSalsa20
              </a>{" "}
              stream cipher with{" "}
              <a
                href="https://datatracker.ietf.org/doc/html/rfc8439#section-2.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poly1305 MAC
              </a>{" "}
              for authentication.
            </p>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/secret-key_cryptography/secretstream"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_secretstream_*</code>
              </a>{" "}
              APIs are used to encrypt your file data in chunks.
              <br style={{ marginBottom: "0px" }} />
              Internally, this uses{" "}
              <a
                href="https://libsodium.gitbook.io/doc/advanced/stream_ciphers/xchacha20"
                target="_blank"
                rel="noopener noreferrer"
              >
                XChaCha20
              </a>{" "}
              stream cipher with{" "}
              <a
                href="https://datatracker.ietf.org/doc/html/rfc8439#section-2.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poly1305 MAC
              </a>{" "}
              for authentication.
            </p>
            <h3 id="asymmetric-encryption">Asymmetric Encryption</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>crypto_box_seal</code>
              </a>{" "}
              is used to encrypt <code>collectionKey</code>
              along with the receiver&#39;s <code>publicKey</code> for a
              folder/album that is to be shared with them.
            </p>
            <h3 id="salt-nonce-generation">Salt &amp; Nonce Generation</h3>
            <p>
              <a
                href="https://libsodium.gitbook.io/doc/generating_random_data"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>randombytes_buf</code>
              </a>{" "}
              is used to generate a new salt/nonce every time data needs to be
              hashed/encrypted.
            </p>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="further-details">Further Details</h1>
            <p>
              Thank you for reading so far! For deeper implementation details,
              we request you to kindly checkout{" "}
              <a
                href="https://github.com/ente-io"
                target="_blank"
                rel="noopener noreferrer"
              >
                our code
              </a>
              .
            </p>
            <p>
              If you have any questions or concerns, or if you&#39;d like to add
              yourself to the list of reviewers below, please drop an email to{" "}
              <a href="mailto:engineering@ente.io">engineering@ente.io</a>.
            </p>
            <hr style={{ marginTop: "48px" }} />
            <h1 id="reviewers">Reviewers</h1>
            <ul>
              <li>
                Atul Aggarwal [
                <a
                  href="https://www.linkedin.com/in/atulaggarwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                ]
              </li>
              <li>
                Chaitanya Gupta [
                <a href="https://lisper.in/" target="_blank" rel="noopener noreferrer">
                  Website
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/chaitanyagupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://twitter.com/chaitanya_gupta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                ]
              </li>
              <li>
                Chandra Sekar S [
                <a href="https://cskr.dev" target="_blank" rel="noopener noreferrer">
                  Website
                </a>{" "}
                |{" "}
                <a
                  href="https://www.linkedin.com/in/cskrdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://twitter.com/cskrdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                ]
              </li>
              <li>
                Isneesh Marwah [
                <a
                  href="https://www.linkedin.com/in/isneesh-marwah-89529b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://twitter.com/isneesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                ]
              </li>
              <li>
                Neeraj Gupta [
                <a
                  href="https://www.linkedin.com/in/ua741/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                | <a href="https://twitter.com/ua741">Twitter</a>]
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Layout>
    </div>
  )
}

export default Architecture
