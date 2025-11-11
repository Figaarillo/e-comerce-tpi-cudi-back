import express from "express"
import * as productController from "../handlers/product.handler.js"
import { productBodyValidation } from "../validations/product.validation.js"

const productRouter = express.Router()

productRouter.post("/", productController.saveProduct)

productRouter.get("/", productBodyValidation, validationMiddleware, productController.listProducts)

productRouter.get("/:id",
  productParamValidation,
  productController.findById)

productRouter.put("/:id", productController.update)

productRouter.delete("/:id", productController.remove)

productRouter.put("/enable/:id", productController.enable)

export default productRouter
