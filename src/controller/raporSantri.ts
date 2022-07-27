import { Request,Response } from "express";
import RaporSantri from "../models/raporSantri";

class RaporsantriControl {
    public async hello(req:Request,res:Response):Promise<Response>{
        return res.json({message: " Haii Rapor Santri"})
    }
    public async showRaporSantri(req:Request,res:Response):Promise<Response>{
        const showRapor = await RaporSantri.findAll();
        return res.json(showRapor)
    }
    public async createRaporSantri(req:Request,res:Response):Promise<Response>{
        try{
            const {nama,aqidah,fiqh,manhaj,bahasaArab,nahwuShorof,hadits,tahfidz,sejarah,bahasaIndonesia,bahasaInggris,matematika,penjaskes} = req.body;
            await RaporSantri.create({
                nama : nama,
                aqidah : aqidah,
                fiqh : fiqh,
                manhaj : manhaj,
                bahasaArab : bahasaArab,
                nahwuShorof : nahwuShorof,
                hadits : hadits,
                tahfidz : tahfidz,
                sejarah : sejarah,
                bahasaIndonesia : bahasaIndonesia,
                bahasaInggris : bahasaInggris,
                matematika : matematika,
                penjaskes : penjaskes
            })
            return res.json({message:"Rapor Created"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})
        }
    }
    public async deleteRapor(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            await RaporSantri.destroy({
                where : {
                    id : id
                }
            })
            return res.json({message:"Rapor Deleted"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})
        }
    }
    public async updateRapor(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            const {nama,aqidah,fiqh,manhaj,bahasaArab,nahwuShorof,hadits,tahfidz,sejarah,bahasaIndonesia,bahasaInggris,matematika,penjaskes} = req.body;
            await RaporSantri.update({
                nama : nama,
                aqidah : aqidah,
                fiqh : fiqh,
                manhaj : manhaj,
                bahasaArab : bahasaArab,
                nahwuShorof : nahwuShorof,
                hadits : hadits,
                tahfidz : tahfidz,
                sejarah : sejarah,
                bahasaIndonesia : bahasaIndonesia,
                bahasaInggris : bahasaInggris,
                matematika : matematika,
                penjaskes : penjaskes
            },{
                where : {
                    id : id
                }
            })
            return res.json({message:"Update Succes"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})   
        }
    }
}
export default new RaporsantriControl;
