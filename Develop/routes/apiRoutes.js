//post routes for notes
const app = require('express').Router();
const {v4: uuidv4} = require('uuid');
//Post request to add a note
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // Destructuring assignment for the items in req.body
    const { product, note, username } = req.body;
  
    // If all the required properties are present
    if (product && note && username) {
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
//delete route for notes