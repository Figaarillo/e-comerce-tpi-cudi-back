import { removeProduct } from "../repositories/product.repository.js";

async function remove(req, res) {
  try {
    const id = validateID(req)

    const productoEliminado = await removeProduct(id);

    res.status(200).json(productoEliminado);
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export default remove
