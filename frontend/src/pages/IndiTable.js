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

  const calculateTotalPoints = (rowIndex, colIndex) => {
    let totalPoints = 0
    let enemyTotalPoints = 0

    for (let j = 1; j <= table.numTeams; j++) {
      let leftScore = table.teamScores[rowIndex][j][0]
      let rightScore = table.teamScores[rowIndex][j][1]

      if (leftScore === 0 && rightScore === 0) {
        continue
      }

      if (!leftScore && !rightScore) {
        continue
      }

      if (leftScore > rightScore) {
        // win
        totalPoints += table.winPoints
      } else if (rightScore > leftScore) {
        // lose
        totalPoints += table.losePoints
      } else {
        // draw
        totalPoints += table.drawPoints
      }
    }

    // enemy points
    for (let j = 1; j <= table.numTeams; j++) {
      let leftScore = table.teamScores[colIndex][j][0]
      let rightScore = table.teamScores[colIndex][j][1]

      if (leftScore === 0 && rightScore === 0) {
        continue
      }

      if (!leftScore && !rightScore) {
        continue
      }

      if (leftScore > rightScore) {
        // win
        enemyTotalPoints += table.winPoints
      } else if (rightScore > leftScore) {
        // lose
        enemyTotalPoints += table.losePoints
      } else {
        // draw
        enemyTotalPoints += table.drawPoints
      }
    }

    return [totalPoints, enemyTotalPoints]
  }

  const handleScoreChange = (e, index, rowIndex, colIndex, oppIndex) => {
    // update score
    let newTeamScore = [...teamScores]
    newTeamScore[rowIndex][colIndex][index] = parseInt(e.target.value)
    newTeamScore[colIndex][rowIndex][oppIndex] = parseInt(e.target.value)

    // update points
    let points = calculateTotalPoints(rowIndex, colIndex)
    newTeamScore[rowIndex][table.numTeams+1] = points[0]
    newTeamScore[colIndex][table.numTeams+1] = points[1]

    setTeamScores(newTeamScore)
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

                className += " hoverable"
              }

              // check for same team
              if (rowIndex !== 0 && rowIndex === colIndex) {
                className += " blackout"
              }

              return (
                <div key={rowIndex*row.length + colIndex} className={className}>
                  { Array.isArray(item) ? 
                    // item[0] + " - " + item[1]
                    (
                    <div className="indi-scorebox-container">
                      <input 
                        className="indi-scorebox-input"
                        type='number'
                        value={teamScores[rowIndex][colIndex][0]}
                        onChange={e => {handleScoreChange(e, 0, rowIndex, colIndex, 1)}}
                        onFocus={e => e.target.select()}
                      />
                      -
                      <input 
                        className="indi-scorebox-input"
                        type='number'
                        value={teamScores[rowIndex][colIndex][1]}
                        onChange={e => {handleScoreChange(e, 1, rowIndex, colIndex, 0)}}
                        onFocus={e => e.target.select()}
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