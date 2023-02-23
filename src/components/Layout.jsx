import { Header, Footer } from './'

export function Layout ({ children }) {
  return (
    <>
      <Header />
      <main className='w-full p-4'>
        {children}
      </main>
      <Footer />
    </>
  )
}
