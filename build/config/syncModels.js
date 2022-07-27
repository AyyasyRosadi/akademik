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
const database_1 = __importDefault(require("./database"));
const santri_1 = __importDefault(require("../models/santri"));
const raporSantri_1 = __importDefault(require("../models/raporSantri"));
const hafalanSantri_1 = __importDefault(require("../models/hafalanSantri"));
const absensiSantri_1 = __importDefault(require("../models/absensiSantri"));
function Sync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            database_1.default.authenticate();
            console.info("Connected");
            yield santri_1.default.sync({
                alter: true
            });
            yield raporSantri_1.default.sync({
                alter: true
            });
            yield hafalanSantri_1.default.sync({
                alter: true
            });
            yield absensiSantri_1.default.sync({
                alter: true
            });
        }
        catch (e) {
            console.warn(e);
        }
    });
}
exports.default = Sync;
