import express from "express"
import { productBodyValidation, productParamValidation } from "../validations/product.validation.js"
import listProductsHandler from "../handlers/list-products.handler.js"
import findProductByIdHandler from "../handlers/find-by-id.handler.js"
import saveProductHandler from "../handlers/save-product.handler.js"
import updateHandler from "../handlers/update-product.handler.js"
import removeProductHandler from "../handlers/remove-product.handler.js"
import enableProductHandler from "../handlers/enable-product.handler.js"
import getProductsByCategoryHandler from "../handlers/get-products-by-category.handler.js"

const productRouter = express.Router()

productRouter.get("/", listProductsHandler)

productRouter.get("/:id", productParamValidation, findProductByIdHandler)

productRouter.post("/", saveProductHandler)

productRouter.put("/:id", productParamValidation, productBodyValidation, updateHandler)

productRouter.delete("/:id", productParamValidation, removeProductHandler)

productRouter.put("/enable/:id", enableProductHandler)

/**
 * Ejemploa:
 * /api/products/category/herramientas
 * /api/products/category/celulares
 * /api/products/category/Ropa de hombre
 * /api/products/category/ropa-de-hombre
 * /api/products/category/ropa-de-mujer
*/
productRouter.get("/category/:category", getProductsByCategoryHandler)

export default productRouter
