import BaseRouter from "./baseRoutes";
import DataHafalanSantriControl from "../controller/hafalanSantri";

class DataHafalanSantriRoute extends BaseRouter{
    public routes():void{
        this.router.get(`/`,DataHafalanSantriControl.hello)
        this.router.get(`/show`,DataHafalanSantriControl.showDataHafalan)
        this.router.post(`/`,DataHafalanSantriControl.createDataHafalan)
        this.router.delete(`/:id`,DataHafalanSantriControl.deleteDataHafalan)
        this.router.put(`/:id`,DataHafalanSantriControl.updateDataHafalan)
    }
}
export default new DataHafalanSantriRoute().router;