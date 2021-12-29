import Header from '~/components/header'

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
      <footer className="flex flex-shrink-0 items-center justify-center p-8">
        <div>
          <p className="text-gray-700">&copy; 2021 Marcel Rebouças</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
