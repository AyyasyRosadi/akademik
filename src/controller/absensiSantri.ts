import { Request, Response } from "express";
import AbsensiSantri from "../models/absensiSantri";

class AbsensiSantriContol {
    public async hello(req: Request, res: Response): Promise<Response> {
        return res.json({ messgae: "Hello Absensi Santri" })
    }
    public async showAbsensi(req: Request, res: Response): Promise<Response> {
        const showAbsen = await AbsensiSantri.findAll();
        return res.json(showAbsen)
    }
    public async createAbsensi(req: Request, res: Response): Promise<Response> {
        try {
            const { nama, keteranganAbsensi, TanggalAbsensi } = req.body;
            await AbsensiSantri.create({
                nama : nama,
                keteranganAbsensi : keteranganAbsensi,
                TanggalAbsensi : TanggalAbsensi
            })
            return res.json({message:"Absensi created"})
        }
        catch (e) {
            return res.status(400).json({ message: "Bad Request" })
        }
    }
    public async deleteAbsensi(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            await AbsensiSantri.destroy({
                where :{
                    id : id
                }
            })
            return res.json({message:"Delete Absensi Succes"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})
        }
    }
    public async updateAbsensi(req:Request,res:Response):Promise<Response>{
        try{
            const {id} = req.params;
            const {nama,keteranganAbsensi,TanggalAbsensi} = req.body;
            await AbsensiSantri.update({
                nama : nama,
                keteranganAbsensi : keteranganAbsensi,
                TanggalAbsensi : TanggalAbsensi
            },{
                where : {
                    id : id
                }
            })
            return res.json({message:"Update Absensi Succes"})
        }
        catch(e){
            return res.status(400).json({message:"Bad Request"})
        }
    }
}
export default new AbsensiSantriContol;