import { Router } from 'express';

import NoteController from './app/controllers/NoteController';

const routes = new Router();

routes.post('/notes', NoteController.store);
routes.get('/notes', NoteController.index);

export default routes;