import { Schema, model } from "mongoose"

const categrySchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  status: { type: Boolean, default: true }
})

const Category = model("Category", categrySchema)
export default Category
