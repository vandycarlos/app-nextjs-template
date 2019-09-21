import { FC } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const Home: FC = () => (
  <Layout title="Home">
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default Home
