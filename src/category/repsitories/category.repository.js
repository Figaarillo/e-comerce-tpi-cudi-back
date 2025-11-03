import CategoryModel from "../models/category.model"

export const getAllCategoriesPaginatedRepo = async (offset, limit) => {
  const categories = await CategoryModel.find({ status: true })

  if (categories.length === 0) {
    return []
  }

  return categories
}

export const getCategoryByPropRepo = async (prop) => {
  const category = await CategoryModel.findOne({ ...prop, status: true })

  if (category == null) {
    throw new Error("Category not found")
  }

  return category
}

export const createCategoryRepo = async (category) => {
  const newCategory = await CategoryModel.create(category)
  if (newCategory == null) {

    throw new Error("Repository error: Cannot create category")
  }

  return newCategory
}

export const updateCategoryRepo = async (id, category) => {
  const updatedCategory = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { ...category },
    { new: true }
  )

  if (updatedCategory == null) {
    throw new Error("Repository error: Cannot update category")
  }

  return updateCategoryRepo
}

export const deleteCategoryRepo = async (id) => {
  await CategoryModel.findByIdAndUpdate(id, { status: false })
}

export const restoreCategoryRepo = async (id) => {
  await CategoryModel.findOneAndUpdate({ _id: id }, { status: true })
}

