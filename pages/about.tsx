import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const About: React.FunctionComponent = () => (
  <Layout title="About | App">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default About
