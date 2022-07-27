import db from "./database";
import DataSantri from "../models/santri";
import RaporSantri from "../models/raporSantri";
import HafalanSantri from "../models/hafalanSantri";
import AbsensiSantri from "../models/absensiSantri";

async function Sync(): Promise<void> {
    try {
        db.authenticate();
        console.info("Connected");
        await DataSantri.sync({
            alter: true
        })
        await RaporSantri.sync({
            alter: true
        })
        await HafalanSantri.sync({
            alter: true
        })
        await AbsensiSantri.sync({
            alter : true
        })
    }
    catch (e) {
        console.warn(e)
    }
}
export default Sync;