"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const absensiSantri_1 = __importDefault(require("../controller/absensiSantri"));
class AbsensiSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, absensiSantri_1.default.hello);
        this.router.get(`/show`, absensiSantri_1.default.showAbsensi);
        this.router.post(`/`, absensiSantri_1.default.createAbsensi);
        this.router.put(`/:id`, absensiSantri_1.default.updateAbsensi);
        this.router.delete(`/:id`, absensiSantri_1.default.deleteAbsensi);
    }
}
exports.default = new AbsensiSantriRoute().router;
