import handleHttpError from "../../shared/errors/handle-http-error.js"
import validateID from "../../shared/utils/validate-id.util.js"
import { getCategoryByProp } from "../repsitories/category.repository.js"

const findCategoryByIdHandler = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await getCategoryByProp({ id })

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    handleHttpError(res, error)
  }
}

export default findCategoryByIdHandler
