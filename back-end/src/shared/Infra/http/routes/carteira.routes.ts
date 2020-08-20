import { Router } from 'express';

import ensureAuthenticate from '../../../../middleware/ensureAuthenticate';

const carteiraRouter = Router();

carteiraRouter.get('/historic', ensureAuthenticate);
