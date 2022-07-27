import db from "../config/database";
import { DataTypes } from "sequelize";

const AbsensiSantri = db.define("absensi_santri",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nama : {
        type : DataTypes.STRING,
        allowNull :false
    },
    keteranganAbsensi : {
        type : DataTypes.STRING,
        allowNull : false
    },
    TanggalAbsensi : {
        type : DataTypes.DATEONLY,
        allowNull : false
    }
})
export default AbsensiSantri;