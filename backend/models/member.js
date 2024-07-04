const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('association_db', 'user', 'password', {
  host: 'db',
  dialect: 'postgres'
});

const Member = sequelize.define('Member', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING
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
  guardian_name: {
    type: DataTypes.STRING
  },
  guardian_contact: {
    type: DataTypes.STRING
  }
});

module.exports = Member;
