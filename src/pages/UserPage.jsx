import React from 'react'
import { WithRouter } from '../utils/navigation'
import Layout from '../components/Layout'

const UserPage = () => {
  return (
    <Layout>
      <div>UserPage</div>
    </Layout>
  )
}

export default WithRouter(UserPage)