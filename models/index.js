//currently has code from class miniproject, will change models for HW


const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blog };
