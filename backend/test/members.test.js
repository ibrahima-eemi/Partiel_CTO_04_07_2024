import request from 'supertest';
import express from 'express';
import memberRoutes from '../routes/members.js';
import { Sequelize } from 'sequelize';
import { expect } from 'chai';

const app = express();
app.use(express.json());
app.use('/api/members', memberRoutes);

// Simulez la connexion à la base de données
const sequelize = new Sequelize('association_db', 'user', 'password', {
  host: 'db',
  dialect: 'postgres',
  logging: false
});

describe('GET /api/members', () => {
  it('should return all members', async () => {
    const res = await request(app).get('/api/members');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
});

describe('POST /api/members', () => {
  it('should create a new member', async () => {
    const newMember = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      category: 'Hip-Hop',
      level: 'Beginner',
      age_group: 'Adult'
    };
    const res = await request(app).post('/api/members').send(newMember);
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
  });
});
