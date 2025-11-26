import handleHttpError from "../../shared/errors/handle-http-error.js";
import { getAllProductsAndPopulate } from "../repositories/product.repository.js";

async function listProductsHandler(req, res) {
  try {
    const products = await getAllProductsAndPopulate();

    if (products) {
      res.status(200).json({
        mensaje: "productos encontrados",
        codigo: 200,
        datos: products,
      });
    } else {
      res.status(200).json({
        mensaje: "productos no encontrados",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default listProductsHandler
