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
const raporSantri_1 = __importDefault(require("../models/raporSantri"));
class RaporsantriControl {
    hello(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ message: " Haii Rapor Santri" });
        });
    }
    showRaporSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const showRapor = yield raporSantri_1.default.findAll();
            return res.json(showRapor);
        });
    }
    createRaporSantri(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, aqidah, fiqh, manhaj, bahasaArab, nahwuShorof, hadits, tahfidz, sejarah, bahasaIndonesia, bahasaInggris, matematika, penjaskes } = req.body;
                yield raporSantri_1.default.create({
                    nama: nama,
                    aqidah: aqidah,
                    fiqh: fiqh,
                    manhaj: manhaj,
                    bahasaArab: bahasaArab,
                    nahwuShorof: nahwuShorof,
                    hadits: hadits,
                    tahfidz: tahfidz,
                    sejarah: sejarah,
                    bahasaIndonesia: bahasaIndonesia,
                    bahasaInggris: bahasaInggris,
                    matematika: matematika,
                    penjaskes: penjaskes
                });
                return res.json({ message: "Rapor Created" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    deleteRapor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield raporSantri_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Rapor Deleted" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    updateRapor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nama, aqidah, fiqh, manhaj, bahasaArab, nahwuShorof, hadits, tahfidz, sejarah, bahasaIndonesia, bahasaInggris, matematika, penjaskes } = req.body;
                yield raporSantri_1.default.update({
                    nama: nama,
                    aqidah: aqidah,
                    fiqh: fiqh,
                    manhaj: manhaj,
                    bahasaArab: bahasaArab,
                    nahwuShorof: nahwuShorof,
                    hadits: hadits,
                    tahfidz: tahfidz,
                    sejarah: sejarah,
                    bahasaIndonesia: bahasaIndonesia,
                    bahasaInggris: bahasaInggris,
                    matematika: matematika,
                    penjaskes: penjaskes
                }, {
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Update Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
}
exports.default = new RaporsantriControl;
