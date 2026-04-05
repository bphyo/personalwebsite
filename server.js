const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes - MUST be before static middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Static files (after root route so landing.html is served first)
app.use(express.static('public', { index: false }));

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/universe', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'universe.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/experience', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'experience.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

app.get('/skills', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'skills.html'));
});

app.get('/education', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'education.html'));
});

app.get('/manifesto', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'manifesto.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
