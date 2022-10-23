import React from 'react'
import { WithRouter } from '../utils/navigation'
import Layout from '../components/Layout'

const HomePage = () => {
  return (
    <Layout>
        <div>HomePage</div>
    </Layout>
  )
}

export default WithRouter(HomePage)