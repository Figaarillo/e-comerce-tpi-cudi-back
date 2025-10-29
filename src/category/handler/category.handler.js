import { validateIfIsEmpty } from "../../shared/utils/validate-attribute"
import { createCategoryRepo, deleteCategoryRepo, getAllCategories, getCategoryByPropRepo, updateCategoryRepo } from "../repsitories/category.repository"

export const listCategory = (_, res) => {
  try {
    const categories = getAllCategories()

    if (categories.length === 0) {
      res.status(200).json({ message: "categorias no encontradas", data: categories })
    }

    res.status(200).json({ message: "categorias encontradas", data: categories })
  } catch (error) {
    console.error(error)
  }
}

export const findById = (req, res) => {
  try {
    const { id } = req.params

    const category = getCategoryByPropRepo({ id })

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const saveCategory = (req, res) => {
  try {
    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = createCategoryRepo({ name, description, image })

    res.status(200).json({
      message: "categoria creada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const updateCategoryR = (req, res) => {
  try {
    const { id } = req.params

    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = updateCategoryRepo(id, { name, description, image })

    res.status(200).json({
      message: "categoria actualizada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const deleteCategory = (req, res) => {
  try {
    const { id } = req.params

    const category = deleteCategoryRepo(id)

    res.status(200).json({
      message: "categoria eliminada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}
