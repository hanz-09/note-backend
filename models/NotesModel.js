const {Sequelize} = require('sequelize');
const db = require('../config/database');

const Notes = db.define('notes', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    note: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    },
    {
        freezeTableName: true
    })

module.exports = Notes;

(async () => {
    await db.sync();
})();