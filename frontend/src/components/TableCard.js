import '../css/TableCard.css'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TableCard = ({table}) => {
  return (
    <div className="card-container">
        <h2 className="card-container-left">{table.tableName}</h2>
        <h4 className="card-container-left">Teams:</h4>
        <h4 className="card-container-left">{table.teamNames.filter((name) => name !== '').join(', ')}</h4>
        <h4 className="card-container-right">Updated {formatDistanceToNow(new Date(table.updatedAt), { addSuffix: true })}</h4>
    </div>
  )
}

export default TableCard