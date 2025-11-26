import { Router } from "express";
import listCategoriesHandler from "../handlers/list-categories.handler.js";
import findCategoryByIdHandler from "../handlers/find-by-id.hanlder.js";
import saveCategoryHandler from "../handlers/save-category.handler.js";
import { enable, remove, update } from "../handlers/category.handler.js";
import findCategoryBySlugHandler from "../handlers/find-by-slug.hanlder.js";

const categoryRouter = Router()

categoryRouter.get("/", listCategoriesHandler)

categoryRouter.get("/:id", findCategoryByIdHandler)

categoryRouter.get("/slug/:slug", findCategoryBySlugHandler)

categoryRouter.post("/", saveCategoryHandler)

categoryRouter.put("/:id", update)

categoryRouter.delete("/:id", remove)

categoryRouter.patch("/enable/:id", enable)

export default categoryRouter
