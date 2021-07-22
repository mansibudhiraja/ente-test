import React from "react"
import Layout from '../components/layout/layout'
import Nav from '../components/Nav'
import Features from '../components/features'
import Price from '../components/price'


const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Nav/>
        <Features />
        <Price />
      </Layout>
    </div>
  )
}

export default IndexPage
