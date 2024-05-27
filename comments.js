// Create web server
// Run the server
// Create a route for /comments
// Create a route for /comments/new
// Create a route for /comments/:id
// Create a route for /comments/:id/edit
// Create a route for /comments/:id/delete
// Create a route for /comments/:id/like
// Create a route for /comments/:id/dislike
// Create a route for /comments/:id/report

const express = require('express');
const app = express();
const PORT = 3000;

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('All comments');
});

// Create a route for /comments/new
app.get('/comments/new', (req, res) => {
  res.send('New comment page');
});

// Create a route for /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Show comment ' + req.params.id);
});

// Create a route for /comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('Edit comment ' + req.params.id);
});

// Create a route for /comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('Delete comment ' + req.params.id);
});

// Create a route for /comments/:id/like
app.get('/comments/:id/like', (req, res) => {
  res.send('Like comment ' + req.params.id);
});

// Create a route for /comments/:id/dislike
app.get('/comments/:id/dislike', (req, res) => {
  res.send('Dislike comment ' + req.params.id);
});

// Create a route for /comments/:id/report
app.get('/comments/:id/report', (req, res) => {
  res.send('Report comment ' + req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});