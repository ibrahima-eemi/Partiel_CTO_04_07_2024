import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING
  },
  level: {
    type: DataTypes.STRING
  },
  age_group: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

export default Event;
