import { FC } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const About: FC = () => (
  <Layout title="About">
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default About
