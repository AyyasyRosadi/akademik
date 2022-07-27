import db from "../config/database";
import { DataTypes } from "sequelize";

const HafalanSantri = db.define("hafalan_santri",{
    id : { 
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    nama : {
         type : DataTypes.STRING,
         allowNull : false
    },
    hafalanTahfidz : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    hafalanHadits : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    hafalanMatan : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    hafalanKosakataBahasaArab : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    hafalanKosakataBahasaInggris:{
        type : DataTypes.INTEGER,
        allowNull : false
    }
})
export default HafalanSantri;
