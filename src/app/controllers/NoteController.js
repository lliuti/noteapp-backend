import Notes from '../models/Notes';

class NoteController {
  async store(req, res) {
    console.log(req.body);
    const { content } = req.body;

    const note = await Notes.create({ content });

    return res.status(201).json(note);
  };

  async index(req, res) {
    const notes = await Notes.findAll();

    return res.json(notes);
  };
};  

export default new NoteController();