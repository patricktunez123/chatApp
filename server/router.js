import express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
  response.send('The backend is perfectly working');
});

export default router;