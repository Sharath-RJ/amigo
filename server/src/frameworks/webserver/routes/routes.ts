import AuthRouter from "./userAuth"

import { Application } from "express"
import ChatRouter from "./chat"
import userRoute from "./user"
import adminRouter from "./admin"


const routes = (app: Application) => {

    app.use("/api/user-auth", AuthRouter())

    app.use("/api/chat",ChatRouter())
    app.use("/api/user", userRoute())
    app.use("/api/admin", adminRouter())
    
}

export default routes
