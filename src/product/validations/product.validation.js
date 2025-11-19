import { body, param } from "express-validator"
import validationMiddleware from "../../shared/middlewares/validation.middleware.js"

export const productBodyValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isLength({ max: 200 })
    .withMessage('El nombre no puede exceder 200 caracteres'),

  body('price')
    .isFloat({ min: 0 })
    .withMessage('El precio debe ser un número positivo'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('La descripción es requerida'),

  body('category')
    .trim()
    .notEmpty()
    .withMessage('La categoría es requerida'),

  body('image')
    .trim()
    .notEmpty()
    .withMessage('La imagen es requerida')
    .isURL()
    .withMessage('La imagen debe ser una URL válida'),

  body("stock")
    .isNumeric()
    .withMessage("El stock debe ser un número"),

  body('active')
    .optional()
    .isBoolean()
    .withMessage('Active debe ser un valor booleano'),

  (req, res, next) => validationMiddleware(req, res, next),
]

export const productParamValidation = [
  param("id").isNumeric(),
  (req, res, next) => validationMiddleware(req, res, next),
]
