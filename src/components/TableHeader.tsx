import TableSort from '../assets/chevron-up-down.svg'

const TableHeader = (props: { data: string; index: number }) => {
  return (
    <th className="table-header">
      {props.index === 0 ? (
        <div className="checkbox">
          <input type="checkbox" id="title" name="title" />
        </div>
      ) : null}
      {props.data}
      <img alt="sort icon" src={TableSort} />
    </th>
  )
}

export default TableHeader
