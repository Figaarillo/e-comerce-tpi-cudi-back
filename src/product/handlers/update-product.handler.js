import handleHttpError from "../../shared/errors/handle-http-error.js";
import { updateProduct } from "../repositories/product.repository.js";

async function updateHandler(req, res) {
  try {
    const id = validateID(req)

    const { name, price, status, stock } = req.body;

    validateIfIsEmpty(name)
    validateIfIsEmpty(price)
    validateIfIsEmpty(status)
    validateIfIsEmpty(stock)

    const updatedProduct = await updateProduct(
      id,
      name,
      price,
      stock,
      status
    );

    res.status(201).json(updatedProduct);
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default updateHandler
