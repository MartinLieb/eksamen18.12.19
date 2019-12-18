'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Resursers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      by: {
        type: Sequelize.STRING
      },
      kategori_navn: {
        type: Sequelize.STRING
      },
      beskrivelse: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      telefon: {
        type: Sequelize.INTEGER
      },
      aabningstider: {
        type: Sequelize.STRING
      },
      webside: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Resursers');
  }
};