import express from "express";
import DataSantriRoute from "./santri";
import AbsensiSantriRoute from "./absensiSantri"
import dataHafalanSantri from "./hafalanSantri";
import RaporSantriRoute from "./raporSantri"

const routes = express();
routes.use(`/santri`,DataSantriRoute);
routes.use(`/absensi`,AbsensiSantriRoute)
routes.use(`/hafalan`,dataHafalanSantri)
routes.use(`/rapor`,RaporSantriRoute)



export default routes;