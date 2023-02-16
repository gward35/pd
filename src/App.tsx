import { useState, useEffect } from 'react'
import { data } from './data/data'
import Filter from './components/Filter'
import TableRow from './components/TableRow'
import ViewAll from './components/ViewAll'
import TableSort from './assets/chevron-up-down.svg'
import { DataType } from './types/types'
import './App.scss'

function App() {
  const [$data, $setData] = useState<DataType>()

  useEffect(() => {
    $setData(data)
  }, [])

  return (
    <div className="App">
      <div className="table-container">
        <Filter />
        <table>
          <thead>
            <tr>
              {$data?.headers.map((d, i) => (
                <>
                  <th key={i}>
                    {i === 0 ? (
                      <div className="checkbox">
                        <input type="checkbox" id="title" name="title" />
                      </div>
                    ) : null}
                    {d}
                    <img alt="sort icon" src={TableSort} />
                  </th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {$data?.rows.map((d, i) => (
              <TableRow key={i} data={d} />
            ))}
          </tbody>
        </table>
        <ViewAll content="View All Vulnerabilities" />
      </div>
    </div>
  )
}

export default App
