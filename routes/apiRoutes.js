const express = require('express');
const router = express.Router();
const store = require('../db/store');

// GET "/api/notes" - Retrieves all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await store.getNotes();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get notes' });
  }
});

// POST "/api/notes" - Adds a new note
router.post('/notes', async (req, res) => {
  const newNote = req.body;

  try {
    const note = await store.addNote(newNote);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add note' });
  }
});

// DELETE "/api/notes/:id" - Deletes a note
router.delete('/notes/:id', async (req, res) => {
  const noteId = req.params.id;

  try {
    await store.removeNote(noteId);
    res.json({ msg: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
