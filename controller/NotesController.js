const Notes = require("../models/NotesModel");

const getAllNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll();
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getNotesById = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createNote = async (req, res) => {
    try {
        const note = await Notes.create(req.body);
        res.status(201).json({ message: "Note created successfully", note })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        await note.update(req.body);
        res.status(200).json({ message: "Note updated successfully", note });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteNote = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        await note.destroy();
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getAllNotes,
    getNotesById,
    createNote,
    updateNote,
    deleteNote
}