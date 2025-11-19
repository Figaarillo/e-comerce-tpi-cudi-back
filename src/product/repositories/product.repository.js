import Product from "../models/product.model.js";

export async function getAllProducts() {
  const productos = await Product.find({ status: true })
  return productos
}

export async function getOneProduct(idProducto) {
  const producto = await Product.findOne({ _id: idProducto, status: true })
  return producto
}

export async function getProductsByProp(prop) {
  const productos = await Product.find({ ...prop, status: true })
  return productos
}

export async function createNewProduct(name, price, stock, status) {
  const productoNuevo = await Product.create({
    name,
    price,
    stock,
    status
  })

  return productoNuevo
}

export async function updateProduct(id, name, price, stock, status) {
  const productoActualizado = await Product.findByIdAndUpdate(id, {
    name,
    price,
    stock,
    status
  })
  return productoActualizado
}

export async function removeProduct(id) {
  //Product.findOneAndDelete() -> borrado fisico -> eliminar de db
  const productoEliminado = await Product.findByIdAndUpdate(id, { status: false }) //borrado logico -> cambiar estado
  return productoEliminado
}

export async function enableProduct(id) {
  const productoHabilitado = await Product.findByIdAndUpdate(id, { status: true })
  return productoHabilitado
}
