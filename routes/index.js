const express = require('express');
const router = express.Router();

router.get('/search', function(req, res, next) {
  const query = req.query.q;
  res.render('search', { query: query });
});

module.exports = router;
