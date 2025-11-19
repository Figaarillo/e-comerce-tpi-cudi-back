import handleHttpError from "../../shared/errors/handle-http-error"
import { getProductsByProp } from "../repositories/product.repository"

const getProductsByCategoryHandler = async (req, res) => {
  try {
    const { category } = req.params

    const products = await getProductsByProp({
      category: category.toLowerCase()
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
