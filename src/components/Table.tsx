import TableHeader from './TableHeader'
import TableRow from './TableRow'
import { Data } from '../types/types'

const Table = (props: { data: { headers: string[]; rows: Data[] } }) => {
  return (
    <table>
      <thead>
        <tr>
          {props.data.headers.map((d, i) => (
            <TableHeader key={i} index={i} data={d} />
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.rows.map((d, i) => (
          <TableRow key={i} data={d} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
