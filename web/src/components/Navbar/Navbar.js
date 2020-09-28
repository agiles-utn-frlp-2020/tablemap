import Logo from 'src/components/Logo/Logo.js'

const Navbar = () => {
  return (
    <nav className="flex justify-center border-solid border-2 border-gray-100 py-3">
      <a href="/" className="flex align-center">
        <Logo width="50" height="50" className="inline-block mr-3" />
        <h1 className="inline-block text-3xl text-indigo-900">TableMap</h1>
      </a>
    </nav>
  )
}

export default Navbar
