import Navbar from 'src/components/Navbar/Navbar.js'

const DiningManagerPage = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex h-full">
        <div className="w-2/3 h-full bg-gray-400"></div>
        <div className="w-1/3 h-full bg-gray-200"></div>
      </main>
    </>
  )
}

export default DiningManagerPage
