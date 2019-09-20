import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({
  children,
  title = 'Default title',
}) => (
  <div>
    <Head>
      <title>{title + " | App"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}|{' '}
        <Link href="/about">
          <a>About</a>
        </Link>
        {' '}|{' '}
        <Link href="/users">
          <a>Users</a>
        </Link>
      </nav>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
