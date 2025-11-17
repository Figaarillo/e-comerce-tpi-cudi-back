import jwt from "jsonwebtoken"

const JWT_ACCESS = process.env.JWT_ACCESS
const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN
const JWT_REFRESH = process.env.JWT_REFRESH
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN

/**
 * Genera un access token que permite acceder a los recursos de la API
 * @param {object} payload Información del usuario
 * @returns {string} Token de acceso
*/
export const generateAccessToken = payload => {
  return jwt.sign(payload, JWT_ACCESS, { expiresIn: JWT_ACCESS_EXPIRES_IN })
}

/**
 * Genera un refresh token que permite renovar el access token
 * @param {object} payload Información del usuario
 * @returns {string} Refresh token
*/
export const generateRefreshToken = payload => {
  return jwt.sign(payload, JWT_REFRESH, { expiresIn: JWT_REFRESH_EXPIRES_IN })
}

