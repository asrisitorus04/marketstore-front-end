import React from 'react'
import { WithRouter } from '../utils/navigation'
import Layout from '../components/Layout'

const LandingPage = () => {
  return (
    <Layout>
        <div>LandingPage</div>
    </Layout>
  )
}

export default WithRouter(LandingPage)