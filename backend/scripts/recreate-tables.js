import Sequelize from 'sequelize';
import sequelize from '../database.js';
import { up as createMembersTable } from '../migrations/20240704-create-members-table.js';  // Vérifiez que le nom de fichier correspond

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Drop all tables (for recreation purposes)
    await sequelize.drop();
    console.log('All tables dropped.');

    // Run migration scripts
    await createMembersTable(sequelize.getQueryInterface(), Sequelize);
    console.log('All tables created successfully.');

    process.exit(0);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
})();
