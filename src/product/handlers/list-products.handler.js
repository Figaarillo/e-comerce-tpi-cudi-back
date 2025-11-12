import { getAllProducts } from "../repositories/product.repository.js";

async function listProducts(req, res) {
  try {
    const products = await getAllProducts();

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
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export default listProducts
