"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const dataHafalanSantri_1 = __importDefault(require("../controller/dataHafalanSantri"));
class DataHafalanSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, dataHafalanSantri_1.default.hello);
        this.router.get(`/show`, dataHafalanSantri_1.default.showDataHafalan);
        this.router.post(`/`, dataHafalanSantri_1.default.createDataHafalan);
        this.router.delete(`/:id`, dataHafalanSantri_1.default.deleteDataHafalan);
        this.router.put(`/:id`, dataHafalanSantri_1.default.updateDataHafalan);
    }
}
exports.default = new DataHafalanSantriRoute().router;
