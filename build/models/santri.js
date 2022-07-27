"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
const DataSantri = database_1.default.define("data_santri", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tempatLahir: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tanggalLahir: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    alamat: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    anakKe: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    pendidikanTerakhir: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    namaAyah: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    namaIbu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    noHpAyah: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    noHpIbu: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    awalMasuk: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = DataSantri;
