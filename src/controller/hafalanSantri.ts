import { Request,Response } from "express";
import DataHafalanSantri from "../models/hafalanSantri";

class DataHafalanSantriControl{
    public async hello(req:Request,res:Response):Promise<Response>{
        return res.json({message:"hai data hafalan"})
    }
    public async showDataHafalan(req:Request,res:Response):Promise<Response>{
        const dataHafalan = await DataHafalanSantri.findAll();
        return res.json(dataHafalan)
    }
    public async createDataHafalan(req:Request,res:Response):Promise<Response>{
        try{
            const {nama,hafalanTahfidz,hafalanHadits,hafalanMatan,hafalanKosakataBahasaArab,hafalanKosakataBahasaInggris} = req.body;
            await DataHafalanSantri.create({
                nama : nama,
                hafalanTahfidz : hafalanTahfidz,
                hafalanHadits : hafalanHadits,
                hafalanMatan : hafalanMatan,
                hafalanKosakataBahasaArab : hafalanKosakataBahasaArab,
                hafalanKosakataBahasaInggris : hafalanKosakataBahasaInggris
            })
            return res.json({message:"Hafalan Created"})
        }
        catch(e){
            return res.status(400).json(e)
        }
    }
    public async deleteDataHafalan(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            await DataHafalanSantri.destroy({
                where : {
                    id : id
                }
            })
            return res.json({message:"Delete hafalan Succes"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})
        }
    }
    public async updateDataHafalan(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            const {nama,hafalanTahfidz,hafalanHadits,hafalanMatan,hafalanKosakataBahasaArab,hafalanKosakataBahasaInggris} = req.body;
            await DataHafalanSantri.update({
                nama : nama,
                hafalanTahfidz : hafalanTahfidz,
                hafalanHadits : hafalanHadits,
                hafalanMatan : hafalanMatan,
                hafalanKosakataBahasaArab : hafalanKosakataBahasaArab,
                hafalanKosakataBahasaInggris : hafalanKosakataBahasaInggris
            },{
                where : {
                    id : id
                }
            })
            return res.json({message:"Update Hafalan Succes"})
        }
        catch(e){
            return res.status(400).json({message:"Bad request"})
        }
    }
}
export default new DataHafalanSantriControl;