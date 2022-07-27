"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
const HafalanSantri = database_1.default.define("hafalan_santri", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    hafalanTahfidz: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hafalanHadits: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hafalanMatan: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hafalanKosakataBahasaArab: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    hafalanKosakataBahasaInggris: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = HafalanSantri;
