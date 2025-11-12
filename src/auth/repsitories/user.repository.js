import UserModel from "../models/user.model";

/**
 * Registers a new user
 * Encryt the password
 * Encryt thr user's object by JWT
 * @param {*} userData Data to be registered
 */
export const registerUser = async (userData) => {
  const user = await UserModel.create(userData);

  // Se elimina el password de la respuesta
  user.set('password', undefined, { stric: false });

  return user;
};

/**
 * Find user by email
 * @param {string} prop Propiedad que se utiliza para buscar un usuario
  * @returns {object} User
 */
export const findUserByProp = async (prop) => {
  const user = await UserModel
    .findOne({ email })
    .select('password name role email'); // is necessary, otherwise password returns undefined

  if (!user) {
    throw new Error('USER_NOT_EXISTS');
  }

  return user;
};

