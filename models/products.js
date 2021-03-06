module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: {
      type: DataTypes.DECIMAL,
      isDecimal: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      isInt: true,
    },
    imageURL: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return products;
};
