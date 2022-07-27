import BaseRouter from "./baseRoutes";
import RaporSantriControl from "../controller/raporSantri";

class RaporSantriRoute extends BaseRouter{
    public routes():void{
        this.router.get(`/`,RaporSantriControl.hello);
        this.router.get(`/show`,RaporSantriControl.showRaporSantri);
        this.router.post(`/`,RaporSantriControl.createRaporSantri);
        this.router.delete(`/:id`,RaporSantriControl.deleteRapor)
        this.router.put(`/:id`,RaporSantriControl.updateRapor)
    }   
}
export default new RaporSantriRoute().router;
