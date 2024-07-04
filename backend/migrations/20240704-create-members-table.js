import { Sequelize } from 'sequelize';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Members', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
    age_group: {
      type: Sequelize.STRING,
    },
    guardian_name: {
      type: Sequelize.STRING,
    },
    guardian_contact: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Members');
}
