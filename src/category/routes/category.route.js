import { Router } from "express";
import { removeCategory, findById, listCategores, saveCategory, updateCategory } from "../handlers/category.handler.js";

const categoryRouter = Router()

categoryRouter.get("/", listCategores)

categoryRouter.get("/:id", findById)

categoryRouter.post("/", saveCategory)

categoryRouter.put("/:id", updateCategory)

categoryRouter.delete("/:id", removeCategory)

categoryRouter.patch("/enable/:id", enableCategoty)

export default categoryRouter
