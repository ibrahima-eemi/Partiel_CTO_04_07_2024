const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = 5000;

// Database connection
const sequelize = new Sequelize('association_db', 'user', 'password', {
  host: 'db',
  dialect: 'postgres'
});

// Middleware
app.use(express.json());

// Routes
const memberRoutes = require('./routes/members'); // Vérifiez ce chemin
const eventRoutes = require('./routes/events'); // Vérifiez ce chemin

app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
