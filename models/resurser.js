'use strict';
module.exports = (sequelize, DataTypes) => {
  const Resurser = sequelize.define('Resurser', {
    by: DataTypes.STRING,
    kategori_navn: DataTypes.STRING,
    beskrivelse: DataTypes.STRING,
    adresse: DataTypes.STRING,
    telefon: DataTypes.INTEGER,
    aabningstider: DataTypes.STRING,
    webside: DataTypes.STRING
  }, {});
  Resurser.associate = function(models) {
    // associations can be defined here
  };
  return Resurser;
};