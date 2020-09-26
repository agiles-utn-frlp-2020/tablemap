import Logo from 'src/components/Logo/Logo.js'

const Navbar = () => {
  return (
    <nav className="flex justify-center border-solid border-2 border-gray-100 py-3">
      <Logo width="50" height="50" className="inline-block mr-3" />
      <h1 className="inline-block text-4xl text-indigo-900">TableMap</h1>
    </nav>
  )
}

export default Navbar
