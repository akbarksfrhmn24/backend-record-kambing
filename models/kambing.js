// models/goat.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Kambing = sequelize.define('Kambing', {
    qrCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Kambing;
