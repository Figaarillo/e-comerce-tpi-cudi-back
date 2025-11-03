import { validateIfIsEmpty } from "../../shared/utils/validate-attribute.js"
import { createCategoryRepo, deleteCategoryRepo, getAllCategories, getCategoryByPropRepo, restoreCategoryRepo, updateCategoryRepo } from "../repsitories/category.repository.js"

export const listCategores = async (_, res) => {
  try {
    const categories = await getAllCategories()

    if (categories.length === 0) {
      res.status(200).json({ message: "categorias no encontradas", data: categories })
    }

    res.status(200).json({ message: "categorias encontradas", data: categories })
  } catch (error) {
    console.error(error)
  }
}

export const findById = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await getCategoryByPropRepo({ id })

    res.status(200).json({
      message: "categoria encontrada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const saveCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = await createCategoryRepo({ name, description, image })

    res.status(200).json({
      message: "categoria creada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const updateCategory = async (req, res) => {
  try {
    const id = validateID(req)

    const { name, description, image } = req.body

    validateIfIsEmpty(name)
    validateIfIsEmpty(description)
    validateIfIsEmpty(image)

    const category = await updateCategoryRepo(id, { name, description, image })

    res.status(200).json({
      message: "categoria actualizada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const removeCategory = async (req, res) => {
  try {
    const id = validateID(req)

    const category = await deleteCategoryRepo(id)

    res.status(200).json({
      message: "categoria eliminada",
      data: category
    })
  } catch (error) {
    console.error(error)
  }
}

export const enableCategoty = async (req, res) => {
  try {
    const id = validateID(req)

    await restoreCategoryRepo(id)

    res.status(200).json({
      mssage: "categoria habilitada",
    })
  } catch (error) {
    console.error(error)
  }

}
