"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
const RaporSantri = database_1.default.define("rapor_santri", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    aqidah: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fiqh: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    manhaj: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    bahasaArab: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    nahwuShorof: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hadits: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    tahfidz: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    sejarah: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    bahasaIndonesia: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    bahasaInggris: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    matematika: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    penjaskes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = RaporSantri;
