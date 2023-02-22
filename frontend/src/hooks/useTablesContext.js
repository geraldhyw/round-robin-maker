import { TablesContext } from "../contexts/TablesContext"
import { useContext } from 'react'

export const useTablesContext = () => {
    const context = useContext(TablesContext)

    if (!context) {
        throw Error('useTablesContext must be used inside TableContextProvider')
    }

    return context
}