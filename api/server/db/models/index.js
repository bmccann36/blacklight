const User = require('./user');
const Memory = require('./memory');

Memory.belongsTo(User, { as: 'author' });
User.belongsToMany(Memory, { as: 'viewedMemories', through: 'memoryViews', foreignKey: 'viewerId' });
Memory.belongsToMany(User, { as: 'viewers', through: 'memoryViews', foreignKey: 'viewedMemoryId' });

// This will add methods: memory.getViewers(), memory.setViewers, memory.addViewer,
//   memory.addViewers, user.getViewedMemories, user.setViewedMemories,
//   user.addViewedMemory, and user.addViewedMemories
// user.addViewedMemory(memory)
// memory.addViewer(user)

module.exports = {
  User,
  Memory,
};
