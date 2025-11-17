import UserModel from "../models/user.model.js"

/**
 * Buscar un usuarios segun el atributo que se pase por parametro
 * @param {Object} prop Representa el atributo que se quiere buscar. Ej. { username: "admin" }, { email: "a@b.com" }
 * @returns {Object} Retorna el usuario encontrado
 */
export const findUserByProp = async (prop) => {
  // const user = await UserModel.findOne({ ...prop, status: true })
  const user = await UserModel.findOne({ prop })

  if (user == null) {
    throw new Error("User not found")
  }

  return user
}

/**
 * Crea un nuevo usuario
 * @param {Object} user Contiene la informacion del nuevo usuario
 * @returns {Object} Retorna el usuario encontrado
 */
export const registerUser = async (user) => {
  const newUser = await UserModel.create(user)
  return newUser
}

export const logoutUser = async (user) => { }
