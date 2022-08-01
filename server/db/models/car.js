"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id",
      });
      Car.hasMany(models.Reservation, {
        as: "reservations",
        foreignKey: "car_id",
      });
    }
  }
  Car.init(
    {
      profile_picture: DataTypes.STRING,
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      year: DataTypes.INTEGER,
      number_of_seats: DataTypes.INTEGER,
      price_per_day: DataTypes.INTEGER,
      description: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      type: DataTypes.STRING, //[Hatchback, Sedan, SUV, MUV, Coupe, Convertible, Pickup Truck]
      location: DataTypes.STRING, //city, country
      engine: DataTypes.STRING,
      gear: DataTypes.STRING, //[auto/manual]
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
