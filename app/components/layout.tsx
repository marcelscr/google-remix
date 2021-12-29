import Header from '~/components/header'
import Footer from '~/components/footer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col items-stretch font-light">
      {/* Header */}
      <Header className="flex-shrink-0" />

      {/* Content */}
      <main className="flex-grow flex-shrink-0">{children}</main>

      {/* Footer */}
      <Footer className="flex-shrink-0" />
    </div>
  )
}

export default Layout
