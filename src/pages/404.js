import * as React from "react"
import Layout from '../components/layout/layout'


// markup
const NotFoundPage = () => {
  return (
    <div>
      <Layout>
       <div class="container page-title">
        four-oh-four
      </div>
      <div class="legal-section-wrapper" style={{fontSize: "18px !important"}}>
        <div class="legal-section-container container">
            <div class="legal-section" style={{fontSize: "18px", lineHeight: 1.6}}>
                <p style={{paddingTop: "12px", textAlign: "center"}}> if you cannot find what you're looking for, it's sometimes better to look inside.</p>
            </div>
        </div>
      </div>
      </Layout>
    </div>
  )
}

export default NotFoundPage
