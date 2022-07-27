"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const santri_1 = __importDefault(require("./santri"));
const absensiSantri_1 = __importDefault(require("./absensiSantri"));
const hafalanSantri_1 = __importDefault(require("./hafalanSantri"));
const raporSantri_1 = __importDefault(require("./raporSantri"));
const routes = (0, express_1.default)();
routes.use(`/santri`, santri_1.default);
routes.use(`/absensi`, absensiSantri_1.default);
routes.use(`/hafalan`, hafalanSantri_1.default);
routes.use(`/rapor`, raporSantri_1.default);
exports.default = routes;
