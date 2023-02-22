import '../css/IndiTable.css'
import { useLocation } from 'react-router-dom'
import { useTablesContext } from '../hooks/useTablesContext'
import { useState } from 'react'

const IndiTable = () => {
	const { tables, dispatch } = useTablesContext()
  const location = useLocation()
  let table = location.state
  const [teamScores, setTeamScores] = useState(table.teamScores)

  let wordNumTeams = ''
  switch(table.numTeams) {
    case 3:
      wordNumTeams = 'three'
      break
    case 4:
      wordNumTeams = 'four'
      break
    case 5:
      wordNumTeams = 'five'
      break
    case 6:
      wordNumTeams = 'six'
      break
    case 7:
      wordNumTeams = 'seven'
      break
    case 8:
      wordNumTeams = 'eight'
      break
    default:
      wordNumTeams = 'three'
  }

  const handleUpdate = async () => {
    
    table = {...table, teamScores}
    console.log(table)

    const response = await fetch('/api/tables/' + table._id, {
      method: 'PATCH',
      body: JSON.stringify(table),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      console.log(json.error)
    } else {
      dispatch({type: 'PATCH_TABLE', payload: json})
    }
  }
   
  return (
    <div>
      <div className='indi-header'>
        <h2>{table.tableName}</h2>
      </div>

      <div className='indi-body'>
        {/* table  */}
        <div className={"indi-table " + wordNumTeams}> 
          {table.teamScores.map((row, rowIndex) => {
            return (row.map((item, colIndex) => {
              let className = "indi-table-item"

              let isNotBorder = rowIndex === 0 || colIndex === 0 || colIndex === (row.length-1)
              if (!isNotBorder) {
                className += " table-border"
              }

              // check for results (win, lose, draw)
              if (Array.isArray(item)) {
                if (item[0] === 0 && item[1] ===0) {
                  className += " default"
                } else if (item[0] === item[1]) {
                  className += " draw"
                } else if (item[0] > item[1]) {
                  className += " win"
                } else {
                  className += " lose"
                }

                if (rowIndex > colIndex) {
                  className += " hoverable"
                }
              }

              // check for same team
              if (rowIndex !== 0 && rowIndex === colIndex) {
                className += " blackout"
              }

              return (
                <div key={rowIndex*row.length + colIndex} className={className} contentEditable>
                  { Array.isArray(item) ? 
                    // item[0] + " - " + item[1]
                    (
                    <div className="indi-scorebox-container">
                      <input 
                        className="indi-scorebox-input"
                        type='number'
                        value={teamScores[rowIndex][colIndex][0]}
                        onChange={e => {
                          let newTeamScore = [...teamScores]
                          newTeamScore[rowIndex][colIndex][0] = parseInt(e.target.value)
                          newTeamScore[colIndex][rowIndex][1] = parseInt(e.target.value)
                          setTeamScores(newTeamScore)
                        }}
                      />
                      -
                      <input 
                        className="indi-scorebox-input"
                        type='number'
                        value={teamScores[rowIndex][colIndex][1]}
                        onChange={e => {
                          let newTeamScore = [...teamScores]
                          newTeamScore[rowIndex][colIndex][1] = parseInt(e.target.value)
                          newTeamScore[colIndex][rowIndex][0] = parseInt(e.target.value)
                          setTeamScores(newTeamScore)
                        }}
                      />
                    </div>
                    )
                    : 
                    item
                  }
                </div> 
            )}))
          })}
        </div>

        {/* button */}
        <div className="indi-button-container">
					<button className="blue-button" onClick={handleUpdate}>Update</button>
				</div>
      </div>
    </div>
  )
}

export default IndiTable