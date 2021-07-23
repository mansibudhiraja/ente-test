import React from "react"
import Layout from '../components/layout/layout'
import Nav from '../components/Nav'
import Features from '../components/features'
import Price from '../components/price'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <div className="App">
      <Layout>
        <SEO/>
        <Nav/>
        <Features />
        <Price />
      </Layout>
    </div>
  )
}

export default IndexPage
