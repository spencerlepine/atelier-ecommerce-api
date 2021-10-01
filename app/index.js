const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

// Parse request body
app.use(bodyParser.json());

app.use('/', routes);

/* ******************* */
// app.post
// OR
// app.use(routes)
/* ******************* */

// // Handle errors hardcoding status 400
// app.use((err, req, res) => {
//   if (err) {
//     console.error(err);
//     res.sendStatus(400);
//   }
// });

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = {
  close: () => server.close(),
};
