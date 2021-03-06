const Logo = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50"
      >
        <circle cx="25" cy="25" r="25" fill="#FFF"/>
      </mask>

      <g mask="url(#mask0)">
        <rect width="25" height="25" className="text-white fill-current hover:text-indigo-100"/>
        <rect y="25" width="25" height="25" className="text-indigo-200 fill-current hover:text-indigo-300" />
        <rect x="25" y="25" width="25" height="25" className="text-indigo-400 fill-current hover:text-indigo-500" />
        <rect x="25" width="25" height="25" className="text-indigo-600 fill-current hover:text-indigo-700"/>
      </g>
    </svg>
  )
}

export default Logo
