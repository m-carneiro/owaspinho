const express = require('express');
const router = express.Router();

router.get('/search', function(req, res, next) {
  const query = req.query.q;
  res.send(`<h1>Resultados da busca por: ${query}</h1>`);
});

module.exports = router;
