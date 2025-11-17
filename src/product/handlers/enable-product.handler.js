import { enableProduct } from "../repositories/product.repository.js";

async function enable(req, res) {
  try {
    const id = validateID(req)

    const productoHabilitado = await enableProduct(id);

    res.status(200).json(productoHabilitado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export default enable
