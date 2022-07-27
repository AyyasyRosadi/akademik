import BaseRouter from "./baseRoutes";
import DataSantriControl from "../controller/santri"

class DataSantriRoute extends BaseRouter{
    public routes():void{
        this.router.get(`/`,DataSantriControl.hello)
        this.router.get(`/show`,DataSantriControl.showDataSantri)
        this.router.get(`/:id`,DataSantriControl.getDataSantri)
        this.router.post(`/`,DataSantriControl.createDataSantri)
        this.router.delete(`/:id`,DataSantriControl.deleteDataSantri)
        this.router.put(`/:id`,DataSantriControl.updateDataSantri)

    }
}
export default new DataSantriRoute().router;