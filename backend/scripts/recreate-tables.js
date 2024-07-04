import sequelize from '../database.js';
import Member from '../models/member.js';
import Event from '../models/event.js';

const waitForPostgres = async () => {
  const retries = 5;
  const delay = 3000; // 3 seconds
  for (let i = 0; i < retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('Database connected');
      return;
    } catch (err) {
      console.log(`Database connection failed, retrying in ${delay / 1000} seconds...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error('Database connection failed after multiple retries');
};

const recreateTables = async () => {
  try {
    await waitForPostgres();
    await sequelize.sync({ force: true });
    console.log('All tables recreated successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error recreating tables:', error);
    process.exit(1);
  }
};

recreateTables();
