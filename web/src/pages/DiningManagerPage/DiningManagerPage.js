import Navbar from 'src/components/Navbar/Navbar.js'
import Map from 'src/components/Map/Map.js'

import { useState } from 'react'

// TODO: esto tiene que venir del back
const _tables = [
  { x: 10, y: 10, isSelected: false, isOpen: false, name: '1' },
  { x: 100, y: 150, isSelected: false, isOpen: true, name: '2' },
]

const DiningManagerPage = () => {
  const [tables, setTables] = useState(_tables)

  function onSelectTable(tableName) {
    const _tables = tables.map((table) => {
      const isSelected = table.name === tableName ? !table.isSelected : false

      return {
        ...table,
        isSelected,
      }
    })

    setTables(_tables)
  }

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex h-full">
        <Map
          className="w-3/5 h-full"
          tables={tables}
          onSelectTable={onSelectTable}
        ></Map>
        <div className="w-2/5 h-full bg-gray-200"></div>
      </main>
    </>
  )
}

export default DiningManagerPage
