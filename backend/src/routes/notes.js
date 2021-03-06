const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');

router.route('/')
    //.get((req,res) => res.send('Notes Routes')) primero este!
    .get(getNotes)
    .post(createNote);
    //.post((req,res) => res.json({message: 'POST Request'}));
  //  .post()

    router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)
    
module.exports = router;