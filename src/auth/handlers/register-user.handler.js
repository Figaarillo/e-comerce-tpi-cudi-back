import ErrorHandler from "../../shared/errors/handle-error"
import handleHttpError from "../../shared/errors/handle-http-error"
import { encryptPassword } from "../../shared/utils/handle-password.util"
import { findUserByProp, registerUser } from "../repsitories/user.repository"

const registerController = async (req, res) => {
  try {
    if (findUserByProp({ email: req.body.email })) {
      throw new ErrorHandler("USER_ALREADY_EXISTS", 400)
    }

    const hashedPassword = await encryptPassword(req.body.password)

    const user = { ...req.body, password: hashedPassword }

    await registerUser(req.body)

    res.status(201).json(user)
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default registerController
