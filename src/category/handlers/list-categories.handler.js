import handleHttpError from "../../shared/errors/handle-http-error"
import { getAllCategories } from "../repsitories/category.repository"

const listCategoriesHandler = async (_, res) => {
  try {
    const categories = await getAllCategories()

    if (categories.length === 0) {
      res.status(200).json({ message: "categorias no encontradas", data: categories })
    }

    res.status(200).json({
      message: "categorias encontradas",
      data: categories
    })
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default listCategoriesHandler
