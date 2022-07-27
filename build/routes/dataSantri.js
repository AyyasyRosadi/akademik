"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const dataSantri_1 = __importDefault(require("../controller/dataSantri"));
class DataSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, dataSantri_1.default.hello);
        this.router.get(`/show`, dataSantri_1.default.showDataSantri);
        this.router.get(`/:id`, dataSantri_1.default.getDataSantri);
        this.router.post(`/`, dataSantri_1.default.createDataSantri);
        this.router.delete(`/:id`, dataSantri_1.default.deleteDataSantri);
        this.router.put(`/:id`, dataSantri_1.default.updateDataSantri);
    }
}
exports.default = new DataSantriRoute().router;
