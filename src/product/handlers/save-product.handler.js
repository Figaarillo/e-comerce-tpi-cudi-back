import { getCategoryByProp } from "../../category/repsitories/category.repository.js";
import ErrorHandler from "../../shared/errors/handle-error.js";
import handleHttpError from "../../shared/errors/handle-http-error.js";
import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js";
import { createNewProduct } from "../repositories/product.repository.js";

async function saveProductHandler(req, res) {
  try {
    const { name, price, description, category, categorySlug, image, status, rating } = req.body;

    validateIfIsEmpty(name)
    validateIfIsEmpty(price)
    validateIfIsEmpty(description)
    validateIfIsEmpty(category)
    validateIfIsEmpty(image)

    const categoryExists = await getCategoryByProp({ _id: category })
    if (!categoryExists) {
      throw new ErrorHandler("CATEGORY_NOT_EXISTS", 404)
    }

    const productoCreado = await createNewProduct(
      name,
      price,
      description,
      category,
      categorySlug,
      image,
      rating,
      status
    );

    res.status(201).json({
      mensaje: "producto creado",
      data: productoCreado
    });
  } catch (error) {
    console.error(error)
    handleHttpError(res, error)
  }
}

export default saveProductHandler
