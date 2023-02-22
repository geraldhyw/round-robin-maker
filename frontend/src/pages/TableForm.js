import '../css/TableForm.css'

import { useEffect, useState } from 'react'

const TableForm = () => {
  const [tableName, setTableName] = useState('')
  const [numTeams, setNumTeams] = useState('')
  const [winPoints, setWinPoints] = useState('')
  const [drawPoints, setDrawPoints] = useState('')
  const [losePoints, setLosePoints] = useState('')
  const [teamName1, setTeamName1] = useState('')
  const [teamName2, setTeamName2] = useState('')
  const [teamName3, setTeamName3] = useState('')
  const [teamName4, setTeamName4] = useState('')
  const [teamName5, setTeamName5] = useState('')
  const [teamName6, setTeamName6] = useState('')
  const [teamName7, setTeamName7] = useState('')
  const [teamName8, setTeamName8] = useState('')
  

  const createBaseTeamScores = (numTeams, teamNames) => {
    let teamScores = new Array(numTeams+1).fill(new Array(numTeams+3).fill(''))
    // let teamScores = new Array(numTeams+1)
    // let col1 = new Array(1).fill('').append(teamNames).append(['Points', ''])
    // let tmp1 = ['']
    // let tmp2 = ['Points', '']
    // let col1 = tmp1.append(teamNames.append(tmp2))

    console.log(numTeams, teamNames)

    for (let i = 0; i < teamScores.length; i++) {
      for (let j = 0; j < teamScores[0].length; j++) {
        if (i !== 0 && j === 0) {
          teamScores[i][j] = teamNames[i-1]
        } else if (i !== 0 && j === teamScores[0].length-1) {
          teamScores[i][j] = '1st'
        } else if (i === j) {
          teamScores[i][j] = ''
        } else {
          teamScores[i][j] = [0, 0]
        }

        // console.log(i, j, teamScores[i][j])
      }
    }

    for (let j = 0; j < teamScores[0].length; j++) {
      if (j === 0 || j === teamScores[0].length-1) {
        teamScores[0][j] = ''
      } else if (j === teamScores[0].length-2) {
        teamScores[0][j] = 'Points'
      } else {
        teamScores[0][j] = teamNames[j-1]
      }
    }
    // console.log(teamScores[0])
    // console.log(teamScores)
  }


  const handleCreate = async (e) => {
    e.preventDefault() 

    console.log(tableName)
    console.log(numTeams)
    console.log(winPoints)
    console.log(drawPoints)
    console.log(losePoints)
    console.log(teamName1)
    console.log(teamName2)
    console.log(teamName3)
    console.log(teamName4)
    console.log(teamName5)
    console.log(teamName6)
    console.log(teamName7)
    console.log(teamName8)

    let teamNames = [teamName1, teamName2, teamName3, teamName4, teamName5, teamName6, teamName7, teamName8]
    let teamScores = createBaseTeamScores(numTeams, teamNames)

    let table = { tableName, numTeams, winPoints, drawPoints, losePoints, teamNames, teamScores }

    const response = await fetch('/api/tables', {
      method: 'POST',
      body: JSON.stringify(table),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      // do something
      console.log(json.error)
    } else {
      // do smth
      console.log('success!')
    }
  }

  return (
    <div>
      <div className="form-header">
				<h2>Create Table</h2>
			</div>

			<div className="form-body">
        <div className="form-body-top">
          <div className="field-container">
            <label className="form-label"> Table Name </label>
            <input 
              className="form-input" 
              type="text" 
              value={tableName} 
              onChange={(e) => setTableName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-body-bottom">
          <div className="field-container">
            <label className="form-label"> Number of Teams </label>
            <input 
              className="form-input" 
              type="number" 
              value={numTeams} 
              onChange={(e) => setNumTeams(parseInt(e.target.value))}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Win </label>
            <input 
              className="form-input" 
              type="number" 
              value={winPoints} 
              onChange={(e) => setWinPoints(parseInt(e.target.value))}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Draw </label>
            <input 
              className="form-input" 
              type="number" 
              value={drawPoints} 
              onChange={(e) => setDrawPoints(parseInt(e.target.value))}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Lose </label>
            <input 
              className="form-input" 
              type="number" 
              value={losePoints} 
              onChange={(e) => setLosePoints(parseInt(e.target.value))}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 1 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName1} 
              onChange={(e) => setTeamName1(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 2 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName2} 
              onChange={(e) => setTeamName2(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 3 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName3} 
              onChange={(e) => setTeamName3(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 4 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName4} 
              onChange={(e) => setTeamName4(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 5 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName5} 
              onChange={(e) => setTeamName5(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 6 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName6} 
              onChange={(e) => setTeamName6(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 7 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName7} 
              onChange={(e) => setTeamName7(e.target.value)}
            />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 8 </label>
            <input 
              className="form-input" 
              type="text" 
              value={teamName8} 
              onChange={(e) => setTeamName8(e.target.value)}
            />
          </div>
        </div> 

        <div className="form-button-container">
					<button className="blue-button" onClick={handleCreate}>Create</button>
				</div>
			</div>
    </div>
  )
}

export default TableForm