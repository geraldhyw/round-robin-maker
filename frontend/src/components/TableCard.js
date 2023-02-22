import '../css/TableCard.css'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TableCard = ({table}) => {
  
  const handleDelete = (e) => {
    e.stopPropagation()
    const deleteTable = async () => {
      const response = await fetch('/api/tables/' + table._id, {
        method: 'DELETE'
      })

      const json = await response.json()

      if (response.ok) {
        console.log("delete success")
      }
    }

    deleteTable()
  }
  
  return (
    <div className="card-container">
      <div className="card-top">
        <h2 className="card-container-left">{table.tableName}</h2>
        <div className="circle">
          <span className="material-symbols-outlined" onClick={(e) => handleDelete(e)}>delete</span>
        </div>  
      </div>
      <h4 className="card-container-left">Teams:</h4>
      <h4 className="card-container-left">{table.teamNames.filter((name) => name !== '').join(', ')}</h4>
      <h4 className="card-container-right">Updated {formatDistanceToNow(new Date(table.updatedAt), { addSuffix: true })}</h4>
    </div>
  )
}

export default TableCard