"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const santri_1 = __importDefault(require("../models/santri"));
class DataSantriControl {
    hello(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ message: "hello Ayyasy" });
        });
    }
    showDataSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const showData = yield santri_1.default.findAll();
            return res.json(showData);
        });
    }
    getDataSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const getOne = yield santri_1.default.findOne({
                where: {
                    id: id
                }
            });
            return res.json(getOne);
        });
    }
    createDataSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, tempatLahir, tanggalLahir, alamat, anakKe, pendidikanTerakhir, namaAyah, namaIbu, noHpAyah, noHpIbu, awalMasuk } = req.body;
                yield santri_1.default.create({
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
                });
                return res.json({ message: "Santri Created" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    deleteDataSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield santri_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Delete Santri Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    updateDataSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { nama, tempatLahir, tanggalLahir, alamat, anakKe, pendidikanTerakhir, namaAyah, namaIbu, noHpAyah, noHpIbu, awalMasuk } = req.body;
                yield santri_1.default.update({
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
                });
                return res.json({ message: "Update Santri Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
}
exports.default = new DataSantriControl;
