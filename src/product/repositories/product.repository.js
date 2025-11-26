import ProductModel from "../models/product.model.js";

export async function getAllProductsAndPopulate() {
  const productos = await ProductModel
    .find({ status: true })
    .populate('category', 'name slug description image')
  return productos
}

export async function getOneProduct(idProducto) {
  const product = await ProductModel.findOne({ _id: idProducto, status: true })
  return product
}

export async function getOneProductAndPopulate(idProducto) {
  const product = await ProductModel
    .findOne({ _id: idProducto, status: true })
    .populate('category', 'name slug description image')
  return product
}

export async function getProductsByProp(prop) {
  const productos = await ProductModel
    .find({ ...prop, status: true })
  return productos
}

export const getProductsByPropAndPopulate = async (prop) => {
  const product = await ProductModel
    .find({ ...prop, status: true })
    .populate('category', 'name slug description image')
  return product
}

export async function createNewProduct(name, price, stock, status) {
  const productoNuevo = await ProductModel.create({
    name,
    price,
    stock,
    status
  })

  return productoNuevo
}

export async function updateProduct(id, name, price, stock, status) {
  const productoActualizado = await ProductModel.findByIdAndUpdate(id, {
    name,
    price,
    stock,
    status
  })
  return productoActualizado
}

export async function removeProduct(id) {
  //Product.findOneAndDelete() -> borrado fisico -> eliminar de db
  const productoEliminado = await ProductModel.findByIdAndUpdate(id, { status: false }) //borrado logico -> cambiar estado
  return productoEliminado
}

export async function enableProduct(id) {
  const productoHabilitado = await ProductModel.findByIdAndUpdate(id, { status: true })
  return productoHabilitado
}
