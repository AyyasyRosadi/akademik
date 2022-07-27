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
const dataHafalanSantri_1 = __importDefault(require("../models/dataHafalanSantri"));
class DataHafalanSantriControl {
    hello(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ message: "hai data hafalan" });
        });
    }
    showDataHafalan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataHafalan = yield dataHafalanSantri_1.default.findAll();
            return res.json(dataHafalan);
        });
    }
    createDataHafalan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, hafalanTahfidz, hafalanHadits, hafalanMatan, hafalanKosakataBahasaArab, hafalanKosakataBahasaInggris } = req.body;
                yield dataHafalanSantri_1.default.create({
                    nama: nama,
                    hafalanTahfidz: hafalanTahfidz,
                    hafalanHadits: hafalanHadits,
                    hafalanMatan: hafalanMatan,
                    hafalanKosakataBahasaArab: hafalanKosakataBahasaArab,
                    hafalanKosakataBahasaInggris: hafalanKosakataBahasaInggris
                });
                return res.json({ message: "Data Hafalan Created" });
            }
            catch (e) {
                return res.status(400).json(e);
            }
        });
    }
    deleteDataHafalan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield dataHafalanSantri_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Delete Data hafalan Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    updateDataHafalan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nama, hafalanTahfidz, hafalanHadits, hafalanMatan, hafalanKosakataBahasaArab, hafalanKosakataBahasaInggris } = req.body;
                yield dataHafalanSantri_1.default.update({
                    nama: nama,
                    hafalanTahfidz: hafalanTahfidz,
                    hafalanHadits: hafalanHadits,
                    hafalanMatan: hafalanMatan,
                    hafalanKosakataBahasaArab: hafalanKosakataBahasaArab,
                    hafalanKosakataBahasaInggris: hafalanKosakataBahasaInggris
                }, {
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Update Data Hafalan Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad request" });
            }
        });
    }
}
exports.default = new DataHafalanSantriControl;
