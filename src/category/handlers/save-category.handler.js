const saveCategoryHandler = async (req, res) => {
  try {
    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = await createCategory({ name, description, image })

    res.status(200).json({
      message: "categoria creada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export default saveCategoryHandler
