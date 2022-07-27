import db from "../config/database";
import { DataTypes } from "sequelize";

const RaporSantri = db.define("rapor_santri", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aqidah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fiqh: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    manhaj: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bahasaArab: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nahwuShorof: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hadits: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tahfidz: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sejarah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bahasaIndonesia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bahasaInggris: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    matematika: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    penjaskes: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
export default RaporSantri;
