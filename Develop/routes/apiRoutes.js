//post routes for notes
const app = require('express').Router();
const uuid = require('uuid');
//Post request to add a note
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // Destructuring assignment for the items in req.body
    const { note, title } = req.body;
  
    // If all the required properties are present
    if (note && title) {
      // Variable for the object we will save
      const newNote = {
        title,
        note,    
        note_id: uuid(),
      };
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting note');
    }
  });

  module.exports = app;
//delete route for notes