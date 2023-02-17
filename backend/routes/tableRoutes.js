const express = require('express')
const {
    getTables,
    getOneTable,
    createTable,
    deleteTable,
    updateTable
} = require('../controllers/tableController')

const router = express.Router()

// GET all tables
router.get('/', getTables)

// GET single table
router.get('/:id', getOneTable)

// POST new table
router.post('/', createTable)

// DELETE single table
router.delete('/:id', deleteTable)

// PATCH existing table
router.patch('/:id', updateTable)

module.exports = router