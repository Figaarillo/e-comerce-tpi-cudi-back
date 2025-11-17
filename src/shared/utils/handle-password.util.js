import bcrypt from "bcrypt"

/**
 * Encripta la contraseña
 * @param {*} passwordPlain contraseña sin encriptar
 */
export const encryptPassword = async passwordPlain => {
  const hash = await bcrypt.hash(passwordPlain, 10);
  return hash;
};

/**
 * Verifica si el hash corresponde a la key
 * @param {*} passwordPlain Contraseña sin encriptar
 * @param {*} hashPassword 
 */
export const comparePassword = async (passwordPlain, hashPassword) => {
  // return await bcrypt.compare(passwordPlain, hashPassword);
  const check = await bcrypt.compare(passwordPlain, hashPassword);
  if (!check) {
    handleError("PASSWORD_INVALID", 401)
    return
  }
};
