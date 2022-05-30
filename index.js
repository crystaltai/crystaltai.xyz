const express = require('express');
const app = express();

//TODO: Delete
// app.get('/', (req, res) => {
//   res.send({ hi: 'there' });
// });

// Make sure Heroku handles routing correctly while in production
if (process.env.NODE_ENV === 'production') {
  // Make sure Express will serve up production assets (i.e. main.js)
  // If any GET request comes in for a route/file and we don't have a route handler for it, look into the below directory
  app.use(express.static('client/build'));

  // Make sure Express will serve up index.html if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
