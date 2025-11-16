import express from "express"
import loginHandler from "../handlers/login-user.handler"
import registerHandler from "../handlers/register-user.handler"
import { loginUserValidation, registerUserValidation } from "../validations/auth.validation"

const authRouter = express.Router()

authRouter.post("/register", registerUserValidation, registerHandler)
authRouter.post("/login", loginUserValidation, loginHandler)

export default authRouter
