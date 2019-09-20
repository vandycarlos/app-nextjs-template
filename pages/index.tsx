import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const Home: NextPage = () => (
  <Layout title="Home">
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)


export default Home
