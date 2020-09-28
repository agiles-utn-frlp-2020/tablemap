const Table = (props) => {
  const { x, y, isSelected, isOpen, name, onClick } = props

  const fontSize = 16

  const width = 100
  const height = 100
  const textPos = {
    x: x + width / 2,
    y: y + height / 2,
  }

  let classes = 'stroke-current cursor-pointer'
  let strokeWidth = 2

  if (isSelected) {
    classes += ' text-indigo-800'
    strokeWidth = 4
  }

  return (
    <g onClick={() => onClick(name)}>
      <rect
        width={width}
        height={height}
        rx="5"
        ry="5"
        fill="white"
        strokeWidth={strokeWidth}
        className={classes}
        x={x}
        y={y}
      />

      <text
        x={textPos.x}
        y={textPos.y}
        textAnchor="middle"
        fontFamily="monospace"
        fontSize={fontSize}
      >
        <tspan x={textPos.x} y={textPos.y}>
          {name}
        </tspan>
        {isOpen && (
          <tspan x={textPos.x} y={textPos.y + fontSize}>
            Open
          </tspan>
        )}
      </text>
    </g>
  )
}

const Map = ({ className, tables, onSelectTable }) => {
  return (
    <div className={className}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="smallGrid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#EBF4FF"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="#EBF4FF"
              strokeWidth="4"
            />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#grid)" />

        {tables.map((table) => (
          <Table key={table.name} {...table} onClick={onSelectTable} />
        ))}
      </svg>
    </div>
  )
}

export default Map
