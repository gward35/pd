import { useState, useEffect } from 'react'
import { data } from './data/data'
import Filter from './components/Filter'
import Table from './components/Table'
import ViewAll from './components/ViewAll'
import { DataType } from './types/types'
import './App.scss'

function App() {
  const [$data, $setData] = useState<DataType>({ headers: [], rows: [] })

  useEffect(() => {
    $setData(data)
  }, [])

  return (
    <div className="App">
      <div className="table-container">
        <Filter />
        <Table data={$data} />
        <ViewAll content="View All Vulnerabilities" />
      </div>
    </div>
  )
}

export default App
