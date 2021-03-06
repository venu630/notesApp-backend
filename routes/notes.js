const express = require('express');
const {addNote, getAllNotes, updateNote, deleteNote, getANote } = require("../controllers/notes");
const {handleNoteParam} = require("../middlewares/noteMiddleware")
const {verifyToken} = require("../middlewares/authmiddleware");
const router = express.Router();


router.param("noteId", handleNoteParam);    


router.post("/add", verifyToken, addNote);
router.delete("/delete/:noteId",verifyToken, deleteNote);
router.put("/update/:noteId",verifyToken, updateNote );
router.get("/getallnotes",verifyToken, getAllNotes );
router.get("/getanote/:noteId",verifyToken, getANote );





module.exports = router;