import { enableProduct } from "../repositories/product.repository.js";

async function enableProductHandler(req, res) {
  try {
    const id = validateID(req)

    const productoHabilitado = await enableProduct(id);

    res.status(200).json(productoHabilitado);
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default enableProductHandler
