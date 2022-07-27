"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const hafalanSantri_1 = __importDefault(require("../controller/hafalanSantri"));
class DataHafalanSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, hafalanSantri_1.default.hello);
        this.router.get(`/show`, hafalanSantri_1.default.showDataHafalan);
        this.router.post(`/`, hafalanSantri_1.default.createDataHafalan);
        this.router.delete(`/:id`, hafalanSantri_1.default.deleteDataHafalan);
        this.router.put(`/:id`, hafalanSantri_1.default.updateDataHafalan);
    }
}
exports.default = new DataHafalanSantriRoute().router;
