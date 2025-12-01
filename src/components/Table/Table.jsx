import './Table.scss'

const Table = (props) => {
  const {
    className,
    headCells = [],
    rows = [],
  } = props

  return (
    <table className={className}>
      {headCells.length > 0 && (
        <thead>
        <tr>
          {headCells.map((cell, index) => (
            <th width={cell.width} key={index}>{cell.children}</th>
          ))}
        </tr>
        </thead>
      )}
      <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.cells.map((cell, cellIndex) => (
            <td key={cellIndex}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Table