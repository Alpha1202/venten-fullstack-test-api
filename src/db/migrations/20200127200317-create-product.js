module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.createTable('Products', {
  id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER
  },
  name: {
  type: Sequelize.STRING,
  required: true,
  allowNull: false
  },
  description: {
  type: Sequelize.TEXT,
  required: true,
  allowNull: false
  },
  price: {
  type: Sequelize.FLOAT,
  required: true,
  allowNull: false
  },
  imageUrl: {
  type: Sequelize.STRING,
  required: true,
  allowNull: false
  },
  color: {
  type: Sequelize.STRING,
  required: true,
  allowNull: false
  },
  catId: {
  type: Sequelize.INTEGER,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
  model: 'Categories',
  key: 'id',
  as: 'catId'
  }
  },
  createdAt: {
  allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
  allowNull: false,
  type: Sequelize.DATE,
  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  }
  });
  },
  down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Products');
  }
  };