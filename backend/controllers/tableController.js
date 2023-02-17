const Table = require('../models/tableModel')
const mongoose = require('mongoose')

// GET all tables
const getTables = async (req, res) => {
    const tables = await Table.find({}).sort({createdAt: -1})

    res.status(200).json(tables)
}

// GET single table
const getOneTable = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such table!"})
    }

    const table = await Table.findById(id)

    if (!table) {
        return res.status(404).json({error: "No such table!"})
    }

    res.status(200).json(table)
}

// POST new table
const createTable = async (req, res) => {
    const { tableName, numTeams, winPoints, losePoints, drawPoints, teamNames, teamScores } = req.body

    try {
        const table = await Table.create(req.body)
        res.status(200).json(table)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE single table
const deleteTable = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such table!"})
    }

    const table = await Table.findOneAndDelete({_id: id})

    if (!table) {
        return res.status(404).json({error: "No such table!"})
    }

    res.status(200).json(table)
}

// PATCH existing table
const updateTable = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such table!"})
    }

    const table = await Table.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!table) {
        return res.status(404).json({error: "No such table!"})
    }

    res.status(200).json(table)
}

module.exports = {
    getTables,
    getOneTable,
    createTable,
    deleteTable,
    updateTable
}