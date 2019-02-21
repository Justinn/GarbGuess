const { db, User } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });

  const users = await Promise.all([
    User.create({
      name: 'Justin',
    }),
  ]);

  console.log(`Seeded ${users.length} users to database`);
  db.close();
};

//Seed the database and handle errors
seed().catch(err => {
  console.error('Something went wrong!');
  console.error(err);
  db.close();
});
