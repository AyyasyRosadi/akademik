import InterfaceRoutes from "./interfacesRoutes";
import { Router } from "express";

abstract class BaseRouter implements InterfaceRoutes {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }
    abstract routes():void;
}
export default BaseRouter;