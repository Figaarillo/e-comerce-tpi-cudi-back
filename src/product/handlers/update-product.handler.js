import { updateProduct } from "../repositories/product.repository.js";

async function update(req, res) {
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
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export default update
