import ErrorHandler from "../../shared/errors/handle-error.js"
import handleHttpError from "../../shared/errors/handle-http-error.js"
import { getProductsByProp, getProductsByPropAndPopulate } from "../repositories/product.repository.js"

const getProductsByCategoryHandler = async (req, res) => {
  try {
    const { category } = req.params

    const categoryExists = await getProductsByProp({
      slug: category.toLowerCase()
    })

    if (categoryExists.length === 0) {
      throw new ErrorHandler("CATEGORY_NOT_EXISTS", 404)
    }

    const products = await getProductsByPropAndPopulate({
      category: categoryExists[0]._id
    })

    res.status(200).json({
      message: "productos encontrados",
      data: products
    })
  } catch (error) {
    handleHttpError(res, error)
  }

}

export default getProductsByCategoryHandler
