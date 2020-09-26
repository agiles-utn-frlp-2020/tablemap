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
        <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <rect x="25" width="25" height="25" fill="#4C51BF" />
        <rect x="25" y="25" width="25" height="25" fill="#7F9CF5" />
        <rect y="25" width="25" height="25" fill="#EBF4FF" />
      </g>
    </svg>
  )
}

export default Logo
