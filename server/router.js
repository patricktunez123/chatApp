const express =require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send('The backend is perfectly working');
});

module.exports = router;