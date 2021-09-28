const express = require('express');
const poolClient = require('./poolClient');

const PORT = process.env.PORT || 3000;
const app = express();

// Parse request body
app.use(express.json());

app.post('/note', (req, res, next) => {
  const { name, content } = req.body;
  if (!name || !content) {
    const error = new Error('Missing params');
    return next(error);
  }

  const queryParams = [name, content];
  const query = 'INSERT INTO note (name, content) VALUES ($1, $2)';
  return poolClient
    .query(query, queryParams)
    .then(() => {
      console.log(`Note successfully inserted: ${name}`);
      res.sendStatus(200);
    })
    .catch((err) => next(err));
});

// Handle errors hardcoding status 400 for the sake of simplicity in our example
app.use((err, req, res) => {
  if (err) {
    console.error(err);
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
