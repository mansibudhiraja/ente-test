import React from "react"
import Layout from '../components/layout/layout'
import Nav from '../components/Nav'
import Features from '../components/features'
import Pricing from '../components/pricing'


const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Nav/>
        <Features />
        <Pricing />
      </Layout>
    </div>
  )
}

export default IndexPage
