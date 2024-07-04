const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('association_db', 'user', 'password', {
  host: 'db',
  dialect: 'postgres'
});

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

module.exports = Event;
