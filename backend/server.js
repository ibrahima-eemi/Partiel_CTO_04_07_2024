import express from 'express';
import { Sequelize } from 'sequelize';
import memberRoutes from './routes/members.js';
import eventRoutes from './routes/events.js';

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
app.use('/api/members', memberRoutes);
app.use('/api/events', eventRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
