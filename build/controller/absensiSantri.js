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
const absensiSantri_1 = __importDefault(require("../models/absensiSantri"));
class AbsensiSantriContol {
    hello(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({ messgae: "Hello Absensi Santri" });
        });
    }
    showAbsensi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const showAbsen = yield absensiSantri_1.default.findAll();
            return res.json(showAbsen);
        });
    }
    createAbsensi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, keteranganAbsensi, TanggalAbsensi } = req.body;
                yield absensiSantri_1.default.create({
                    nama: nama,
                    keteranganAbsensi: keteranganAbsensi,
                    TanggalAbsensi: TanggalAbsensi
                });
                return res.json({ message: "Absensi created" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    deleteAbsensi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield absensiSantri_1.default.destroy({
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Delete Absensi Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
    updateAbsensi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { nama, keteranganAbsensi, TanggalAbsensi } = req.body;
                yield absensiSantri_1.default.update({
                    nama: nama,
                    keteranganAbsensi: keteranganAbsensi,
                    TanggalAbsensi: TanggalAbsensi
                }, {
                    where: {
                        id: id
                    }
                });
                return res.json({ message: "Update Absensi Succes" });
            }
            catch (e) {
                return res.status(400).json({ message: "Bad Request" });
            }
        });
    }
}
exports.default = new AbsensiSantriContol;
