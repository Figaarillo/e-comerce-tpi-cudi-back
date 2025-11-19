const findCategoryByIdHandler = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await getCategoryByProp({ id })

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export default findCategoryByIdHandler
