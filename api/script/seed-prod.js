/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const { User, Memory } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
    User.create({ email: 'dude@email.com', password: 'dude' }),
    User.create({ email: 'heyo@email.com', password: 'heyo' }),
  ]);

  const memories = await Memory.bulkCreate([
    {
      title: 'Met My Father For The First Time',
      text: "I met my dad for the first time at a restaurant near here earlier tonight. It was really strange. I'm not sure what to think about the experience. It felt so empty. I don't know.",
      lng: -73.99820009999996,
      lat: 40.7344108,
      authorId: 1,
    },
    {
      title: 'Ate Fantastic Falafel',
      text: "I'm from out of town, but seriously, I ate the best falafel right here. Just outside the empire state building. Have to come back!",
      lng: -73.98575770000002,
      lat: 40.7485413,
      authorId: 4,
    },
    {
      title: 'Marriage',
      text: "I married my best friend here! It was so amazing celebrating it with all of my friends and family. At one point I think I saw one of my ex-boyfriends in the distance though. I hope he's okay...",
      lng: -73.96535510000001,
      lat: 40.7828647,
      authorId: 2,
    },
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${memories.length} memories`);
  console.log('seeded successfully');
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch((err) => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...');
