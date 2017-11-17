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
  ]);

  const memories = await Memory.bulkCreate([
    { title: 'memory title 1', text: 'this is the body text of my memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory sad 2', text: 'a sad memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory happy 3', text: 'a happy memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory angry 4', text: 'an angry memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory cool 5', text: 'a cool memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory interesting 6', text: 'an interesting memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory dark 7', text: 'a dark memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory creepy 8', text: 'a creepy memory', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory stoked 9', text: 'a memory I am stoked about', lng: 123.09786573, lat: 321.98273498 },
    { title: 'memory excited 10', text: 'an exciting memory', lng: 123.09786573, lat: 321.98273498 },
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
