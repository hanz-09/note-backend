const express = require("express");
const {
    getAllNotes,
    getNotesById,
    createNote,
    updateNote,
    deleteNote
} = require("../controller/NotesController");

const router = express.Router();

router.get("/notes", getAllNotes);
router.get("/notes/:id", getNotesById);
router.post("/notes", createNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;