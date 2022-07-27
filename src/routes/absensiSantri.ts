import BaseRouter from "./baseRoutes";
import AbsensiSantriControl from "../controller/absensiSantri";

class AbsensiSantriRoute extends BaseRouter{
    public routes():void{
        this.router.get(`/`,AbsensiSantriControl.hello)
        this.router.get(`/show`,AbsensiSantriControl.showAbsensi)
        this.router.post(`/`,AbsensiSantriControl.createAbsensi)
        this.router.put(`/:id`,AbsensiSantriControl.updateAbsensi)
        this.router.delete(`/:id`,AbsensiSantriControl.deleteAbsensi)
    }
}
export default new AbsensiSantriRoute().router;