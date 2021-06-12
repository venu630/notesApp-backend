const cors = require("cors");
app.use(cors());

exports.handleNoteParam = (req, res, next, id) => {

    req.noteId = id;
    next();
};