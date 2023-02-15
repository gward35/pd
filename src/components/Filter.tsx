const Filter = () => {
  return (
    <nav className="filter-container">
      <ul>
        <li className="active">
          Vulnerabilities <span className="tags">20</span>
        </li>
        <li>
          Assets <span className="tags">20</span>
        </li>
        <li>
          Archive <span className="tags">20</span>
        </li>
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
