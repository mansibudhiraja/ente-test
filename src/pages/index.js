import React from "react"
import Layout from '../components/layout/layout'
import Features from '../components/features'
import Price from '../components/price'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
      <Layout>
        <Seo/>
        <Features />
        <Price />
      </Layout>
  )
}


export default IndexPage
