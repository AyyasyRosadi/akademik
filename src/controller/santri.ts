import { Request, Response } from "express"
import DataSantri from "../models/santri";

class DataSantriControl {
    public async hello(req: Request, res: Response): Promise<Response> {
        return res.json({ message: "hello Ayyasy" })
    }
    public async showDataSantri(req: Request, res: Response): Promise<Response> {
        const showData = await DataSantri.findAll();
        return res.json(showData)
    }
    public async getDataSantri(req:Request,res:Response):Promise<Response>{
        const {id}  = req.params;
        const getOne = await DataSantri.findOne({
            where : {
                id : id
            }
        })
        return res.json(getOne)
    }
    public async createDataSantri(req: Request, res: Response): Promise<Response> {
        try {
            const { nama, tempatLahir, tanggalLahir, alamat, anakKe, pendidikanTerakhir, namaAyah, namaIbu, noHpAyah, noHpIbu, awalMasuk } = req.body;
            await DataSantri.create({
                nama: nama,
                tempatLahir: tempatLahir,
                tanggalLahir: tanggalLahir,
                alamat: alamat,
                anakKe: anakKe,
                pendidikanTerakhir: pendidikanTerakhir,
                namaAyah: namaAyah,
                namaIbu: namaIbu,
                noHpAyah: noHpAyah,
                noHpIbu: noHpIbu,
                awalMasuk: awalMasuk
            })
            return res.json({ message: "Santri Created" })
        }
        catch (e) {
            return res.status(400).json({ message: "Bad Request" })
        }
    }
    public async deleteDataSantri(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            await DataSantri.destroy({
                where: {
                    id: id
                }
            })
            return res.json({ message: "Delete Santri Succes" })
        }
        catch (e) {
            return res.status(400).json({ message: "Bad Request" })
        }
    }
    public async updateDataSantri(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id;
            const { nama, tempatLahir, tanggalLahir, alamat, anakKe, pendidikanTerakhir, namaAyah, namaIbu, noHpAyah, noHpIbu, awalMasuk } = req.body;
            await DataSantri.update({
                nama: nama,
                tempatLahir: tempatLahir,
                tanggalLahir: tanggalLahir,
                alamat: alamat,
                anakKe: anakKe,
                pendidikanTerakhir: pendidikanTerakhir,
                namaAyah: namaAyah,
                namaIbu: namaIbu,
                noHpAyah: noHpAyah,
                noHpIbu: noHpIbu,
                awalMasuk: awalMasuk
            }, {
                where: {
                    id: id
                }
            })
            return res.json({ message: "Update Santri Succes" })
        }
        catch (e) {
            return res.status(400).json({ message: "Bad Request"})
        }
    }
}
export default new DataSantriControl;