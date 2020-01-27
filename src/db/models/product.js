module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
  name: {
  type: DataTypes.STRING,
  required: true
  },
  description: {
  type: DataTypes.TEXT,
  required: true
  },
  price: {
  type: DataTypes.FLOAT,
  required: true
  },
  imageUrl: {
  type: DataTypes.STRING,
  required: true
  },
  color: {
  type: DataTypes.STRING,
  required: true
  },
  }, {});
  Product.associate = models => {
  Product.belongsTo(models.Category, {
  foreignKey: 'catId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  });
  // associations can be defined here
  };
  return Product;
  };