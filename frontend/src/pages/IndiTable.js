import '../css/IndiTable.css'

const IndiTable = () => {
  let rowFiller = ['', 'team1', 'team2', 'team3']
  let colFiller = ['', 'team1', 'team2', 'team3', 'Points', '']

  let threeTeamTable = 
  [
    ['', 'team1', 'team2', 'team3', 'Points', ''],
    ['team1', '', [0, 0], [1, 1], '0', '1st'],
    ['team2', [10, 0], '', [0, 0], '0', '1st'],
    ['team3', [0, 0], [0, 10], '', '0', '1st'],
  ]

  let sixTeamTable = 
  [
    ['', 'team1', 'team2', 'team3', 'team4', 'team5', 'team6', 'Points', ''],
    ['team1', '', [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], '0', '1st'],
    ['team2', [0, 0], '', [0, 0], [0, 0], [0, 0], [0, 0], '0', '1st'],
    ['team3', [0, 0], [0, 10], '', [0, 0], [0, 0], [0, 0], '0', '1st'],
    ['team4', [0, 0], [0, 0], [1, 1], '', [0, 0], [0, 0], '0', '1st'],
    ['team5', [0, 0], [0, 0], [10, 0], [0, 0], '',  [0, 0], '0', '1st'],
    ['team6', [0, 0], [0, 10], [0, 0], [0, 0], [0, 0], '', '0', '1st'],
  ]

  // {
  //   type: "", 
  //   score: "",
  //   msg: ""
  // }
   
  return (
    <div>
      <div className='indi-header'>
        <h2>National Community Games 2023 - Central Regional Qualifier</h2>
      </div>

      <div className='indi-body'>
        {/* table  */}
        
        <div className="indi-table six"> 
        {/* change number of rows above^  */}
          {sixTeamTable.map((row, rowIndex) => {
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
                    item[0] + " - " + item[1]
                    : 
                    item
                  }
                </div> 
            )}))
          })}
        </div>

        {/* button */}
        <div className="indi-button-container">
					<button className="blue-button">Update</button>
				</div>
      </div>
    </div>
  )
}

export default IndiTable