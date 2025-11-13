import express from "express"
import loginController from "../handlers/login-user.handler"
import registerController from "../handlers/register-user.handler"
import { loginUserValidation, registerUserValidation } from "../validations/auth.validation"

const authRouter = express.Router()

authRouter.post("/register", registerUserValidation, registerController)
authRouter.post("/login", loginUserValidation, loginController)

export default authRouter
