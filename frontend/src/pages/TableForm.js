import '../css/TableForm.css'

const TableForm = () => {
  return (
    <div>
      <div className="form-header">
				<h2>Create Table</h2>
			</div>

			<div className="form-body">
        <div className="form-body-top">
          <div className="field-container">
            <label className="form-label"> Table Name </label>
            <input className="form-input" type="text" />
          </div>
        </div>

        <div className="form-body-bottom">
          <div className="field-container">
            <label className="form-label"> Number of Players </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Win </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Draw </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Points for Lose </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 1 </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 2 </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 3 </label>
            <input className="form-input" type="text" />
          </div>

          <div className="field-container">
            <label className="form-label"> Name of Team 4 </label>
            <input className="form-input" type="text" />
          </div>
        </div>

        <div className="form-button-container">
					<button className="blue-button">Create</button>
				</div>
			</div>
    </div>
  )
}

export default TableForm