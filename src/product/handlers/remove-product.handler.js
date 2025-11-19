import handleHttpError from "../../shared/errors/handle-http-error.js";
import { removeProduct } from "../repositories/product.repository.js";

async function removeProductHandler(req, res) {
  try {
    const id = validateID(req)

    const productoEliminado = await removeProduct(id);

    res.status(200).json(productoEliminado);
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default removeProductHandler
