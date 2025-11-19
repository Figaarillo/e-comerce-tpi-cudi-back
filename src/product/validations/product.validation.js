import { body, param } from "express-validator"
import validationMiddleware from "../../shared/middlewares/validation.middleware"

export const productBodyValidation = [
  body("name").isString().isLength({ min: 3, max: 50 }).withMessage("El nombre debe tener entre 3 y 50 caracteres"),
  body("price").isNumeric().withMessage("El precio debe ser un número"),
  body("stock").isNumeric().withMessage("El stock debe ser un número"),
  (req, res, next) => validationMiddleware(req, res, next),
]

export const productParamValidation = [
  param("id").isNumeric(),
  (req, res, next) => validationMiddleware(req, res, next),
]
