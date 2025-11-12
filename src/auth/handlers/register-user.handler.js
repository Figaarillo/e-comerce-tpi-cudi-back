import { encryptPassword } from "../../shared/utils/handle-password.util"
import { findUserByProp, registerUser } from "../repsitories/user.repository"

const registerController = async (req, res) => {
  try {
    if (findUserByProp({ email: req.body.email })) {
      throw new Error("USER_ALREADY_EXISTS")
    }

    const hashedPassword = await encryptPassword(req.body.password)

    const user = { ...req.body, password: hashedPassword }

    await registerUser(req.body)

    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "error en el servidor",
      error: error,
    })
  }
}

export default registerController
