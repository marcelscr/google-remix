import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from 'remix'
import type { LinksFunction, MetaFunction } from 'remix'

import Layout from './components/layout'
import ErrorWrapper from './components/error'

import tailwindUrl from './styles/tailwind.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindUrl }]
}

export const meta: MetaFunction = () => {
  return { title: 'Google Remixed' }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <ErrorWrapper>
          <h1 className="font-bold text-gray-700">There was an error</h1>
          <p>{error.message}</p>
        </ErrorWrapper>
      </Layout>
    </Document>
  )
}

export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <ErrorWrapper>
          <h1 className="font-bold text-gray-700">
            {caught.status}: {caught.statusText}
          </h1>
          {message}
        </ErrorWrapper>
      </Layout>
    </Document>
  )
}

function Document({
  children,
  title
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
