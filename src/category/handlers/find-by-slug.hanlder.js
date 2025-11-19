import ErrorHandler from "../../shared/errors/handle-error";

const findCategoryBySlugHandler = async (req, res) => {
  try {
    const { slug } = req.params;

    const category = await getCategoryByProp({ slug })

    if (category == null) {
      throw new ErrorHandler("CATEGORY_NOT_EXISTS", 404)
    }

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export default findCategoryBySlugHandler
