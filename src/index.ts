import Sync from "./config/syncModels";
import express,{ Application} from "express";
import compression from "compression";
import routes from "./routes";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors"

const app : Application = express();
const port : number = 8050;
app.use(morgan("dev"));
app.use(helmet()); 
app.use(compression());
app.use(express.json());
app.use(cors({
    origin:"*"
}))
Sync();
app.use(`/`,routes)
app.listen(port , ()=>{
    console.log(`OK ${port}`)
})