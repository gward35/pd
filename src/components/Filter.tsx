import { useEffect, useState } from 'react'
import { navData } from '../data/data'
import { NavDataType } from '../types/types'

const Filter = () => {
  const [$data, $setData] = useState<NavDataType[]>([])
  const [$active, $setActive] = useState(0)

  useEffect(() => {
    $setData(navData)
  }, [])

  return (
    <nav className="filter-container">
      <ul>
        {$data.map((d) => (
          <li
            key={d.id}
            className={$active === d.id ? 'active' : ''}
            onClick={() => $setActive(d.id)}
          >
            {d.title} <span className="tags">{d.count}</span>
          </li>
        ))}
      </ul>
      <select>
        <option value="">Filter</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </nav>
  )
}

export default Filter
