"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
const AbsensiSantri = database_1.default.define("absensi_santri", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    keteranganAbsensi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    TanggalAbsensi: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
});
exports.default = AbsensiSantri;
