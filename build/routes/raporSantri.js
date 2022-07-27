"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const raporSantri_1 = __importDefault(require("../controller/raporSantri"));
class RaporSantriRoute extends baseRoutes_1.default {
    routes() {
        this.router.get(`/`, raporSantri_1.default.hello);
        this.router.get(`/show`, raporSantri_1.default.showRaporSantri);
        this.router.post(`/`, raporSantri_1.default.createRaporSantri);
        this.router.delete(`/:id`, raporSantri_1.default.deleteRapor);
        this.router.put(`/:id`, raporSantri_1.default.updateRapor);
    }
}
exports.default = new RaporSantriRoute().router;
