"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const Santri_1 = __importDefault(require("../controller/Santri"));
class DataSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, Santri_1.default.hello);
        this.router.get(`/show`, Santri_1.default.showDataSantri);
        this.router.get(`/:id`, Santri_1.default.getDataSantri);
        this.router.post(`/`, Santri_1.default.createDataSantri);
        this.router.delete(`/:id`, Santri_1.default.deleteDataSantri);
        this.router.put(`/:id`, Santri_1.default.updateDataSantri);
    }
}
exports.default = new DataSantriRoute().router;
