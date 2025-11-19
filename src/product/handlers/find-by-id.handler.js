import handleHttpError from "../../shared/errors/handle-http-error.js";
import { getOneProduct } from "../repositories/product.repository.js";

async function findByIdHandler(req, res) {
  try {
    const id = validateID(req)

    const product = await getOneProduct(id);

    if (product) {
      res.status(200).json({
        mensaje: "producto encontrado",
        codigo: 200,
        datos: product,
      });
    } else {
      res.status(200).json({
        mensaje: "producto no encontrado",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default findByIdHandler
