const { db, User, Item } = require('../server/db');

const seed = async () => {
  await db.sync({ force: true });

  const users = await Promise.all([
    User.create({
      name: 'Justin',
    }),
  ]);

  const items = await Promise.all([
      Item.create({
        name: 'Winter Coat',
        imageUrl: '/assets/images/winter-coat-female.jpeg',
        type: 'body',
        color: 'brown',
        season: 'winter',
        userId: 1,
      }),
      Item.create({
        name: 'PBS Shirt',
        imageUrl: '/assets/images/pbs-shirt.jpeg',
        type: 'body',
        color: 'green',
        season: 'any',
        userId: 1,
      }),
      Item.create({
        name: 'Fall Pants',
        imageUrl: '/assets/images/fall-pants.jpg',
        type: 'legs',
        color: 'beige',
        season: 'fall',
        userId: 1,
      })
  ])

  console.log(`Seeded ${users.length} users to database`);
  console.log(`Seeded ${items.length} items to database`)
  db.close();
};

//Seed the database and handle errors
seed().catch(err => {
  console.error('Something went wrong!');
  console.error(err);
  db.close();
});
