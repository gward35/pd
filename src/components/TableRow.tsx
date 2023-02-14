import CreateJira from '../assets/create.svg'
import OpenJira from '../assets/open.svg'
import { Data } from '../types/types'

const TableRow = (props: { data: Data }) => {
  const statusType = props.data.status.toLowerCase().split(' ')[0]
  return (
    <tr className="table-row">
      <td>
        <p>{props.data.title}</p>
        <div>
          {props.data.tags.map((t, i) => (
            <span className="tags" key={i}>
              {t}
            </span>
          ))}
        </div>
      </td>
      <td>{props.data.dateFound}</td>
      <td>
        <span className={`tags ${props.data.risk.toLowerCase()}`}>
          {props.data.risk}
        </span>
      </td>
      <td>
        <span className="tags assets">{props.data.affectedAssets}</span>
      </td>
      <td>
        <span className={`tags ${statusType}`}>
          {statusType === 'create' ? (
            <img alt={statusType} src={CreateJira} />
          ) : (
            <img alt={statusType} src={OpenJira} />
          )}
          {props.data.status}
        </span>
      </td>
    </tr>
  )
}

export default TableRow