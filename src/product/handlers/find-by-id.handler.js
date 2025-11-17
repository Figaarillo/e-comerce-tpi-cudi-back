import { getOneProduct } from "../repositories/product.repository.js";

async function findById(req, res) {
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
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export default findById
