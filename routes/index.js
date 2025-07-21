const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/search', function(req, res, next) {
  const query = req.query.q;
  res.render('search', { query: query });
});

router.get('/download', (req, res) => {
  const file = req.query.file;
  const filePath = path.join(__dirname, 'public', file);
  res.download(filePath);
});

router.post('/merge', (req, res) => {
  let obj = {};

  _.merge(obj, req.body); // /merge com body: {"__proto__": {"isAdmin": true}}
  res.send(obj);
});

module.exports = router;
