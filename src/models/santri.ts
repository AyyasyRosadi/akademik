import db from "../config/database";
import { DataTypes } from "sequelize";

const DataSantri = db.define("data_santri", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tempatLahir: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggalLahir: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anakKe: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pendidikanTerakhir: {
        type: DataTypes.STRING,
        allowNull: false
    },
    namaAyah: {
        type: DataTypes.STRING,
        allowNull: false
    },
    namaIbu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    noHpAyah: {
        type: DataTypes.STRING,
        allowNull : false
    },
    noHpIbu: {
        type: DataTypes.STRING,
        allowNull : false
    },
    awalMasuk: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})
export default DataSantri;