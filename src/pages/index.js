import React from "react"
import Layout from '../components/layout/layout'
import Nav from './Nav'
import Features from './features'
import Pricing from './pricing'


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
