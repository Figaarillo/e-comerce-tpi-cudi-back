import handleHttpError from "../../shared/errors/handle-http-error.js";
import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js";
import { createNewProduct } from "../repositories/product.repository.js";

async function saveProductHandler(req, res) {
  try {
    const { name, price, status, stock } = req.body;

    validateIfIsEmpty(name)
    validateIfIsEmpty(price)
    validateIfIsEmpty(status)
    validateIfIsEmpty(stock)

    const productoCreado = await createNewProduct(
      name,
      price,
      stock,
      status
    );

    res.status(201).json({
      mensaje: "producto creado",
      data: productoCreado
    });
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default saveProductHandler
