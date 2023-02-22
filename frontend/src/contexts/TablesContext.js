import { createContext, useReducer } from 'react'

export const TablesContext = createContext()

export const tablesReducer = (state, action) => {
	switch (action.type) {
		case 'GET_TABLES':
			return {
				tables: action.payload
			}
		// case 'GET_TABLE':
		// 	return {
		// 		table: action.payload
		// 	}
		case 'CREATE_TABLE':
			return {
				tables: [action.payload, ...state.tables]
			}
		case 'DELETE_TABLE':
			return {
				tables: state.tables.filter(w => w._id !== action.payload._id)
			}
		// case 'UPDATE_TABLE':
		// 	return {
		// 		null
		// 	}
		default:
			return state
	}
}

export const TablesContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(tablesReducer, {
		tables: []
	})

	return (
		<TablesContext.Provider value={{ ...state, dispatch }}>
			{ children }
		</TablesContext.Provider>
	)
}