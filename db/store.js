const fs = require('fs');
const util = require('util');
const uuidv1 = require('uuid/v1');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const dbFilePath = path.resolve(__dirname, 'db.json');

// Function to read data from db.json
const readNotesFromFile = () => {
    return readFileAsync(dbFilePath, 'utf8')
        .then(data => {
            try {
                return JSON.parse(data);
            } catch (err) {
                return [];
            }
        })
        .catch(err => {
            console.error('Error reading notes:', err);
            return [];
        });
};

// Function to write data to db.json
const writeNotesToFile = (notes) => {
    const notesJSON = JSON.stringify(notes, null, 2);
    return writeFileAsync(dbFilePath, notesJSON, 'utf8')
        .catch(err => {
            console.error('Error writing notes:', err);
            throw err;
        });
};

// Class to handle note operations
class Store {
    async getNotes() {
        try {
            return await readNotesFromFile();
        } catch (err) {
            console.error('Error getting notes:', err);
            return [];
        }
    }

    async addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error("Note 'title' and 'text' cannot be blank");
        }

        const newNote = { title, text, id: uuidv1() };

        try {
            const notes = await this.getNotes();
            const updatedNotes = [...notes, newNote];
            await writeNotesToFile(updatedNotes);
            return newNote;
        } catch (err) {
            console.error('Error adding note:', err);
            throw err;
        }
    }

    async removeNote(id) {
        try {
            const notes = await this.getNotes();
            const filteredNotes = notes.filter(note => note.id !== id);
            await writeNotesToFile(filteredNotes);
        } catch (err) {
            console.error('Error removing note:', err);
            throw err;
        }
    }
}

module.exports = new Store();
